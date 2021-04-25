import { useContext } from 'react';
import SessionContext from "./Contexts";

function Logout(){

    const { headers, setAuthHeader } = useContext(SessionContext);
    if(headers && headers["wwwAuthentication"] === "token")
    {   
        let newHeaders = {
            wwwAuthentication: "none",
            Authorization: "none"
        };
        setAuthHeader(newHeaders);
    }
    
    return <div className='mainCnt'>
    <h1>Logout </h1>
    <br /><br />
    You've Logged Out Successfully!
    </div>;
}

export default Logout;