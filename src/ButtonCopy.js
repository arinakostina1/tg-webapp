import { useState, useEffect } from "react";


function ButtonCopy(props) {

  const [isIconClicked, setIsIconClicked] = useState(false);

    const handleClick = () => {

      setIsIconClicked(!isIconClicked);
      var copyText = props.input;
      navigator.clipboard.writeText(copyText);
  };

  const Expire = props => {
    
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, props.delay);
      return () => clearTimeout(timer)
    }, [props.delay]);

    if(visible && isIconClicked){
      return <i className="fa fa-check" />
    }
    else{
      setIsIconClicked(false);
      return <i className="fa fa-copy" />
    }
  };
  

  return (
    <div>
      <button type='button' onClick={handleClick}>
          <Expire delay="1000" />
      </button>
    </div>

  );
};

export default ButtonCopy;