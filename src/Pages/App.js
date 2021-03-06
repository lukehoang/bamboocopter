import React, { Component } from 'react';  
import { BrowserRouter as Router, Switch } from 'react-router-dom';  

/** Layouts **/  
import MainLayoutRoute from "../Layouts/MainLayout"; 

// Pages
import HomePage from './Home';
import AboutPage from './About';
import TravelPage from './Travel';
import ContactPage from './Contact';
import Album from './Album';

export default class App extends Component {
  render(){
    return (
      <Router>  
        <Switch>  
          <MainLayoutRoute exact path="/" component={HomePage} />  
          <MainLayoutRoute path="/about" component={AboutPage} />  
          <MainLayoutRoute path="/travel" component={TravelPage} />  
          <MainLayoutRoute path="/contact" component={ContactPage} />  
          <MainLayoutRoute path="/album/:albumName" component={Album} />    
        </Switch>  
      </Router>  
    );
  }
}
