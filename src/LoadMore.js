import AddTransaction from './AddTransaction';
import {useState} from "react";

function LoadMore(props){

    const imagePerRow = 7;
    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    // console.log(props?.transactions[2]);

    return (
        <div>
            {/* {console.log("one item: ", props.transactions[1])} */}
            <AddTransaction items={props?.transactions.slice(0, next)}/>

            {next < props.transactions.length ? 
            <div  className='load-more'>
                <button type='button' className='justify-center' onClick={handleMoreImage}>
                    LOAD MORE
                </button> 
            </div>
            : <></>
            }
        </div>
    );
}

export default LoadMore;
