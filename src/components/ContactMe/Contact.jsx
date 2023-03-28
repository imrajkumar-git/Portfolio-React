import "./Contact.css"
import "./owl.carousel.css"
import Laptop from '../../Assets/laptop.json'
import Lottie from 'react-lottie'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
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

        {/* <div class="topic-text">Send us a message</div> */}
        <form class="mtop"  action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST">
      
                <div className='grid md gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Enter your Full Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      id="name"
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Enter your Email Address
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="Email"
                      
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                required
                                                autoComplete='off'
                    />
                  </div>
                </div>
                 <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Enter your Phone Number</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='number'
                    name="Phone-number"
                    id="phone_number"
                    required
                    autoComplete="off"

                  />
                </div> 
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Enter your Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
        <div class="button">
        <button className="glow-on-hover">{t('Submit')}</button>
        </div>
      </form>
      </div>
    </div>

    </div>
  </div>
  <div className='flex justify-center py-12'>
            <a href="#">
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
        </div>
</section> 

    )
}