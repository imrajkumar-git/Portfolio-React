
import './App.css';
import 'animate.css';
import {Header} from "./components/HeaderMe/Header";
import {Navbar} from "./components/NavbarMe/Navbar";
import {About} from "./components/AboutMe/About";
import React, { useState } from 'react';
import {Education} from "./components/EducationMe/Education";
import {Portfolio} from "./components/PortfolioMe/Portfolio";
import {Contact} from "./components/ContactMe/Contact";
import {Footer} from "./components/FooterMe/Footer";
import {Blog} from "./components/blog/Blog";
const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate content loading
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (

     
    <div className="waterfall-container">
    <div className="app">
      {loading ? <div class="lds-roller"><div>R</div><div>A</div><div>J</div><div>K</div><div>U</div><div>M</div><div>A</div><div>R</div></div> :<>
     <Navbar /><Header /><About /><Education /><Portfolio /><Blog/> <Contact /> <Footer /> 
</>}
    </div>
    </div>
  
  );
};

export default App;
