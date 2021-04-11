import React from 'react';
import endpoints from '../endpoints/endpoints.js';

import Item  from './Item';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(endpoints.items)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
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
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
            let onsales = "";
            if(items.onsale && items.onsale.length > 0)
            {
                onsales += "Items On Sale:";
            }
            let descp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        return (
            <div className='mainCnt'>
                <h1>{onsales}</h1>
                <div className='itemsCnt'>
                {items.onsale.map(item => (
                    <Item key={item.id} name={item.name} descp={descp} price={(Math.random() * 10 + 1).toFixed(2)} />
                ))}
                </div>
                <br /><br />
                <h1>Top Picks:</h1>
                <div className='itemsCnt'>
                {items.regular.map(item => (
                    <Item  key={item.id} name={item.name} descp={descp} price={(Math.random() * 10 + 1).toFixed(2)} />
                ))}
                </div>
             </div>
        );
      }
    }
  }


export default Home;