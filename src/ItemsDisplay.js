function ItemsDisplay(props) {
    const showItem = (item) => {
        return (
            <tr>
                <th>{item.symbol_id}</th>
                <td>{item.time_exchange}</td>
                <td>{item.time_coinapi}</td>
                <td>{item.uuid}</td>
                <td>{item.price}</td>
                <td>{item.size}</td>
                <td>{item.taker_side}</td>
            </tr>
        );
    };

    return (
    <div className="Container">
        <div className="row mt-3">
            <h1>Items</h1>
        </div>
        <div className="row">
            <table classNmae="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">symbol_id</th>
                        <th scope="col">time_exchange</th>
                        <th scope="col">time_coinapi</th>
                        <th scope="col">uuid</th>
                        <th scope="col">price</th>
                        <th scope="col">size</th>
                        <th scope="col">taker_side</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(showItem)}
                </tbody>
            </table>
        </div>
        <div className="row"/> 
    </div>
    );
};

export default ItemsDisplay