
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from '../components/Carousel/Carousel';

import Map from '../components/map/map';
import Footer from '../components/Footer'



class Home extends Component {
  render() {
    return (
        
        <>
   <Carousel/>
        <Container className=' '>
        {/* <h2 >Home</h2> */}
         
        
        
         <section id="about container ">
          <div class="container aos-init aos-animate " data-aos="fade-up">
            <div class="row">
              <div class="col-md-12">
                <h3 class="section-title">Food</h3>
                <div class="section-title-divider"> </div>
                  <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
              </div>
            </div>
           </div>
          <div class="container about-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="row"><div class="col-lg-6 about-img"> 
              <img style={{width:'100%'}} src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt=""/>
               {/* <img style={{width:'100%'}} src="https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg" alt=""/> */}
            </div>
            <div class="col-md-6 about-content">
              <h2 class="about-title">We provide great services and ideass</h2>
              <p class="about-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
              <p class="about-text"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p class="about-text"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.</p>
             </div>
          </div>
              </div>
              </section>


        
         </Container>
    
    
        </>
    );
  }
}

export default Home;