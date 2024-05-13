import ButtonCopy from './ButtonCopy';
import AddBox from './AddBox';

function AddTransaction(props) {

      function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();

        
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        hour = hour<10 ? '0' + hour: hour;
        var min = a.getMinutes();
        min = min<10 ? '0' + min:min;
        var sec = a.getSeconds();
        sec = sec<10 ? '0' + sec:sec;
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

    const showItem = (item) => {
        // console.log(item)
        
        return (
        <div key={item.id}>  

            {/* <div class='container'>

                <div class="card" style={{"width": 18 + "rem"}}>
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                </div>

            </div> */}


            <div className="card profile-card-1"style={{"backgroundColor": "#ffff", "boxShadow": "3px 3px 20px rgba(0, 0, 0, 0.05)"}}> {/** style={{"width":1000 +"px", "height": 330 +"px", "backgroundColor": "#ffff", "box-shadow": "3px 3px 20px rgba(0, 0, 0, 0.05)"}} */}
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt="profile-sample1" className="bg-dark"/> */}
                {/* <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1"/> */}
                {/* <img src={logo} alt="profile-image" className="profile"/> */}
                <div className="card-header">
                    Transaction details
                </div>
            <div className="card-content">

            <AddBox classOne="one2" textOne={"From"} textTwo={
                        <span>
                            <i className="fa fa-credit-card-alt" style={{"color": "#5a5a5a", "fontSize": 13, "marginRight": 10 + "px"}}/>
                            {item.from['owner']} 
                            <span style={{"color": "#126cbb", "margin": 10 + "px"}}>   
                                {item.from['address'].substr(0, 3) + ' ... ' + item.from['address'].substr(item.from['address'].length-3, item.from['address'].length)}
                            </span>
                        </span>} 
                        textThree={<span className='right' style={{"marginRight": 5 + "px"}}>
                                        <ButtonCopy input={item.from['address']}/>
                                    </span>}/>


                <AddBox classOne="one2" textOne={"To"} textTwo={
                        <span>
                            <i className="fa fa-credit-card-alt" style={{"color": "#5a5a5a", "fontSize": 13 + "px", "marginRight": 10 + "px"}}/>
                            {item.to["owner"]}
                            <span style={{"color": "#126cbb", "margin": 10 + "px"}}>   
                                {item.to['address'].substr(0, 3) + ' ... ' + item.to['address'].substr(item.to['address'].length-3, item.to['address'].length)}
                            </span>
                        </span>} 
                        textThree={<span className='right' style={{"marginRight": 5 + "px"}}>
                                        <ButtonCopy input={item.to['address']}/>
                                    </span>}/>


                <AddBox classOne="one2" textOne={"Hash"} textTwo={
                        <span style={{"color": "#126cbb"}}>
                            {item.hash.substr(0, 10) + ' ... ' + item.hash.substr(item.hash.length-10, item.hash.length)}  
                        </span>} 
                        textThree={<span className='right' style={{"marginRight": 5 + "px"}}>
                                        <ButtonCopy input={item.hash}/>
                                    </span>}/>

                <hr/>
                
                <span className="label label-success">

                    <AddBox classOne="one" textOne={"Blockchain"} textTwo={
                            <span className="small-card">
                                {item.blockchain}
                            </span>} textThree={""}/>

                    <AddBox classOne="one" textOne={"Amount in USD"} textTwo={
                            item.amount_usd + " $"} textThree={""}/>

                                {/* .replaceAll(",", " ") */}

                    <AddBox classOne="one" textOne={"Amount"} textTwo={
                            <span>
                                {item.amount} {/* .replaceAll(",", " ") */}
                                <span className="small-card" style={{"marginLeft": 10 + "px", "backgroundColor": "#e5f5f3", 
                                "border": "1px solid #06a183", "color": "#06a183", "top": "-5%"}}>{item.symbol.toUpperCase()}</span>
                            </span>} textThree={""}/>


                    <AddBox classOne="one" textOne={"Transaction Type"} textTwo={
                            item.transaction_type.toUpperCase()} textThree={""}/>

                    <AddBox classOne="one" textOne={"Date"} textTwo={
                            <span style={{"color": '#6c757d'}}>
                                {timeConverter((parseInt(item.timestamp)))}
                                {/* {console.log(parseInt(item.timestamp))} */}
                            </span>} textThree={""}/>
                </span>
            
            </div>
            </div>







            {/* <div class="container">
                                    
            <p/>
            <div class="col-sm-5">
                    <div class="card text-center">
                        <div class="card-header">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                </div>
                            </nav>
                        </div>
                        
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                home content
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            writing something more to fill up the space.</p>
                                profile content
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                contact content
                            </div>
                        </div>
                        <div class="card-body">

                        </div>
                    </div>    
                </div>

            </div> */}

        <br/>
 
        </div>
        
        );
    };

    return (
        <div className="Container">
            <div className="row mt-3">
                <h1 style={{"fontFamily":"monospace"}}>Data</h1>
            </div>
            <div className="row">
                {props.items.map(showItem)}
            </div>
            <div className="row"/>
        </div>
        );
};

export default AddTransaction;