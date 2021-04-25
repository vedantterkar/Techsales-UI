import React from 'react';
import SessionContext from './Contexts';

class ForgotPass extends React.Component {
    static contextType = SessionContext

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        email: "",
        emailSent: ""
      };
      //this.handleChange = this.handleChange;
      //this.handleTheEmail = this.handleTheEmail;
    }

    handleChange(x) {
        let state = this.state;
        state.email = x.target.value;
        this.setState(state);
    }
 
    handleTheEmail(e) {
        const { headers, setAuthHeader } = this.context

        console.log("headers", headers, setAuthHeader)
        let ev = e || window.event;
        ev.preventDefault();
        
        var eml = this.state.email;
        console.log(eml);
        // fetch - 

    }   

    render() {


        return(
            <div className="mainCnt">
                <h1>Forgot Password:</h1><br />
                <div className="logincnt">
                    <form action="#!" method="get" onSubmit={this.handleTheEmail.bind(this)}>
                    <table cellPadding="5px" border="0">
                        <tr>
                        <th align='right'>Email:</th>
                                <td>
                                    <input type="email" name="email" placeholder="Email" className="inpt" onChange={this.handleChange.bind(this)} autoComplete="off" required />
                                </td>
                        </tr>
                       <tr>
                           <th></th>
                           <td>
                                <input type='submit' text='Reset' value='Reset Password >' className='yesBtn' />
                            </td>
                        </tr>
                    </table>
                    </form>
    
    
    
                    
                    <SessionContext.Consumer>
                        {
                            ({ headers })=> {
                                //return JSON.stringify(headers,null,2)
                            }
                        }
                    </SessionContext.Consumer>
                </div>
             </div>
        );
    }
}

// function ForgotPass(){
//     return(
//         <div className="mainCnt">
//             <h1>Forgot Password:</h1><br />
//             <div className="logincnt">
//                 <table cellPadding="5px" border="0">
//                     <tr>
//                     <th align='right'>Email:</th>
//                             <td>
//                                 <input type="text" name="email" placeholder="Email" className="inpt" autoComplete="off" />
//                             </td>
//                     </tr>
//                    <tr>
//                        <th></th>
//                        <td>
//                             <input type='submit' text='Reset' value='Reset Password >' class='yesBtn' onClick={ () => handleTheEmail() } />
//                         </td>
//                     </tr>
//                 </table>



                
//                 <SessionContext.Consumer>
//                     {
//                         ({ headers })=> {
//                             return JSON.stringify(headers,null,2)
//                         }
//                     }
//                 </SessionContext.Consumer>
//             </div>
//          </div>
//     );

// }


export default ForgotPass;