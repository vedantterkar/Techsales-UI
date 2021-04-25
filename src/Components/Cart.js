import { navigate, A } from 'hookrouter';
import React from 'react';
import endpoints from '../endpoints/endpoints.js';
import SessionContext from './Contexts';

import CartItem  from './CartItem';

class Cart extends React.Component {
  static contextType = SessionContext

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        total: 0,
        reloadByChild: false
      };
    }

    componentDidMount() {
      this.fetchCartItems();
    }

    fetchCartItems(){

     const { headers } = this.context;
     fetch(endpoints.baseUrl+endpoints.cart, { headers: { "www-Authentication": headers.wwwAuthentication, "Authorization": headers.Authorization }} )
        .then(async res => {
          if(res.status === 400 || res.status === 401 || res.status === 402 || res.status === 403) {
            navigate("/login/1")
            return;
          }
          else{
            let result = await res.json()
            this.setState({
              isLoaded: true,
              items: result.products,
              total: result.total,
              images: result.productsImages
            });
          }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    reload()
    {
       this.fetchCartItems();
    }

    render() {
      const { error, isLoaded, items, total } = this.state;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
        return (
            <div className='mainCnt'>
                <h1>Cart</h1><br />
                {items && items.length > 0 ? (
                <table className="cartTblHeader">
                  <tr>
                    <th>&nbsp;</th>
                    <th align="center">Item</th>
                    <th align="center">Qty</th>
                    <th align="center">Price/Unit</th>
                    <th align="center">Total</th>
                    <th align="center">Remove</th>

                  </tr>
                {items.map((item) => {
                  return <CartItem key={item.id} productId={item.productId} name={item.name} price={parseFloat(item.cost).toFixed(2)} qty={parseInt(item.amount)} totalItem={parseFloat(parseFloat(item.cost) * parseInt(item.amount)).toFixed(2)}  reload={this.reload.bind(this)} />
                  })
                }
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="center">Total: <font color='#aa0000'>${parseFloat(total).toFixed(2)}</font></td>
                    <td><input type="button" value="Check Out >" className="yesBtn" onClick={() => navigate("/checkout")}/></td>

                  </tr>
                </table>) : (
                  <div>
                    Your Cart is Empty. Go and <A href="/home">Shop More!</A>
                  </div>
                ) }
              </div>
        );
      }
    }
  }


export default Cart;