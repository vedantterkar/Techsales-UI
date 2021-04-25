import { navigate } from "hookrouter";
import React from "react";

class Category extends React.Component
{

    constructor(props) {
        super(props);
        this.expandDescp = this.expandDescp.bind(this);
        this.state = { props: props, expanded: false };
        
      }
    
      expandDescp(x)
      {
          this.setState({props: this.state.props, expanded: !this.state.expanded});

      }
   // let expanded = false;
   
    render(){
        let props = this.state.props;
        let expanded = this.state.expanded;
        let src = ""+props.image;
        let url = "/products/"+props.cid;
        return(
            <div className='category'>
                <div className='categoryHeader' onClick={this.expandDescp}>
                {props.name} <span className='itmInStock'>(In Stock: {props.total})</span>
                </div>
               
                <div className={expanded ? "category_descp" : "category_descp_hidden"}>
                <div className='imgCnt'>
                    <img src={src} width='100%' height='200px' alt={props.name} />
                </div>
                <div className='descpCnt'>
                    <p> {props.descp}</p>
                    <button className='yesBtn' onClick={() => navigate(url)}> See Items &gt; </button>
                </div>
                </div>
                
            </div>

        );
    }
}

export default Category;