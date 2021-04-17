import { A } from 'hookrouter';

function AppHeader() {
   
   let login = "Login";
   
    return(
    <div className="header">
        <A href="/" className='logo'>{"{TechSales}.dev"}</A>
        <div className='headerItems'>
            <A href="/categories" className="headerItem">Categories</A>
            <A href="/login" className="headerItem">Account/{login}</A>
            <A href="/cart" className="headerItem">Cart</A>
            <A href="/support" className="headerItem">Support</A>
        </div>
    </div>
    );

}

export default AppHeader;