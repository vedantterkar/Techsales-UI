function SignUp(){
    return(
        <div className="mainCnt">
            <h1>Sign Up:</h1><br />
            <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>First Name:</th>
                            <td>
                                <input type="text" name="fname" placeholder="First Name" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>Last Name:</th>
                            <td>
                                <input type="text" name="lname" placeholder="Last Name" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Email:</th>
                            <td>
                                <input type="text" name="email" placeholder="Email-id" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>Retype Email:</th>
                            <td>
                                <input type="text" name="remail" placeholder="Re-type Email" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Password:</th>
                            <td>
                                <input type="password" name="pass" placeholder="Password" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>Retype Password:</th>
                            <td>
                                <input type="password" name="repass" placeholder="Re-type Password" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Street:</th>
                            <td>
                                <input type="text" name="street" placeholder="Street" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>Apt#/Suite:</th>
                            <td>
                                <input type="text" name="street2" placeholder="Apt" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Address Details:</th>
                            <td>
                                <input type="text" name="street3" placeholder="details" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>City:</th>
                            <td>
                                <input type="text" name="city" placeholder="City" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>State:</th>
                            <td>
                                <input type="text" name="state" placeholder="State" className="inpt" autoComplete="off" />
                            </td>
                            <th align='right'>Zip:</th>
                            <td>
                                <input type="text" name="zip" placeholder="Zip" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Contact:</th>
                            <td>
                                <input type="text" name="phone" placeholder="Phone Number" className="inpt" autoComplete="off" />
                            </td>
                            <th colSpan="2">&nbsp;</th>
                           
                    </tr>
                    <tr>
                    <th colSpan="2">&nbsp;</th>
                        <th></th>
                        <td><input type='submit' text='Login' value='Sign Up >' class='yesBtn' /></td>
                    </tr>
                </table>
            </div>
         </div>
    );


}

export default SignUp;