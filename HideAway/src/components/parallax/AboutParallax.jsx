import { Parallax } from 'react-parallax';
import about2 from '../../Images/about2.jpg'

function AboutParallax() {
  return (
  <>
      <Parallax className='main-img'  bgImage={about2} strength={200}>
      
        <div className='main-content'>
            
            <p className='main-text'> Little About Us</p>

        </div>
       
    </Parallax>
  </>
  )
}

export default AboutParallax