import React, { Component } from 'react';
import {  FaAngleUp } from 'react-icons/fa';

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
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          borderRadius: '100%',
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
           
           <FaAngleUp />
        {/* Top */}
      </button>
    </div> 
      




      
    
        
    );
  }
}

export default ScrollTop;