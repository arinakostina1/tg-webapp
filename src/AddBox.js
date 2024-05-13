function AddBox(props) {
  
    return (
      <div>
        <div className="box">
            <div className={props.classOne}>
                {props.textOne}
            </div>

            <div className="two">
                <span style={{"margin": 10 + "px"}}>
                    {props.textTwo}
                </span>
            </div>

            {props.textThree}
        </div>
      </div>
  
    );
  
  };

export default AddBox;