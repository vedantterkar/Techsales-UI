function CartItem(props){
    let src = "https://cataas.com/cat/says/"+props.name;
    return <div className="cartItem">
        <div className="cartItemImageCnt">
            <img src={src} width="90%" height="100px" alt={props.name} />
        </div>
        <div className="cartItemNameCnt">
            {props.name}
        </div>
        <div className="cartItemQtyCnt">
        <div>
        <input type='button' text=' - ' value=' - ' className='noBtnCart' />
        &nbsp;
        {props.qty}
        &nbsp; <input type='button' text=' + ' value=' + ' className='yesBtnCart' />
        </div>
        </div>
        <div className="cartItemPriceCnt">
            {isNaN(props.price)? props.price: "$"+props.price}
        </div>

        <div className="cartItemcalculatedPrice">
        {isNaN(props.totalItem)? props.totalItem: "$"+props.totalItem}
        </div>
        <div className="cartItemBtnCnt">
        
        <input type='button' text='X' value='X' className='delBtn' />
        </div>
    </div>

}

export default CartItem;