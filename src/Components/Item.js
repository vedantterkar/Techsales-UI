function Item(props)
{

    let counter = 0;
    function addToCart(elem){
        counter++;
        console.log(elem);
        let e = window.event;
        e.target.innerHTML='&#10003;';
        e.target.className=' addedtocartBtn';
        setTimeout(function(){
                e.target.innerHTML = `+Add ( ${counter} )`;
                e.target.className='addtocartBtn';
        }, 1000, e);
    }

    let src = "https://cataas.com/cat/says/"+props.name;
    return(
        <div className='item_mini'>
            <div className='item_mini_photo'>
                <img src={src} width='100%' height='100%' alt={props.name} />
            </div>
            <div className='item_mini_descp'>
            <b>{props.name}</b> <span className='item_mini_price'>${props.price}</span>
            <p> {props.descp}</p>
            </div>
            <button className='addtocartBtn' onClick={ addToCart.bind(this) }> + Add {counter === 0 ? "" : counter} </button>
        </div>

    );

}

export default Item;