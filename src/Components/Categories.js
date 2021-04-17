import React from 'react';
import endpoints from '../endpoints/endpoints.js';
import Category from './Category.js';


const renderCategories = (categories) => {
  let arr = [
    {"id":"1","name":"PCB","total":categories.pcb.length.toString(),"descp":" My PCB is My PCB none of your PCB"},
    {"id":"2","name":"Wires","total":categories.wires.length.toString(),"descp":" My PCB is My PCB none of your PCB"},
    {"id":"3","name":"Diodes","total":categories.diodes.length.toString(),"descp":" My PCB is My PCB none of your PCB"},
    {"id":"4","name":"Caps","total":categories.caps.length.toString(),"descp":" My PCB is My PCB none of your PCB"}
  ]
    
  return (
    arr.map(category => <Category key={category.id} cid={category.id} name={category.name} total={category.total} descp={category.descp} />)
  );
}

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
        let pcb = await fetch("https://api.techsales.dev/pcb").then(res => res.json())
        let wires = await fetch("https://api.techsales.dev/wires").then(res => res.json())
        let diodes = await fetch("https://api.techsales.dev/diodes").then(res => res.json())
        let caps = await fetch("https://api.techsales.dev/caps").then(res => res.json())
        let allCategories = { pcb: pcb, wires: wires, diodes: diodes, caps: caps}
        console.log(allCategories)
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


      // fetch(endpoints.categories)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       this.setState({
      //         isLoaded: true,
      //         categories: result.categories
      //       });
      //     },
      //     // Note: it's important to handle errors here
      //     // instead of a catch() block so that we don't swallow
      //     // exceptions from actual bugs in components.
      //     (error) => {
      //       this.setState({
      //         isLoaded: true,
      //         error
      //       });
      //     }
      //   )

    }
  
    render() {
      let descp = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
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
                    {
                      (Object.keys(categories).length != 0)? renderCategories(categories)
                      :
                      ""
                    }
                </div>
             </div>
        );
      }
    }
  }



export default Categories;