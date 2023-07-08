import { Parallax } from 'react-parallax';
import blogbg from '../../Images/blog-img.jpg'

function BlogParallax() {
  return (
  <>
      <Parallax className='main-img'  bgImage={blogbg} strength={200}>
      
        <div className='main-content'>
            
        <h4 className="main-text opacity-75 ">Near by Top Sights</h4>

        </div>
       
    </Parallax>
  </>
  )
}

export default BlogParallax