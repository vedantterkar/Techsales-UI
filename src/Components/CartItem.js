import { useState } from 'react';
import endpoints from "../endpoints/endpoints";
import { navigate } from 'hookrouter';
import { useContext } from 'react';
import SessionContext from "./Contexts";

function CartItem(props){
    const { headers } = useContext(SessionContext);
    const [ base64Img, setbase64Img ] = useState("");
    const [ cartInventory, setCartInventory ] = useState(0);
    let url = `${endpoints.baseUrl}${endpoints.product}${props.productId}`;
    
    fetch(url).then(d => {
        return d.json();
    })
    .then(e => {
        setbase64Img(e.image);  
        setCartInventory(parseInt(props.qty));
    });

    function validateLogin() {
        if(!(headers && headers["wwwAuthentication"] === "token")) {
            navigate("/login/1");
            return;
        }
    }

    function removeAll(e) {
        validateLogin();
        e = e || window.event;
        let elem = e.target;
        elem.value = "...";
        elem.className=' addedtocartBtn';
        
        doEndpointCall(`${endpoints.baseUrl}${endpoints.removeAll}${props.productId}`);
        
        elem.className = "delBtn";
        elem.value = " X ";
    }
    
    function add(e) {
        validateLogin();
        e = e || window.event;
        let elem = e.target;
        elem.value = "...";
        elem.className=' addedtocartBtn';
        
        doEndpointCall(`${endpoints.baseUrl}${endpoints.add}${props.productId}`);

        elem.className = "yesBtnCart";
        elem.value = " + ";
    
    }

    function remove(e) {

        validateLogin();
        e = e || window.event;
        let elem = e.target;
        elem.value = "..."
        elem.className=' addedtocartBtn';
        
        doEndpointCall(`${endpoints.baseUrl}${endpoints.remove}${props.productId}`);

        elem.className = "noBtnCart";
        elem.value = " - ";
    }

    function doEndpointCall(endPoint) {
        fetch(endPoint, { 
            headers: { 
                "www-Authentication": headers.wwwAuthentication, 
                "Authorization": headers.Authorization 
            }
        })
        .then(res => {
            if(res.status === 400 || res.status === 401 || res.status === 402 || res.status === 403) { 
                navigate("/login/1");
                return;
            }
            props.reload();
        }).catch(e => {
            console.log(`oops ${e}`);
        });
    }

    return <div className="cartItem">
        <div className="cartItemImageCnt">
            <img src={base64Img} width="90%" height="100px" alt={props.name} />
        </div>
        <div className="cartItemNameCnt">
            {props.name}
        </div>
        <div className="cartItemQtyCnt">
        <div>
        <input type='button' text=' - ' value=' - ' className='noBtnCart' disabled={cartInventory < 2} onClick={(e) => remove(e)}/>
        &nbsp;
        {cartInventory}
        &nbsp; <input type='button' text=' + ' value=' + ' className='yesBtnCart' onClick={(e) => add(e)} />
        </div>
        </div>
        <div className="cartItemPriceCnt">
            {isNaN(props.price)? props.price: "$"+props.price}
        </div>

        <div className="cartItemcalculatedPrice">
        {isNaN(props.totalItem)? props.totalItem: "$"+props.totalItem}
        </div>
        <div className="cartItemBtnCnt">
        
        <input type='button' text='X' value='X' className='delBtn' onClick={(e) => removeAll(e)}/>
        </div>

    
    </div>

}

export default CartItem;