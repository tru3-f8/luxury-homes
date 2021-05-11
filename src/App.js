import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import InfoSectionTwo from './components/InfoSectionTwo';
import InfoSectionThree from './components/InfoSectionThree';
import Navbar from './components/Navbar';
import { InfoData, InfoDataThree, InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';
import { GlobalStyle } from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSectionTwo {...InfoDataTwo} />
       <InfoSectionThree {...InfoDataThree} />
      <Footer />
    </div>
  );
}

export default App;
