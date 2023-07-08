import React from "react";

function About() {
  const about = [
    {
      id: "01",
      image: "events.jpg",
      title: "Events",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    {
      id: "02",
      image: "event-03.jpg",
      title: "Party",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    
    {
      id: "03",
      image: "Room-02.jpg",
      title: "Ultra Deluxe",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    {
      id: "04",
      image: "Room-04.jpg",
      title: "Deluxe",
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      
    },
    
    
    
  ];

  return (
    <>
    {/* section-01 */}
  
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
                  <h5 className="text-center py-2 letter-space2 border-bottom color1">{m.title}</h5>
                  <h6 className=" text-capitalize fw-light letter-space1 pt-1 lh-base color2">{m.dec}</h6>
                </div>
              );
            })}
        </div>
 
      </div>

 

    </>
  );
}

export default About;
