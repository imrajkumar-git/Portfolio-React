
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
      <div class="heading_bottom">
              <h2><span>Contact Me </span></h2>
            </div>
    <div class="container2">
    <div class="content">
      <div class="left-side">
    <Lottie options={defaultOptions} class='lottie'/> 
      </div>
      <div class="right-side">
      <div class="form-wrapper">

        <div class="topic-text">Send us a message</div>
        <form class="mtop"  action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST">
        <div class="form-wrapper">


  <div class="input-wrapper">

    <input type="text" name="name" id="name" required placeholder={t("Enter your First Name")} class="input-field"/>


  </div>

</div>
<div class="form-wrapper">

        <div class="input-wrapper">

          <input type="text" class="input-field" placeholder={t('Enter Your Last Name')}
 name="Last_Name"
 id="Last_Name"
 required
 autoComplete='off'/>
        </div>
        </div>
        <div class="form-wrapper">

          <div class="input-wrapper">

          <input className="input-field" type="email"  placeholder={t('Enter your Email Address')}
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                required
                                                autoComplete='off'/>
        </div>
        </div>
        <div class="form-wrapper">
        <div class="input-wrapper">

          <input type="number" class="input-field" placeholder={t('Enter your Phone Number')}
                                                name="Phone-number"
                                                id="phone_number"
                                                autoComplete='off'
                                                required />
                                                </div>
                                                </div>
        <div class="message-box">

          <textarea className="manualtextarea input-field" rows="5" cols="80" required autoComplete='off' placeholder={t('Tell Me about The Project' )}   name="Message"
                                                id="name" ></textarea>
        </div>
        <div class="button">
        <button className="glow-on-hover">{t('Submit')}</button>
        </div>
      </form>
      </div>
    </div>

    </div>
  </div>
</section> 
    )
}