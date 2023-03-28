import "./Footer.css"
import { useTranslation} from 'react-i18next';
import {FaLinkedinIn } from 'react-icons/fa';
export const Footer = ()  =>{
 let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();
    return (
   <footer>
    <div class="container">
     
      <div class="content grid">
        <div class="box1">
          <h4>{t('About')}</h4>
          <ul>
            <li>{t('I am a full stack website Developer! Feel free to get in touch with me.')}</li>
            <h3>{t('I’m available for freelance projects')}</h3>
            <div className="button">
            <a href=""><button className="glow-on-hover" type="button">{t('Click Here')}</button>
</a>
            </div>
     
           
          </ul>
        </div>

        <div class="box2">
          <h4>{t('Services')}</h4>
          <ul>
            <li>{t('Website Development')}</li>
            <li>{t('SEO')}</li>
            <li>{t('Logo Design')}</li>
            <li>{t('App Development')}</li>
          </ul>
        </div>

    

        <div class="box">
        <h4>{t('Contact')}</h4>

          <div class="text">
 <p class="mb-0" >
                                    <a href="tel: +9779810299154" class='contactno'>{t('Call Me')} <br />
                                           {t('9869533015')}
                                  
                                    </a>
                                
                                </p>            <p>
                                    <a href="mailto:rajkumararyal0977@gmail.com">
                                       {t('Email')}:  rajkumararyal0977@gmail.com
                                    </a>
                                </p>           
                                 <p style={{color:'white'}}>{t('Nepal, Kathmandu, Kalanki')}</p>
          </div>
      
          <div class="icon flex1">
      
                  
           <a href="https://www.facebook.com/rajkumararyal0977"><div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer'>
<i class="social-icon fa fa-facebook fa-2x"></i>
</div></a>
           <a href="https://www.instagram.com/rajkumar_aryal_official/">
           <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer'>
<i class="social-icon fa fa-instagram fa-2x"></i></div></a>
           <a href="https://www.youtube.com/channel/UCaA0IiwSQyhMLxLTJ_YoEZw"><div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer'>
       <i class="social-icon fa fa-youtube"></i></div>
</a>
<a href="https://github.com/imrajkumar-git">                             <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer'>
   <i class="social-icon fa fa-git"></i></div>
</a>
<a href="https://www.linkedin.com/in/rajkumar-aryal-38b43a233/"><div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer'>
<i class="social-icon fa fab fa-linkedin-in"></i></div>
</a>
          </div>
        </div>
      </div>

      <div class="legal flex1">
        <div class="legal-box">
        <a href="https://www.facebook.com/rajkumararyal0977"><p>{t('Design and Developed by Rajkumar Aryal')}</p></a> 
        </div>
        {/* <div class="legal-box1">
          <p></p>
       
        </div> */}
        <div class="legal-box1">
          <p>Copyright (c) {year} All Rights Reserved</p>
         
        </div>
      </div>
    </div>
  </footer>

    )
}