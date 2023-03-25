import "./Education.css"
import Laptop from '../../Assets/71619-coding.json'
import Lottie from 'react-lottie'
import { useTranslation} from 'react-i18next';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Laptop,
  rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
  }
};
const skillssection = document.getElementById('progress-bar')
const progressBars = document.querySelectorAll('.progress-bar')
function showProgress(){
  progressBars.forEach(progressBar=>{
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width= `${value}%`;
  });
}
function hideProgress(){
  progressBars.forEach(p=>{
    p.style.opacity=0;
    p.style.width=0;

  });
}
window.addEventListener('scroll',()=>{
  const sectionPos=skillssection.getBoundingClientRect().top;
  const screenPos = window.innerHeight/2;
  if(sectionPos > screenPos){
showProgress();

  }
  else{
hideProgress();
  }
})
export const Education = () =>{
  const { t } = useTranslation();
    return (
      <section class="skills mtop background2" >
      <div class="container container2 flex "id="progress-bar">
        <div class="left">
          <div class="heading">
            <div class="heading_top flex">   
            </div>
          </div>
          <div class="text">
            <h3>{t('Every Day is a New Challenge')}</h3>
            <Lottie options={defaultOptions} class='lottie'/> 
            <div className="button">    <a href="https://www.fiverr.com/users/rajkumararyal"><button className="glow-on-hover" type="button">{t('Hire Me')}</button>
</a></div>
          </div>
        </div>
  
        <div class="right">
                

        <div class="heading_bottom">
              <h2 text-align='center'>{t('My Skills')}</h2>
            </div>
         
{/* 
            <div className="progress">
            <div className="progress-bar" data-progress="70">
            </div>

          </div>
          <div className="progress">
            <div className="progress-bar" data-progress="20">
            </div>

          </div> <div className="progress">
            <div className="progress-bar" data-progress="90">
            </div>
            <h5>85%</h5>

          </div> <div className="progress">
            <div className="progress-bar" data-progress="100">
            </div>
            <h5>55%</h5>

          </div> <div className="progress">
            <div className="progress-bar" data-progress="90">
            </div>
            <h5>55%</h5>

          </div> */}

         
  
  
        </div>
        </div>
    </section>

    )
}