import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashbord from './Admin/pages/AdminDashbord';
import AdminHome from './Admin/pages/AdminHome';
import AdminLogin from './Admin/pages/AdminLogin';
// import AdminLogin from './Admin/pages/AdminLogin';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './components/login/login';
// import styles from './App.css';
// import { SignUp } from './components/SignUp/signUp';
 

class Routing extends Component {
  render() {
    return (
        
      <Router>
        
          <div>
            {/* <h2 className={styles.satya}>Welcome to React Router Tutorial</h2> */}
            {/* <nav className={styles.satya}>
            <ul className=" ">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
            </nav>        */}
            <Switch>
               
                {/* <Route exact path='/' component={Home} /> */}
                <Route path='/AdminDashbord' component={AdminDashbord} />
                <Route path='/AdminHome' component={AdminHome} />
                <Route path='/AdminLogin' component={AdminLogin} />
                {/* <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/Login' component={Login} />
                <Route path='/SignUp' component={SignUp} /> */}
            </Switch>
          </div>
       </Router>

      
    );
  }
}

export default Routing;
