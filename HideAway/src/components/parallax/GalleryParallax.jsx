import { Parallax } from 'react-parallax';
import gallerybg from '../../Images/ImageTwo.jpg'

function GalleryParallax() {
  return (
  <>
      <Parallax className='main-img'  bgImage={gallerybg} strength={200}>
      
        <div className='main-content'>
            
        <h4 className="main-text">Favorite Rooms</h4>

        </div>
       
    </Parallax>
  </>
  )
}

export default GalleryParallax