import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

function App() {
  // const [categories] = useState([
  //   // {name: 'About'},
  //   // { name: 'Portfolio' },
  //   // { name: 'Resume' },
  //   // { name: 'Contact' },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //  const [
  //    aboutSelected, 
  //    contactSelected, 
  //    portfolioSelected, 
  //    resumeSelected, 
  //    setContactSelected, 
  //    setAboutSelected, 
  //    setPortfolioSelected, 
  //    setResumeSelected
  //   ] = useState(true);

  return (
    // <div>
    //   <Nav
    //   // categories={categories}
    //   // setCurrentCategory={setCurrentCategory}
    //   // currentCategory={currentCategory}
    //    contactSelected={contactSelected}
    //    setContactSelected={setContactSelected}
    //    portfolioSelected={portfolioSelected}
    //    resumeSelected={resumeSelected}
    //    aboutSelected={aboutSelected}
    //    setAboutSelected={setAboutSelected}
    //    setPortfolioSelected={setPortfolioSelected}
    //    setResumeSelected={setResumeSelected}
    //   ></Nav>
    //   <main>

    //   {!contactSelected || portfolioSelected || resumeSelected ? (
    //       <About></About>
    //   ) : (
    //     <>
    //      <Portfolio ></Portfolio>
    //       <Resume></Resume>
    //       <ContactUs></ContactUs>
    //     </>
    //   )}

    //     {/* <div className="App">
    //       <About></About>
    //       <Portfolio currentCategory={currentCategory}></Portfolio>
    //       <Resume currentCategory={currentCategory}></Resume>
    //       <ContactUs currentCategory={currentCategory}></ContactUs>
    //     </div> */}
    //   </main>
    // </div>

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
