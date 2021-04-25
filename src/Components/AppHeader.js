import { A } from 'hookrouter';
import { useContext } from 'react';
import SessionContext from "./Contexts";

function AppHeader() {
    const { headers } = useContext(SessionContext);
    let login = "Login";

    if(headers && headers["wwwAuthentication"] === "token")
    {
        login = "Logout";
    }

    return(
    <div className="header">
        <A href="/" className='logo'>{"{TechSales}.dev"}</A>
        <div className='headerItems'>
            <A href="/categories" className="headerItem">Categories</A>
            <A href={"/"+ (login.toLowerCase() === "login" ? login.toLowerCase() : "chooseLogout")} className="headerItem">Account/{login}</A>
            <A href="/cart" className="headerItem">Cart</A>
            <A href="/support" className="headerItem">Support</A>
        </div>
    </div>
    );

}

export default AppHeader;