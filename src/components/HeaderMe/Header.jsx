import "./Header.css";
import { CTA } from "./CTA"
import logo from "../../Assets/Header/rk.png";
import Sun from "./Sun";
import Moon from "./Moon";
import { useState, useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import styled from "styled-components";
import { func, string } from "prop-types";
import i18next from 'i18next';
import {initReactI18next } from 'react-i18next';
import translate_en from '../../locales/en/translation.json'
import translate_es from '../../locales/es/translation.json'
import translate_ne from '../../locales/ne/translation.json'
const Button = styled.button`
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
width: 60px;
height: 60px;
outline: none;
border-radius: 50%;
transition: all 0.1s ease-in-out;
color: white;
text-align: center;
position: fixed;
cursor: pointer;
right: 29px;
bottom: 10rem;
background-color:#FF5D0A;
box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048),
0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072),
0 41.8px 33.4px rgba(0, 0, 0, 0.086),
0 100px 80px rgba(0, 0, 0, 0.12);
}`;

i18next.use(initReactI18next) 
.init({
         resources: {
        En: {
            translation: translate_en,
        },
        Es: {
            translation: translate_es,
        },
        Ne: {
            translation: translate_ne,
        },
    },
    lng: 'En', // if you're using a language detector, do not define the lng option
    fallbackLng: 'En',

    interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
});
const Toggle = ({theme,toggleTheme}) =>{
  const [value, setValue] = useState(localStorage.getItem('lang'))
  const handleChange = (event) => {
      setValue(event.target.value);
  }
  useEffect(() => {
      i18next.changeLanguage(value);
      localStorage.setItem('lang', value);
  }, [value])

  useEffect(() => {
      let currentLang = localStorage.getItem('lang');
      i18next.changeLanguage(currentLang);
  },[]);
const { t } = useTranslation();
   
    return (
        <>
                   <section className='hero'>

            <div className="header__container">
         <div className="dropitem">
         <Button className="toggle-button" onClick={toggleTheme} style={{'background-color':'oranged'}}>
      {theme === "light" ? <Moon />:<Sun/>}
    </Button >
         <img src={logo} alt="" className="logo"/>
         <select
                            className="custom-btn btn"
                            style={{  "borderRadius": "none", "webkitAppearance": "none" }}
                            value={value}
                            onChange={handleChange}
                            name="">
                            <option value='En'>En</option>
                            <option value='Ne'>नेपा</option>
                        </select>
        
         </div>
                <div>
             
                <h1>{t('Hello')}!</h1>
                <h2> {t('I am Rajkumar Aryal')}</h2>
                </div>
                <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
        2000, // Waits 1s
        'React Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'App Designer', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className='typetext'
    />

<CTA/>
<a href="#about">
<div className="middle">
    <div className="mouse">

    </div>
</div>
</a>

 </div>
         </section>    
        </>
    );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
