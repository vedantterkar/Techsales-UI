import React from 'react';
import endpoints from '../endpoints/endpoints.js';
import Category from './Category.js';


class Categories extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: {}
      };
    }
  
    componentDidMount() {
      const fetchAllCategories = async () => {
        let baseUrl = endpoints.baseUrl;
        let pcb = await fetch(baseUrl+endpoints.pcb).then(res => res.json())
        let wires = await fetch(baseUrl+endpoints.wires).then(res => res.json())
        let diodes = await fetch(baseUrl+endpoints.diodes).then(res => res.json())
        let caps = await fetch(baseUrl+endpoints.caps).then(res => res.json())
        let allCategories = { pcb: pcb, wires: wires, diodes: diodes, caps: caps}
        return allCategories
      }

      fetchAllCategories()
        .then(data => {
          this.setState({
            isLoaded: true,
            categories: data
          })
        }, err => {
          this.setState({
            isLoaded: true,
            err
          })
        })


      

    }
  
    render() {
      const { error, isLoaded, categories } = this.state;
      if (error) {
        return <div className='mainCnt'><h1>Error:</h1>< br /> {error.message}</div>;
      } else if (!isLoaded) {
        return <div className='mainCnt'>Loading...</div>;
      } else {
        return (
            <div className='mainCnt'>
                <h1>Categories</h1> <br /><br />
                <div className='categoriesCnt'>
                     { Object.keys(categories).map((element) => {
                        let cat = categories[element];
                        return (cat.length > 0 ? <Category key={cat[0].productId} cid={element} name={element} total={cat.length} image={cat[0].image} descp={cat[0].description} /> : "") ;
                      })
                      }
                    
                </div>
             </div>
        );
      }
    }
  }



export default Categories;