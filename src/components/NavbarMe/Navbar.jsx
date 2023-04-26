import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
import { AiOutlineHome, AiOutlineSkin } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import {MdWorkspacesFilled } from "react-icons/md"
import { useState } from "react";

export const Navbar = () =>{
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset
    
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id')
    
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
    
    
    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader(){
        const header = document.getElementById('header')
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
    
    const [activeNav, setActiveNav] = useState("#")

    return (
        <BrowserRouter>
            <header class="header" id="header">
            <nav class="nav">
           
           <div class="nav__menu" id="nav-menu">
               <ul class="nav__list">
                   <li class="nav__item">
                       <a href="#home" class="nav__link active-link">
                       
                           <span class="nav__name">Home </span>
                           <i><AiOutlineHome/></i>
                       </a>
                   </li>
                   
                   <li class="nav__item">
                       <a href="#about" class="nav__link">
                           <i class='bx bx-user nav__icon'></i>
                           <span class="nav__name">About</span>
                           <i><AiOutlineUser/></i>
                       </a>
                   </li>

                   <li class="nav__item">
                       <a href="#skills" class="nav__link">
                           <i class='bx bx-book-alt nav__icon'></i>
                           <span class="nav__name">Skills</span>
                           <i><AiOutlineSkin/></i>
                       </a>
                   </li>

                   <li class="nav__item">
                       <a href="#portfolio" class="nav__link">
                           <i class='bx bx-briefcase-alt nav__icon'></i>
                           <span class="nav__name">Portfolio</span>
                           <i><AiOutlineUser/></i>
                       </a>
                   </li>

                   <li class="nav__item">
                       <a href="#contactme" class="nav__link">
                           <i class='bx bx-message-square-detail nav__icon'></i>
                           <span class="nav__name">Contactme</span>
                           <i><AiOutlineUser/></i>
                       </a>
                   </li>
               </ul>
           </div>

           
       </nav>
            </header>
          
      
      </BrowserRouter>
       
    )
}