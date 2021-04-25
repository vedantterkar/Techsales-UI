import { navigate } from 'hookrouter';
import { useContext } from 'react';
import SessionContext from "./Contexts";

function ChooseLogout()
{

    const { headers } = useContext(SessionContext);
   
    if(!(headers && headers["wwwAuthentication"] === "token"))
    {
        navigate("/login/1");
        return;
    }



    return (
        <div className='mainCnt'>
        <h1>Plase select an action</h1>
        <br />
        <br />
        <br />
        <div style={{display: "table"}}>
        <input type='button' value='See Profile Details >' class='yesBtn' onClick={() => navigate("/signup")} />
        <br />
        <input type='button' value='Logout' class='delBtn'  onClick={() => navigate("/logout")} />
        </div>
        </div>
    );
}

export default ChooseLogout;