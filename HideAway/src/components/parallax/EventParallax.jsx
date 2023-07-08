import { Parallax } from 'react-parallax';
import gallerybg from '../../Images/events.jpg'

function EventParallax() {
  return (
  <>
      <Parallax className='main-img'  bgImage={gallerybg} strength={200}>
      
        <div className='main-content'>
            
        <h4 className="ps-4 py-3 letter-space3 text-uppercase border-bottom bg-white">Events</h4>

        </div>
       
    </Parallax>
  </>
  )
}

export default EventParallax