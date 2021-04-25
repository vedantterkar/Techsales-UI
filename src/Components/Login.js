import { navigate, A } from "hookrouter";
import SessionContext from "./Contexts";
import React from 'react';
import endpoints from "../endpoints/endpoints";

class  Login extends React.Component{

    static contextType = SessionContext;
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          props: props,
          email: null,
          pass: null,
          loggedIn: false
        };

        this.LoginErrors = {
            "1": "That Action Requires Users to Login First",
            "2": "Invalid Login Credentials",
            "3": "Some Error Occurred While Logging you in",
            "4": "Login Successful! Please Wait we'll redirect you to proper place.",
            "5": "Signup successful! Please Activate your account from the email you've recieved and then Login To Your New Account",
            "6": "Account Activated."
        };

        this.LoginSuccessMessage = "Login successful! Please wait while we redirect you to Techies club..";
      }

   
      handleLogin(e){
        const { setAuthHeader } = this.context
        let evt = e || window.event;
        evt.preventDefault();
        let state = this.state;
        let loginUrl = endpoints.baseUrl+endpoints.session;
        
        fetch(loginUrl, 
        { method: "POST", headers: { 
                "www-Authentication": "upass", 
                "Authorization": "none",
                "x-username": ""+state.email,
                "x-password": ""+state.pass
            }           
        }).then(d => {
            if(d.headers.get('www-authentication') === "token")
            {
                let wwwAuthentication = d.headers.get("www-Authentication")
                let Authorization = d.headers.get("Authorization")
                setAuthHeader({ wwwAuthentication: wwwAuthentication, Authorization: Authorization }); 
            }
            return d.json()
        })
        .then(d => {
            if(d.status === "OK")
            {
                state.loggedIn = true;
                this.setState(state);
                setTimeout(function(){
                    navigate("/home");
                }, 1000);
            }
            else if(d.status !== undefined  && d.status.toLowerCase().indexOf("invalid") !== -1)
            {
                state.errorId = 2;
                this.setState(state);
            }
            else 
            {
                state.errorId = 2;
                this.setState(state);
            }
        })
        .catch(e => {
            navigate("/error");
            console.error(e);
        })
      }

      

      handleEmailChange(x){
          let state = this.state;
          state.email = x.target.value;
          this.setState(state);
      }

      handlePasswordChange(x){
        let state = this.state;
        state.pass = x.target.value;
        this.setState(state);
    }

    render(){
        let state = this.state;
        return(
        <div className="mainCnt">
            <h1>Login:</h1><br />

            {
                    state.loggedIn === false && (this.props.errorId || state.errorId) ? (
                        <div className="warnMsg"> { this.LoginErrors[state.errorId ? state.errorId : this.props.errorId] } </div>
                    ) : ""

            }

            {
                state.loggedIn ? (
                    <div className="successMsg"> { this.LoginSuccessMessage } </div>
                ): ""
            }


        <form action="#!" method="get" onSubmit={ this.handleLogin.bind(this) } >
                
            <div className="logincnt">

                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="email" name="email" placeholder="Email" className="inpt" autoComplete="off" onChange={ this.handleEmailChange.bind(this) } required />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>Password:</th>
                            <td>
                                <input type="password" name="pass" placeholder="Password" className="inpt" onChange={ this.handlePasswordChange.bind(this) } required /> 
                            </td>
                    </tr>
                    <tr>
                        <th>
                            <br />
                            <input type='button' text='Signup' value='SignUp' className='yesBtn' onClick={() => navigate("/signup")} />
                        </th>
                        <td>
                            <A href="/forgotpassword" style={{float: 'right'}}> Forgot Password? </A> <br />
                            <input type='submit' text='Login' value='Login >' className='yesBtn' />
                        </td>
                    </tr>
                </table>
                
            </div>
        </form>
         </div>
    );
    }

}


export default Login;