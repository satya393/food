import React, { Component } from 'react';
import './map.css';


 export default class Map extends Component {
  render() {
    return (
        <div>
            <h3 className='text-center'>My Location-Map</h3>
                
            <div className="responsive-map-container">



           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.017663061615!2d120.6446336203314!3d15.078087801043749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f132687ac2df%3A0xfe9317540704d6f0!2sMalpitic%2C%20San%20Fernando%2C%20Pampanga%2C%20Philippines!5e1!3m2!1sen!2sin!4v1665952907027!5m2!1sen!2sin"
           
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />


            </div>          
        </div>
    );
  }
}
