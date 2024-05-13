import {useState} from "react";

function ButtonState() {
    const [counter, setCounter] = useState(0);
  
    const updateCounter = () => {
      setCounter(counter + 1);
    };
  
    return (
      <div>
        <p>
          Press counter: {counter}
        </p>
        <button type='button' className='btn btn-primary' onClick={updateCounter} >
          Press me!
        </button>
      </div>
  
    );
  
  };

export default ButtonState;