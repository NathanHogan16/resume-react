import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';

function App() {
  const [categories] = useState([
    {name: 'About'},
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div className="App">
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          <ContactUs currentCategory={currentCategory}></ContactUs>
        </div>
      </main>
    </div>
  );
}

export default App;
