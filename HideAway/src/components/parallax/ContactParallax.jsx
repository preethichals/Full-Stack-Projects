import { Parallax } from 'react-parallax';
import gallerybg from '../../Images/ImageOne.jpg'

function ContactParallax() {
  return (
  <>
      <Parallax className='main-img'  bgImage={gallerybg} strength={200}>
      
        <div className='main-content'>
            
        <h4 className="main-text ">Luxury Experience</h4>

        </div>
       
    </Parallax>
  </>
  )
}

export default ContactParallax