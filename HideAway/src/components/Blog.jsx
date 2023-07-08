import React from "react";
import BlogParallax from "./parallax/BlogParallax";

function Blog() {
  const about = [
    {
      id: "01",
      image: "blog-img-01.jpg",
      title: "Water Falls",
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      
    },
    {
      id: "02",
      image: "blog-img-02.jpg",
      title: "Beautiful Lake",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    {
      id: "03",
      image: "blog-img-04.jpg",
      title: "VB City",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    {
      id: "04",
      image: "blog-img-03.jpg",
      title: "Boat Ride",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    
  ];

  return (
    <>
    {/* section-01 */}
      <div className="pt-4 text-wrap container">
        
        
        {/* section-02 */}
        
        

{/* Parallax */}
<BlogParallax />
        <div className="clearfix my-4">
        <img
          className="w-25 sticky-top float-start m-4 shadow"
          src={require("./../Images/about2.jpg")}
          alt=""
        />
        <p className="lh-lg ">
          Hstm quisque
          sagittis purus sit amet volutpat consequat. Dictumst quisque sagittis
          purus sit amet volutpat consequat mauris nunc. Scelerisque in dictum
          non consectetur a erat nam at lectus. </p>  
          <p className="lh-lg text-capital">
            Elit duis tristique sollicitudin nibh sit
          amet commodo nulla. Eu non diam phasellus vestibulum lorem sed risus
          ultricies. Nunc eget lorem dolor sed. Condimentum lacinia quis vel
          eros. Mi bibendum neque egestas congue quisque egestas. Praesent
          tristique magna sit amet purus gravida. Fames ac turpis egestas sed
          tempus urna et pharetra pharetra. </p>
     
          <p>Sed elementum
          tempus egestas sed sed risus. Amet aliquam id diam maecenas ultricies
          mi eget mauris pharetra. Non sodales neque sodales ut etiam sit amet
          nisl. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
          fermentum odio.
        </p>
        </div>
        <p className=" lh-lg fw-lighter">
          Auctor elit sed vulputate mi sit amet mauris commodo. ras ornare arcu
          dui vivamus. Pretium viverra suspendisse potenti nullam ac tortor.
          <br /> Pharetra massa massa ultricies mi quis hendrerit. Elit duis tristique sollicitudin nibh sit
          amet commodo nulla. Eu non diam phasellus vestibulum lorem sed risus
          ultricies. Nunc eget lorem dolor sed.
        </p>
      </div>
      <h4 className="mb-3 color1 text-center corinthia" style={{ letterSpacing: "0.2rem" }}>
     Places to Visit
        </h4>
     
{/* section-02 */}
      <div className=" text-center my-2">
       
        <div className="container m-auto row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
          {about &&
            about.map((m, index) => {
              return (
                <div className="col p-2 " key={index}>
                  <img
                    className="w-100 img-fluid p-2 rounded-3 "
                    style={{ width: "auto", height: "15rem" }}
                    src={require(`./../Images/${m.image}`)}
                    alt=""
                  />
                  <h5 className="text-center py-2 letter-space2 border-bottom color2">{m.title}</h5>
                  <h6 className=" text-capitalize fw-light letter-space1 pt-1 lh-base">{m.dec}</h6>
                  
                </div>
              );
            })}
        </div>
 
      </div>

 

    </>
  );
}

export default Blog;
