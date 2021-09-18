import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Body from './components/Pages/LandingPage';
import Career from './components/Pages/Careers';
import About from './components/Pages/About';
import Product from './components/Pages/Products';

class App extends Component {
  render (){
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/products" component={Product} />
        <Route exact path="/aboutUs" component={About} />
        <Route exact path="/careers" component={Career} />
      </Switch>
    </Router>
  );
  }
}

export default App;
