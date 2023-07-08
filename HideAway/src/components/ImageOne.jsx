import { Parallax } from 'react-parallax';
import Imagebg from '../Images/ImageOne.jpg'

function ImageOne() {
  return (
  <>
      <Parallax className='main-img'  bgImage={Imagebg} strength={200}>
      
        <div className='main-content'>
            
            <p className='main-text'> Your Vacation Awaits</p>

        </div>
       
    </Parallax>
  </>
  )
}

export default ImageOne