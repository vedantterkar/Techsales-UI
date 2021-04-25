import React from 'react';
import endpoints from '../endpoints/endpoints.js';

import Item  from './Item';

class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        props: props
      };
    }
  
    componentDidMount() {
      let baseUrl = endpoints.baseUrl;
    
      fetch(baseUrl+"/"+this.props.id)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
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
      const { error, isLoaded, items, props } = this.state;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
            
        return (
            <div className='mainCnt'>
                <h1>Products From Category: {props.id}</h1>
                <div className='itemsCnt'>
                {items.map(item => (
                    <Item key={item.productId} productId={item.productId} name={item.name} image={item.image} descp={item.description} price={(parseFloat(item.cost)).toFixed(2)} />
                ))}
                </div>
             </div>
        );
      }
    }
  }


export default Products;