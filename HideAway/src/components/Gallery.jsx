import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const gallery = [
    {
      id: "01",
      image: "Room-01.jpg",
      title: "Single Deluex",
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      price: 10000,
    },
    {
      id: "02",
      image: "Room-02.jpg",
      title: "Family Deluxe",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
      price: 18000,
    },
   
    {
      id: "03",
      image: "Room-03.jpg",
      title: "Double Deluxe",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
      price: 15000,
    },
   {
      id: "04",
      image: "Room-04.jpg",
      title: "Ultra Deluxe",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
      price: 20000,
    },{
      id: "05",
      image: "Room-05.jpg",
      title: "Elite",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
      price: 22000,
    },{
      id: "06",
      image: "Room-06.jpg",
      title: "Elite Ultra",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
      price: 25000,
    },
    
  ];

  return (
    <>

      <div className=" text-center my-4 container">
      <h4 className=" letter-space1 text-capitalize border-bottom color3 corinthia">Choose Your Favorite</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          {" "}
          Fermentum iaculis eu non diam phasellus vestibulum lorem dictumst
          quisque.
        </p>
       
        <div className="container m-auto row row-cols-1 row-cols-lg-3 row-cols-md-2 bgrooms ">
          {gallery &&
            gallery.map((m, index) => {
              return (
                <div className="col p-4 rounded-3 " key={index}>
                  <img
                    className="w-100 img-fluid rounded-3 "
                    style={{ width: "auto", height: "15rem" }}
                    src={require(`./../Images/${m.image}`)}
                    alt=""
                  />
                  <div className="px-4">
<h5 className="text-center text-uppercase fw-semibold color1 py-2 letter-space2 border-bottom border-dark-subtle">{m.title}</h5>
                 <h6 className="text-capitalize fw-light letter-space1 lh-base text-center ">{m.dec}</h6>
                 <h5 className="fw-semibold letter-space1 color2">Rs. {m.price} <span className="fw-normal fs-6"> - PER NIGHT</span></h5>
                 </div>
                </div>
              );
            })}
        </div>
        <Link to="/contact" className=" btn btn-lg bg-dark text-white mt-4 fs-6 text-uppercase letter-space1">Book Now</Link>

 
      </div>

    </>
  );
}

export default Gallery;
