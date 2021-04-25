import React from 'react';
import SessionContext from './Contexts'
import endpoints from '../endpoints/endpoints.js';
import Item  from './Item';


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
      const fetchAllTheThings = async () => {
        let mainPage = endpoints.baseUrl+endpoints.mainPageProducts;
        let mainPageFromAPI = await fetch(mainPage, { headers: { "www-Authentication": headers.wwwAuthentication, "Authorization": headers.Authorization }
        }).then(res => {
          let wwwAuthentication = res.headers.get("www-Authentication")
          let Authorization = res.headers.get("Authorization")
          setAuthHeader({ wwwAuthentication: wwwAuthentication, Authorization: Authorization }) 
          return res.json()
        })
        return mainPageFromAPI
      }

      fetchAllTheThings()
        .then(data => {
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
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
             let onsales = "";
            if(items.OnSale && items.OnSale.length > 0)
            {
                onsales += "Items On Sale:";
            }
        return (
            <div className='mainCnt'>
                <h1>{onsales}</h1>
                <div className='itemsCnt'>

                {items.OnSale && items.OnSale.length > 0 ? items.OnSale.map(item => (
                    <Item key={item.id} image={item.image} name={item.name} descp={item.description} productId={item.productId} price={(parseFloat(item.cost)).toFixed(2)} />
                )) : "No Items to display"}
                </div>
                <br /><br />
                <h1>{ items.NewArrivals && items.NewArrivals.length > 0 ? "Top Picks:" : "" }</h1>
                <div className='itemsCnt'>
                  
                {items.NewArrivals && items.NewArrivals.length > 0 ? items.NewArrivals.map(item => (
                    <Item key={item.id} image={item.image} name={item.name} descp={item.description} productId={item.productId} price={(parseFloat(item.cost)).toFixed(2)} />
                )) : "No Items to display"}
                </div> 
             </div>
        );
      }
    }
  }


export default Home;