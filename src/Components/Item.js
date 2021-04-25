import { navigate } from 'hookrouter';
import endpoints from '../endpoints/endpoints'
import { useContext } from 'react';
import SessionContext from "./Contexts";

function Item(props) {
    const { headers, setAuthHeader } = useContext(SessionContext);
    
    function addToCart(elem){
        if(!(headers && headers["wwwAuthentication"] === "token"))
        {
            navigate("/login/1");
            return;
        }

        let e = window.event;
        e.target.innerHTML = "Adding..."
        e.target.className=' addedtocartBtn';
   
        // get (with headers/context) request https://api.techsales.dev/{add/remove}/{props.productId}
        const fetchAllTheThings = async () => {
            let addApi = endpoints.baseUrl+endpoints.add+props.productId;
            let addPageFromAPI = await fetch(addApi, { headers: { "www-Authentication": headers.wwwAuthentication, "Authorization": headers.Authorization }
            }).then(res => {
              let wwwAuthentication = res.headers.get("www-Authentication")
              let Authorization = res.headers.get("Authorization")
              setAuthHeader({ wwwAuthentication: wwwAuthentication, Authorization: Authorization }) 
              return res.json()
            })
            return addPageFromAPI
        }

        fetchAllTheThings()
            .then(res => {
                e.target.innerHTML='&#10003;';
                
                setTimeout(function(){
                    e.target.innerHTML = `+Add`;
                    e.target.className='addtocartBtn';
                }, 1000, e);
    
            })

    }

    let src = ""+props.image;
    return(
        <div className='item_mini'>
            <div className='item_mini_photo'>
                <img src={src} width='100%' height='100%' alt={props.name} />
            </div>
            <div className='item_mini_descp'>
            <b>{props.name}</b> <span className='item_mini_price'>${props.price}</span>
            <p> {props.descp}</p>
            </div>
            <button className='addtocartBtn' onClick={ addToCart.bind(this) }> + Add </button>
        </div>

    );

}

export default Item;