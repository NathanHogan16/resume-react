import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

function App() {

  return (

    <BrowserRouter>
    <Nav />
      <Switch>
        <Route component={About} path='/' exact />
        <Route component={Portfolio} path='/portfolio' />
        <Route component={Resume} path='/resume' />
        <Route component={ContactUs} path='/contactus' />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
