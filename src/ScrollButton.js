import React, {useState} from 'react'; 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
    <div className='scroll-button'>
        {/* <span className='right' style={{"marginRight": 85 + "px"}}> */}
            {/* <button type='button' onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}>  */}

            <i className='fa fa-arrow-circle-up' type='button' onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}/>


            {/* </button>      */}
        {/* </span> */}
        
    </div>
	
); 
} 

export default ScrollButton; 
