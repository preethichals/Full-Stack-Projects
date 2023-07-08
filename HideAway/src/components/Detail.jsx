import React from "react";
import { Link } from "react-router-dom";

import ImageOne from "./ImageOne";


function Detail() {
  const gallery = [
    {
      id: "01",
      image: "Room-01.jpg",
      title: "Double Deluxe",
      dec: "Tempor incididunt ut labore et dolore magna aliqua",
      price: 20000,
    },
    {
      id: "02",
      image: "Room-02.jpg",
      title: "Ultra Deluxe",
      dec: "Diam phasellus vestibulum lorem dictumst quisque",
      price: 25000,
    },
    {
      id: "03",
      image: "Room-03.jpg",
      title: "Deluxe Single",
      dec: "Aliquam etiam erat velit scelerisque in dictum",
      price: 15000,
    },
    
    
  ];
 

  return (
    <>
      <div className=" text-center my-1 clearfix ">
      
      </div>
      
      <div className=" text-center mt-2">
      <h4 className="clearfix letter-space1 border-bottom corinthia color1 container pb-1">Welcome to HideAway</h4>
        
        <h3 className="color2 p-2 text-left fw-lighter text-uppercase letter-space2 ">
         Luxury Inn <span className="fs-4 fw-bolder color1 border-bottom">&</span> Resort
        </h3>
        <p className="lh-lg letter-space1">
          {" "}
          Fermentum iaculis eu non diam phasellus vestibulum lorem dictumst
          quisque.<br/>
          Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
        </p>
        {/* Rooms */}
        <div className=" text-center my-2">
       
       <div className="container m-auto row row-cols-1 row-cols-lg-3 row-cols-md-2 ">
         {gallery &&
           gallery.map((m, index) => {
             return (
               <div className="col p-2 " key={index}>
                 <img
                   className="w-100 img-fluid p-2 rounded-3 "
                   style={{ width: "auto", height: "15rem" }}
                   src={require(`./../Images/${m.image}`)}
                   alt=""
                 />
                 <h5 className="text-center text-uppercase fw-semibold color1 py-2 letter-space2 border-bottom">{m.title}</h5>
                 <h6 className="text-capitalize fw-light letter-space1 lh-base text-center px-4">{m.dec}</h6>
                 <h5 className="fw-semibold letter-space1 color2">Rs. {m.price} <span className="fw-normal fs-6"> - PER NIGHT</span></h5>
               </div>
             );
           })}
       </div>

     </div>
     <Link to='/gallery' className="btn btn-lg px-3 bg-black text-white fw-lighter letter-space2 mb-4">More Rooms</Link>
      </div>
      <ImageOne/>
      
    </>
  );
}

export default Detail;
