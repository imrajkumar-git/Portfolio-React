
import "./Contact.css"
import "./owl.carousel.css"
import Laptop from '../../Assets/laptop.json'
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
export const Contact = () =>{
  const { t } = useTranslation();

    return (
      
  <section class="contact top" id="contact">
    <div class="container2">
    <div class="content">
      <div class="left-side">
    <Lottie options={defaultOptions} class='lottie'/> 
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <form class="mtop"  action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST">
        <div class="input-box">
          <input type="text" placeholder="Enter your First name" name="First_Name"
                                                id="name"
                                             
                                                required
                                                autoComplete='off'/>
        </div>
        <div class="input-box">
          <input type="text" placeholder={t('Enter your Last Name')}
 name="Last_Name"
 id="Last_Name"
 required
 autoComplete='off'/>
        </div> <div class="input-box">
          <input placeholder={t('Enter your Email Address')}  type="email"
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                required
                                                autoComplete='off'/>
        </div>
        <div class="input-box">
          <input type="text" placeholder={t('Enter your Phone Number with Country Code')}
                                                name="Phone-number"
                                                id="phone_number"
                                                autoComplete='off'
                                                required />
        </div>
        <div class="input-box message-box">
          <textarea className="manualtextarea" rows="5" cols="80" required autoComplete='off' placeholder={t('Tell Me about The Project' )}   name="Message"
                                                id="name" ></textarea>
        </div>
        <div class="button">
        <button class="btn2 btn3">{t('Submit')}</button>
        </div>
      </form>
    </div>
    </div>
  </div>
  {/* <div class="container flex">
 

    <div class="right">
      <div class="heading">
        <div class="heading_top flex">
         
        </div>
        
        <div class="heading_bottom">
          <h2><span>{t('Send Me a Message')}</span></h2>
        </div>
      </div>


      <form class="mtop"  action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST">
        <div class="input grid">
          <input type="text" placeholder={t('Enter your First Name')}
                                                name="First_Name"
                                                id="name"
                                             
                                                required
                                                autoComplete='off'/>

<input type="text" placeholder={t('Enter your Last Name')}
 name="Last_Name"
 id="Last_Name"
 required
 autoComplete='off'/>

          <input placeholder={t('Enter your Email Address')}  type="email"
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                required
                                                autoComplete='off'/>
          <input type="text" placeholder={t('Enter your Current Location')} id="Address" name="Address"/>
          <input type="text" placeholder={t('Enter your Country')} id="Country" name="Country"/>

          <input type="text" placeholder={t('Enter your Phone Number with Country Code')}
                                                name="Phone-number"
                                                id="phone_number"
                                                autoComplete='off'
                                                required
                                                />
        </div>

        <textarea className="manualtextarea" rows="5" cols="80" required autoComplete='off' placeholder={t('Tell Me about The Project' )}   name="Message"
                                                id="name" ></textarea>
        <button class="btn2 btn3">{t('Submit')}</button>
      </form>
    </div>

    
    </div> */}
</section> 
    )
}