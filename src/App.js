// ReactJS Navigation bar
// https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';


// Pages
import { Home } from './pages/Home';
import { Coders } from './pages/Coders';
import { Frontend } from './pages/Frontend';
import { Backend } from './pages/Backend';
import { JSFrame } from './pages/JSFrame';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    //<Header />
        <React.Fragment>
      <Router>
        <Header />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coders" component={Coders} />
          <Route path="/frontend" component={Frontend} />
          <Route path="/backend" component={Backend} />
          <Route path="/javascript" component={JSFrame} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>


  );
}

export default App;
