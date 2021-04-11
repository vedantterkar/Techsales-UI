import { navigate, A } from "hookrouter";

function Login(){

    return(
        <div className="mainCnt">
            <h1>Login:</h1><br />
            <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="text" name="email" placeholder="Email" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>Password:</th>
                            <td>
                                <input type="password" name="pass" placeholder="Password" className="inpt" /> 
                            </td>
                    </tr>
                    <tr>
                        <th>
                            <br />
                            <input type='button' text='Signup' value='SignUp' class='yesBtn' onClick={() => navigate("/signup")} />
                        </th>
                        <td>
                            <A href="/forgotpassword" style={{float: 'right'}}> Forgot Password? </A> <br />
                            <input type='submit' text='Login' value='Login >' class='yesBtn' />
                        </td>
                    </tr>
                </table>
            </div>
         </div>
    );

}


export default Login;