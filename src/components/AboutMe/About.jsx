import "./About.css"
import { Col, Row } from "react-bootstrap";
import 'aos/dist/aos.css';
import React from "react";
import { useSpring} from "react-spring";
import ME from "../../Assets/About/aboutpic.png";
import { awrapper } from "../dummydata";
import html from "../../Assets/Skills/html.png"
import css from "../../Assets/Skills/css.png"
import JavaScript from "../../Assets/Skills/javascript.png"
import tailwand from "../../Assets/Skills/tailwind.png"
import bootstrap from "../../Assets/Skills/bootstrap.png"
import materialui from "../../Assets/Skills/materialui.png"
import react from "../../Assets/Skills/react.png"
import python from "../../Assets/Skills/python.png"
import django from "../../Assets/Skills/django.png"
import nextjs from "../../Assets/Skills/nextjs.png"
import vscode from "../../Assets/Skills/visualstudio.png"
import pgadmin from "../../Assets/Skills/pgadmin.png"
import postman from "../../Assets/Skills/postman.png"
import command from "../../Assets/Skills/command.png"
import androidstudio from "../../Assets/Skills/androidstudio.png"
import GitHubCalendar from "react-github-calendar"
import { useTranslation} from 'react-i18next';


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
export const About = ({}) =>{
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
  const { t } = useTranslation();

    return (
        <>
        <section className='about' id ="about">
        <section id="experience">
        <div class="experience background2">
        <div class="container">
          <div class="heading center">
            <div class="heading_top flex">
              <div class="line"></div>
              <div class="line"></div>

            </div>
            <div class="heading_bottom">
              <h2><span>About Me </span></h2>
            </div>
          </div>
    
    
          <div class="content flex">
            <div class="timeline1">
              <img src={ME} alt=""/>

            </div>
              <div class="timeline">
              <div className="profile_title">
                <h4 class='mb-0'>Information</h4>
              </div>
                <div class="line">
                </div>
               
      <div class="content content-1 flex">
      <div class="profile-body">
        <p><span class="profile-small-title">Name</span><span className="profile-span-name">Rajkumar Aryal</span></p>
        <p><span class="profile-small-title">DOB</span><span className="profile-span-name">Nov 19, 2002</span></p>
        <p><span class="profile-small-title">Email</span><span className="profile-span-email"><a href="mailto:rajkumararyal0977@gmail.com.design">rajkumararyal0977@gmail.com</a></span></p>
        <p><span class="profile-small-title">Address</span><span className="profile-span-name"><a>Kathmandu,Kalanki</a></span></p>
        <p><span class="profile-small-title">Phone</span><span className="profile-span-name"><a href="tel: +9779869533015">+9779869533015</a></span></p>
        <p><span class="profile-small-title">Hobbies</span><span className="profile-span-name">Coding,Listening to music</span></p>
        <p><span class="profile-small-title">Education</span><span className="profile-span-name">Computer Engineering</span></p>
        <p><span class="profile-small-title">Blood Group</span><span className="profile-span-name">O Positive</span></p>
        <p><span class="profile-small-title">Fav Country</span><span className="profile-span-name">Switzerland</span></p>
        <p><span class="profile-small-title">Fav </span><span className="profile-span-name">Nepali</span></p>
        {/* <p><span class="profile-small-title">Nationality</span><span className="profile-span-name">Nepali</span></p>
        <p><span class="profile-small-title">Nationality</span><span className="profile-span-name">Nepali</span></p>
        <p><span class="profile-small-title">Nationality</span><span className="profile-span-name">Nepali</span></p> */}
        </div>
                </div>
                
                </div>
    
                <div class="line">
                </div>
              </div>

            </div>
    
    
    
  
      </div>
      </section>
      <div className="container2 about__container">
            
            <div className="about__content" >
                       
                     
                         <div className='contentabout'>
 
                <div className="translate_text">
               
                                      {t("Hello my name is Rajkumar Aryal and I am a full-stack web developer with over 5 years of experience in the field.I have a strong background in building and maintaining dynamic responsive and user-friendly websites I have expertise in both front-end and back-end development and am proficient in a range of technologies including HTML CSS JavaScript React Nodejs and MongoDB I am a quick learner and am always looking to stay ahead of the curve in the ever-evolving world of web development  I have a passion for designing and developing sleek functional and engaging websites that provide a positive user experience My ultimate goal is to work on challenging projects that allow me to further develop my skills and contribute to the growth of a company I am eager to join a dynamic and innovative team where I can collaborate with others and bring my ideas to life I am known for my attention to detail, strong communication skills and ability to balance multiple tasks and meet tight deadlines I believe that my technical expertise and passion for web development set me apart from others and make me a valuable asset to any team")}

                </div>
                

                </div>
  

            </div>


        </div>
      <section className='awrapper'>
        <div className='container about_grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
               <h1><span class="num" data-val={val.data}>{val.data} +</span></h1> 
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
        </section>
        <section className='skills' id='skills'>
        <div class="heading_bottom">
              <h2><span>{t('Professional Skillset')}</span></h2>
            </div>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" >
     <div className='m-auto grid grid-cols-2'>
                <img src={html}  alt='/' />
                <h3>HTML</h3>

              </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className='m-auto grid grid-cols-2'>
                <img src={css}  alt='/' />
                <h3>CSS</h3>

              </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className='m-auto grid grid-cols-2'>
                <img src={JavaScript}  alt='/' />
                <h3>JAVASCRIPT</h3>

              </div>
      </Col>
              <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={materialui}  alt='/' />
                <h3>MATERIALUI</h3>
              </div>      
              </Col> <Col xs={4} md={2} className="tech-icons">
      <div className='m-auto grid'>
                <img src={bootstrap}  alt='/' />
                <h3>BOOTSTRAP</h3>
              </div>      </Col>
              <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={tailwand}  alt='/' />
                <h3>TAILWANDCSS</h3>
              </div>      </Col> <Col xs={4} md={2} className="tech-icons " >
      <div className='m-auto grid'>
                <img src={react}  alt='/' />
                <h3>REACT</h3>
              </div>      </Col> <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={nextjs}  alt='/' />
                <h3>NEXTJS</h3>
              </div>      </Col> 
              <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={python}  alt='/' />
                <h3>PYTHON</h3>
              </div>      </Col>
              <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={django}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
    
    </Row>
        </section>
        <section class='tools' >
        <div class="heading_bottom">
              <h2><span>{t('Tools I Used')} </span></h2>
            </div>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }} >
                
        <Col xs={4} md={2} className="tech-icons ">
      <div className='m-auto grid'>
                <img src={vscode}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
              <Col xs={4} md={2} className="tech-icons " >
      <div className='m-auto grid'>
                <img src={pgadmin}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
              <Col xs={4} md={2} className="tech-icons " >
      <div className='m-auto grid'>
                <img src={postman}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
              <Col xs={4} md={2} className="tech-icons " >
      <div className='m-auto grid'>
                <img src={androidstudio}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
              <Col xs={4} md={2} className="tech-icons " >
      <div className='m-auto grid'>
                <img src={command}  alt='/' />
                <h3>DJANGO</h3>
              </div>      </Col> 
    </Row>
    <div className="github-calender">
        <div class="heading_bottom">
              <h2><span>{t('Days I Code')}</span></h2>
            </div>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                

    
      <GitHubCalendar
        username="imrajkumar-git"
        blockSize={22}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  
        </section>
        </>
        
    )
}