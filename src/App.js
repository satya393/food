import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './userRouting';
import Navebar from './components/navebar/navebar';
import Map from './components/map/map'; 
import Footer from './components/Footer';
import ScrollTop from './components/scrollTop';
import AdminDashbord from './vAdminRouting';



class App extends Component {

  render() {

    
    return (


      <>
      
        <Navebar/>
        <Routing/>
        <AdminDashbord/>
         <Map/>
         <Footer/>
        <ScrollTop/>

        
    
      </>

      
    );
  }
}

export default App;
