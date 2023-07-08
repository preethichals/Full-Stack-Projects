import { Parallax } from 'react-parallax';
import servicebg from '../Images/image-02.jpg'

function ImageTwo() {
  return (
  <>
      <Parallax className='main-img'  bgImage={servicebg} strength={200}>
      
        <div className='main-content'>
            
            <p className='main-text'>Our Services</p>

        </div>
       
    </Parallax>
  </>
  )
}

export default ImageTwo