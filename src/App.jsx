
import './App.css';
import 'animate.css';
import Toggle from "./components/HeaderMe/Header";
import {Navbar} from "./components/NavbarMe/Navbar";
import {About} from "./components/AboutMe/About";
import React, { useState } from 'react';
import {Education} from "./components/EducationMe/Education";
import {Portfolio} from "./components/PortfolioMe/Portfolio";
import {Contact} from "./components/ContactMe/contact";
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
  }, 1000);

  return (
    <div className="waterfall-container">
    <div className="app">
      {loading ?   <div class="loading"> 
    <div class="loading__letter">L</div>
    <div class="loading__letter">o</div>
    <div class="loading__letter">a</div>
    <div class="loading__letter">d</div>
    <div class="loading__letter">i</div>
    <div class="loading__letter">n</div>
    <div class="loading__letter">g</div>
    <div class="loading__letter">.</div>
    <div class="loading__letter">.</div>
    <div class="loading__letter">.</div>
  </div> :<>
    <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider><About /><Education /><Portfolio /><Blog/> <Contact /> <Footer /> 
</>}
    </div>
    </div>
  
  );
};
export default App;
