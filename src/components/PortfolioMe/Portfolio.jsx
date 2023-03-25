import "./Portfolio.css"
import React from "react"
import PriceCard from "./price_Card"

// const data = [
//     {
//         id : 1,
//         image : Nykaa,
//         techstack : "HTML | CSS | JavaScript | Bootstrap 5", 
//         title : " This website is a colne of nykaa.com In which I had implemented Login & Sign-up page and checkout page .",
//         github : "https://github.com/waghchaurepooja/nayaka",
//         demo : "https://nykaaproject.netlify.app/"
//     },
//     {
//         id : 2,
//         image : Minimalist,
//         techstack : "HTML | CSS | JavaScript | MongoDB | Express.JS | Node.JS | EJS | Bootstrap 5",
//         title : " This website is a clone of beminimalist.co in wchich I had implemented Login & Sign-up authication. ",
//         github : "https://github.com/waghchaurepooja/Clone-of-beminimalist",
//         demo : "https://damp-cliffs-11671.herokuapp.com/"
//     },
//     {
//         id : 3,
//         image : TicTacToe,
//         techstack : "HTML | CSS | JavaScript",
//         title : "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
//         github : "https://github.com/waghchaurepooja/Tic-Tac-Toe-App",
//         demo : "https://tic-tac-toe-app-omega.vercel.app/"
//     },
// ]

export const Portfolio = () => {
  return (
    <>
      <section className='price padding'>
     <div class="heading_bottom">
              <h2><span>Pricing & Packages </span></h2>
            </div>
        <div className='container price grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Portfolio

 {/* <section className='skills' id="portfolio">
  
  <h1>{t('My Services')}</h1>

 <div className="container portfolio__container"   data-aos="fade-up">
                

                  
                        <article className="portfolio__item tech-icons1">
                            <div className="portfolio__item-image">
                            <img src={Nykaa} alt="" />
                            </div>
                            <h2>{t('Full Stack Website Development')}</h2>
    <p> <h5>{t('Description')}</h5>{t('Experienced in building custom, responsive and user-friendly websites using HTML, CSS, JavaScript, and various front-end frameworks such as React and backend languages python,JavaScript.')}
    </p>
     <p> <h5>{t('Skills')}</h5>{t('HTML, CSS, JavaScript, React, Vue.js, Responsive Design, User Experience.')}</p>
    <p> <h5>{t('Experience')}</h5>{t('2+ years of experience in Different categories of full stact website development field.')}</p>
        <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>
                        </article>
                        <article className="portfolio__item tech-icons1">
                        <div className="portfolio__item-image">
                                <img src={TicTacToe} alt="" />
                            </div>
<h2>{t('Logo Design')}</h2>
<p> <h5>{t('Description')}</h5>{t('Skilled in creating unique and memorable logos that effectively represent the brand identity.Proficient in using Adobe Illustrator and Photoshop to create vector graphics.')}</p>
     
     <p><h5>{t('Skills')}</h5> {t('Adobe Illustrator, Adobe Photoshop, Vector Graphics,Brand Identity.')}</p>

<p><h5>{t('Experience')}</h5> {t('3+ years of experience in logo design, with a portfolio of successful projects for various industries.')}</p>
 <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>     
</article>
            
            <article className="portfolio__item tech-icons1">

            <div className="portfolio__item-image">
                                <img src={Minimalist} alt="" />
                            </div>
<h2>{t('SEO(search Engine Optimization)')}</h2>

  <p> <h5>{t('Description')}</h5>{t('Experienced in optimizing websites for search engines to improve visibility, traffic, and rankings.')}</p>
     <p><h5>{t('Skills')}</h5>{t('Keyword-Research,On-pageOptimization,Link Building, Google Analytics, Ahrefs, Website Performance Tracking.')}</p>
        <p><h5>{t('Experience')}</h5> {t('5+ years of experience in SEO, with a track record of delivering results for clients across various industries.')}</p>
             <a href="https://www.fiverr.com/users/rajkumararyal"><button  className="services-btn" >{t('Hire Me')}</button></a>
  </article>
  </div>
  </section> */}
 

  {/* </section>  */}
