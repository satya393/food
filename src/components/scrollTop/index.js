import React, { Component } from 'react';
import {  FaAngleUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


// import {useEffect} from 'react';


// useEffect(() => {
//   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
// }, []);

class ScrollTop extends Component {
  render() {
    return (
        
           <div>
      <div style={{height: '155rem'}} />

      {/* 👇️ scroll to top on button click */}
      <Button variant="primary" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          borderRadius: '15%',
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
       
          color: 'green',
          textAlign: 'center',
        }}
      >


           
           <FaAngleUp className='' />
        {/* Top */}
      </Button >
    </div> 
      




      
    
        
    );
  }
}

export default ScrollTop;