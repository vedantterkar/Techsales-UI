import { useContext, useState } from 'react';
import SessionContext from "./Contexts";
import endpoints from "../endpoints/endpoints";
import { navigate } from 'hookrouter';

// function reducer(state, action) {
//     switch (action.type) {
//       case 'EMAIL_VALID':
//         return {...state};
//       case 'PASSWORD_VALID':
//         return {...state};
//     case 'ZIP_VALID':
//         return {...state};
//       default:
//         return {...state};
//     }
// }

function SignUp(props) {
    const { headers } = useContext(SessionContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setAddressState] = useState("");
    const [zip, setZip] = useState("");
    const [zipValid, setZipValid] = useState(true);
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [emailsValid, setEmailsValid] = useState(true);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordsValid, setPasswordsValid] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    //let [ body, setBody ] = useState({});
    //let errMsg = "";
    let action = "Sign Up";
    let readOnly = "";
    if(headers && headers["wwwAuthentication"] === "token")
    {
       action = "Profile Details";
       readOnly = "readonly";
    }
    
    // let example = {
    //     "firstName": "newSignedUpUserFirstName",
    //     "lastName": "newSignedUpUserLastName",
    //     "email": "newUser@gmail.com",
    //     "password1": "newUser's Password", 
    //     "password2": "newUser's Password", 
    //     "address1": "123 Park St",
    //     "address2": "",
    //     "city": "Lake Forest",
    //     "state": "CA",
    //     "zip": 92630
    // }

    function validateEmailRegexFunc(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validateEmails() {
        
            //console.log("email", emailsValid, email1, email2)
            if(email1 === email2 && validateEmailRegexFunc(email1)){
                //console.log(`✓ Emails are Good`)
                setEmailsValid(true);
                return true;
                //return;
            } else {
                setEmailsValid(false);
                
            }
            return false;
    }

    function validatePasswords() {
      //debugger
            //console.log("pass", passwordsValid, password1, password2)
           // const re = /[a-zA-Z0-9$@#$%\"\\^&\\*(){}\\[\\]_+|=~-]{8,}/;
            if(password1 === password2 && password1.length >= 8) {
                //console.log(`✓ Password are Good`)
                setPasswordsValid(true);
                return true;
            } else {
                setPasswordsValid(false);
            }
            return false;
    }

    function validateZip() {

            //console.log("zip", zipValid, zip)
            const re = /\d{5}/;
            if (zip && re.test(zip)) {
                setZipValid(true)
                return true;
            } else {
                setZipValid(false)
            }
            return false;
    }
    
    function doSignUp(e) {
        let evt = e || window.event;
        evt.preventDefault();
        //console.log(zip, email1, email2, password1, password2);
        let retVal = true;
        
        if(!validateEmails())
        {
            retVal = false;   
        }
        if(!validatePasswords())
        {
            retVal = false;
        }
        if(!validateZip())
        {
            retVal = false;
        }

        if(retVal)
        {

            let body = {
                firstName: firstName,
                lastName: lastName,
                email: email1,
                password1: password1, 
                password2: password2, 
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zip: parseInt(zip)
            }

            fetch(`${endpoints.baseUrl}${endpoints.signup}`, {
                method: "POST",
                headers: { "www-Authentication": headers.wwwAuthentication, "Authorization": headers.Authorization, 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then( async res => {
                if(res.status === 400  || res.status === 401 || res.status === 402 || res.status === 403) { 
                    let err = await res.json();
                    if(err && err.status && err.status.toLowerCase().indexOf("pending") !== -1)
                    {
                        setErrMsg("That Email-id is Already Pending Verification!");
                       // console.log("Pending Verification!");
                    }
                    else if(err && err.status && err.status.toLowerCase().indexOf("exists") !== -1)
                    {
                        setErrMsg("That Email-id Already Exists in our System. Try Logging in!");
                       // console.log("Pending Verification!");
                    }
                    else 
                    {
                        navigate("/error");
                        return;
                    }
                }
                else
                {
                    navigate("/login/5");
                    return;
                }
            }).catch(err => {
                navigate("/error");
            });
        }

       return false;
    }

    return(
        <div className="mainCnt">
            <h1>{action}:</h1><br />
          
            {(emailsValid)? "" : (<div className="errMsg">Email(s) is/are invalid</div>)}
            {(passwordsValid)? "" : (<div className="errMsg">Password(s) is/are invalid (Must Contain atleast 8 letters and must match)</div>)}
            {(zipValid)? "" : (<div className="errMsg">Zip Code is invalid</div>)}

            { (errMsg && errMsg.length > 0)? (<div className="errMsg">{errMsg}</div>): ""}
            <form action="#!" method="post" onSubmit={ (event) => doSignUp(event) }>
               <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>First Name:</th>
                            <td>
                                <input type="text" name="fname" placeholder="First Name" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => setFirstName(e.target.value)}/>
                            </td>
                            <th align='right'>Last Name:</th>
                            <td>
                                <input type="text" name="lname" placeholder="Last Name" className="inpt" autoComplete="off" readOnly={readOnly}  required onKeyUp={e => setLastName(e.target.value)}/>
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="email" name="email" placeholder="Email-id" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => { setEmail1(e.target.value)} }/>
                            </td>
                            <th align='right'>Retype Email:</th>
                            <td>
                                <input type="email" name="remail" placeholder="Re-type Email" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => { setEmail2(e.target.value)}}/>
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Password:</th>
                            <td>
                                <input type="password" name="pass" placeholder="Password" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => {setPassword1(e.target.value)}}/>
                            </td>
                            <th align='right'>Retype Password:</th>
                            <td>
                                <input type="password" name="repass" placeholder="Re-type Password" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => {setPassword2(e.target.value)}}/>
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Street:</th>
                            <td>
                                <input type="text" name="street" placeholder="Street" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => setAddress1(e.target.value)}/>
                            </td>
                            <th align='right'>Apt#/Suite:</th>
                            <td>
                            <input type="text" name="street3" placeholder="details" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => setAddress2(e.target.value)} />
                            </td>
                    </tr>
                    <tr>
                             <th align='right'>City:</th>
                            <td>
                                <input type="text" name="city" placeholder="City" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => setCity(e.target.value)}/>
                            </td>
                            <th align='right'>State:</th>
                            <td>
                                <input type="text" name="state" placeholder="State" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => setAddressState(e.target.value)}/>
                            </td>
                    
                    </tr>
                    <tr>
                            <th align='right'>Zip:</th>
                            <td>
                                <input type="text" name="zip" placeholder="Zip" className="inpt" autoComplete="off" readOnly={readOnly} required onKeyUp={e => {setZip(e.target.value)}} maxLength="5" size="5"/>
                            </td>
                            <th colSpan="2">&nbsp;</th>
                    </tr>
                    <tr>
                    <th colSpan="2">&nbsp;</th>
                        <th></th>
                        
                        
                        <td>{ 
                                action === "Sign Up" ? 
                                   <input type='submit' text='Login' value="Sign Up >" className='yesBtn' />   
                                        : "Please Call 555-555-5555 To update your profile" 
                            }</td>
                    </tr>
                </table>
                
            </div>
            </form>
         </div>
    );


}

export default SignUp;