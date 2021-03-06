
function Items() {
    // deal with states
    // plain JS stuff
    let someHandler = (hash) =>  {
        alert(hash);
    }

    // deal with JSX
    return(
    <div className="Items">
        <h1>{"{TechSales.dev}"}</h1>
        <table class='headerTable'>
            <tr>
            {   [
                    {name: "PCB", hash: "awdouwuowad"}, 
                    {name: "Diodes", hash: "awdonowa"}, 
                    {name: "Capacitors", hash: "aodwoinaw"}, 
                    {name: "Soldering", hash: "oegiseoeinf"}
                ].map(element => { 
                return <th class='headerth' onClick={function () { return someHandler(element.hash )}}>{element.name}</th>
            })}
            </tr>
        </table>
        
    </div>
    );

}

export default Items