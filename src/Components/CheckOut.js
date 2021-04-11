import { navigate } from "hookrouter";


function CheckOut(){

    return(
        <div className="mainCnt">
            <h1>Payment:</h1><br />
            <div className="logincnt">
                <table cellPadding="5px" border="0">
                    <tr>
                    <th align='right'>Card Holder Name:</th>
                            <td>
                                <input type="text" name="c_name" placeholder="Card Holder Name" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>Card Number:</th>
                        <td>
                                <input type="text" name="c_num" placeholder="Card Number" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>Expiry Month:</th>
                        <td>
                                <input type="text" name="exp_mth" placeholder="Expiration Month" maxLength="2" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                    <th align='right'>Expiry Year:</th>
                        <td>
                                <input type="text" name="exp_year" placeholder="Expiration Year" maxLength="4" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                        <th align='right'>CVV:</th>
                        <td>
                                <input type="password" name="cvv" placeholder="CVV Number"  maxLength="3" className="inpt" autoComplete="off" />
                            </td>
                    </tr>
                    <tr>
                        <th>
                        <input type='button' text='Cart' value='Back to Cart' class='yesBtn' onClick={() => navigate("/cart")} />
                        </th>
                        <td>
                            <input type='submit' text='Check Out' value='Pay >' class='yesBtn' />
                        </td>
                    </tr>
                </table>
            </div>
         </div>
    );

}


export default CheckOut;