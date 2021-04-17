import React, { useContext } from 'react';
import SessionContext from './Contexts'
import endpoints from '../endpoints/endpoints.js';
import Item  from './Item';


const renderItems = (items) => {
  // jsx for api's items
  // items is an object
  
  return(
    JSON.stringify(items)
  )
}

class Home extends React.Component {
  static contextType = SessionContext

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: {}
      };
    }
  
    componentDidMount() {
      const { headers, setAuthHeader } = this.context
      console.log("headers", headers, "setHeaders", setAuthHeader)
      const fetchAllTheThings = async () => {
        let mainPageFromAPI = await fetch("https://api.techsales.dev/mainProductPage", { headers: { "www-Authentication": headers.wwwAuthentication, "Authorization": headers.Authorization }
        }).then(res => {
          let wwwAuthentication = res.headers.get("www-Authentication")
          let Authorization = res.headers.get("Authorization")
          console.log(wwwAuthentication, Authorization)
          setAuthHeader({ wwwAuthentication: wwwAuthentication, Authorization: Authorization })
          
          console.log("we seem to be failing here")
          return res.json()
        })
        console.log(mainPageFromAPI)
        return mainPageFromAPI
      }

      fetchAllTheThings()
        .then(data => {
          console.log("context", this.context)
          this.setState({
            isLoaded: true,
            items: data
          })
        }, err => {
          this.setState({
            isLoaded: true,
            err
          })
        })
      }
  
    render() {
      const { headers, setAuthHeader } = this.context
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
            // let onsales = "";
            // if(items.onsale && items.onsale.length > 0)
            // {
            //     onsales += "Items On Sale:";
            // }
            // let descp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        return (
            <div className='mainCnt'>
                {(headers)? JSON.stringify(headers,null,2) : `no headers `}

                {
                  (Object.keys(items).length != 0)? renderItems(items)
                  :
                  ""
                }
                {/* <h1>{onsales}</h1>
                <div className='itemsCnt'>

                {items.onsale.map(item => (
                    <Item key={item.id} image={""} name={item.name} descp={descp} price={(Math.random() * 10 + 1).toFixed(2)} />
                ))}
                </div>
                <br /><br />
                <h1>Top Picks:</h1>
                <div className='itemsCnt'>
                  
                {items.regular.map(item => (
                    <Item  key={item.id} image={""} name={item.name} descp={descp} price={(Math.random() * 10 + 1).toFixed(2)} />
                ))}
                </div> */}
             </div>
        );
      }
    }
  }


export default Home;