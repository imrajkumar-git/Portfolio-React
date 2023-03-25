
import './App.css';
import 'animate.css';
import Toggle from "./components/HeaderMe/Header";
import {Navbar} from "./components/NavbarMe/Navbar";
import {About} from "./components/AboutMe/About";
import React, { useState } from 'react';
import {Education} from "./components/EducationMe/Education";
import {Portfolio} from "./components/PortfolioMe/Portfolio";
import {Contact} from "./components/ContactMe/Contact";
import {Footer} from "./components/FooterMe/Footer";
import {Blog} from "./components/blog/Blog";
import { GlobalStyles } from "./components/HeaderMe/Globlestyle";
import { lightTheme, darkTheme } from "./components/HeaderMe/Theme";
import  { useDarkMode } from "./components/HeaderMe/useDarkMode";
import { ThemeProvider } from "styled-components";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // Simulate content loading
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="waterfall-container">
    <div className="app">
      {loading ? <div class="lds-roller"><div>R</div><div>A</div><div>J</div><div>K</div><div>U</div><div>M</div><div>A</div><div>R</div></div> :<>
     <Navbar />  <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider><About /><Education /><Portfolio /><Blog/> <Contact /> <Footer /> 
</>}
    </div>
    </div>
  
  );
};
export default App;
