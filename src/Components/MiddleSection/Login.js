function Login(){

    return(
        <div className="mainCnt">
            <h1>Login:</h1><br />
            <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="text" name="email" placeholder="Email" className="inpt" autoComplete="none" />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>Password:</th>
                            <td>
                                <input type="password" name="pass" placeholder="Password" className="inpt" /> 
                            </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><input type='submit' text='Login' value='Login >' class='yesBtn' /></td>
                    </tr>
                </table>
            </div>
         </div>
    );

}


export default Login;