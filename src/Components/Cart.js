import { navigate } from 'hookrouter';
import React from 'react';
import endpoints from '../endpoints/endpoints.js';

import CartItem  from './CartItem';

class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(endpoints.cart)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.cart.items
            });
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
  
    render() {
      const { error, isLoaded, items } = this.state;
      let total = 0;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
        return (
            <div className='mainCnt'>
                <h1>Cart</h1><br />

                <table className="cartTblHeader">
                  <tr>
                    <th>&nbsp;</th>
                    <th align="center">Item</th>
                    <th align="center">Qty</th>
                    <th align="center">Price/Unit</th>
                    <th align="center">Total</th>
                    <th align="center">Remove</th>

                  </tr>
                {items.map(function(item){
                  total += parseFloat(item.price_per_unit) * parseInt(item.qty);
                  return <CartItem key={item.id} name={item.name} price={parseFloat(item.price_per_unit)} qty={parseInt(item.qty)} totalItem={parseFloat(item.price_per_unit) * parseInt(item.qty)} />
                  })
                }
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="center">Total: <font color='#aa0000'>${total}</font></td>
                    <td><input type="button" value="Check Out >" className="yesBtn" onClick={() => navigate("/checkout")}/></td>

                  </tr>
                </table>
              </div>
        );
      }
    }
  }


export default Cart;