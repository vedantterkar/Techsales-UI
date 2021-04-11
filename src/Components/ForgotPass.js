
function ForgotPass(){

    return(
        <div className="mainCnt">
            <h1>Forgot Password:</h1><br />
            <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="text" name="email" placeholder="Email" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                   <tr>
                       <th></th>
                       <td>
                            <input type='submit' text='Reset' value='Reset Password >' class='yesBtn' />
                        </td>
                    </tr>
                </table>
            </div>
         </div>
    );

}


export default ForgotPass;