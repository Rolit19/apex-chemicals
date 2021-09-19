import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Body from './components/Pages/LandingPage';
import Career from './components/Pages/Careers';
import About from './components/Pages/About';
import Product1 from './components/Pages/Products1';
import Product2 from './components/Pages/Products2';
import Product3 from './components/Pages/Products3';
import Product4 from './components/Pages/Products4';

class App extends Component {
  render (){
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/chemicalsandPetrochemicals" component={Product1} />
        <Route exact path="/polymers" component={Product2} />
        <Route exact path="/pharmaceuticalIntermediates" component={Product3} />
        <Route exact path="/aromaChemicals" component={Product4} />
        <Route exact path="/aboutUs" component={About} />
        <Route exact path="/careers" component={Career} />
      </Switch>
    </Router>
  );
  }
}

export default App;
