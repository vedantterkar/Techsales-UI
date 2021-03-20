

function AppHeader() {
   

    let someHandler = (hash) =>  {
        alert(hash);
    }

    return(
    <div className="header">
        <div className='logo' onClick={function(){ window.location.href='/home';} }>{"{TechSales}.dev"}</div>
        <div className='headerItems'>
            {   [
                    {id: 1, name: "Categories", hash: "awdouwuowad"}, 
                    {id: 2, name: "Account/Login", hash: "awdonowa"}, 
                    {id: 3, name: "Cart", hash: "aodwoinaw"}, 
                    {id: 4, name: "Support", hash: "oegiseoeinf"}
                ].map(element => { 
                return <div key={element.id} className="headerItem" onClick={function () { return someHandler(element.hash )}}>{element.name}</div>
            })}
            
        </div>
    </div>
    );

}

export default AppHeader;