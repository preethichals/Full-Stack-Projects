import React from "react";

function Service() {
  const gallery = [
    {
      id: "01",
      image: "wifi.jpg",
      title: "Free Wifi",
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      
    },
    {
      id: "02",
      image: "spa.jpg",
      title: "Luxury Spa",
      dec: "diam phasellus vestibulum lorem dictumst quisque",
     
    },
    {
        id: "03",
        image: "food.jpg",
        title: "Restaurant",
        dec: "diam phasellus vestibulum lorem dictumst quisque",
       
  
      },{
        id: "04",
        image: "service.jpg",
        title: "24/7 Service",
        dec: "diam phasellus vestibulum lorem dictumst quisque",
       
  
      },
  ];

  return (
    <>
      <div className="container text-center bg-body-secondary">
        <h4 className=" letter-space1 text-capitalize border-bottom color2 corinthia">Our Services</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          {" "}
          Fermentum iaculis eu non diam phasellus vestibulum lorem dictumst
          quisque.
        </p>

        <div className="mt-2 row row-cols-2 row-cols-lg-4 row-cols-md-2 g-2 bg-white ">
          {gallery &&
            gallery.map((m, index) => {
              return (
                <div className="col p-2" key={index}>
                  <img
                    className=" rounded-3 p-2 "
                    style={{ width: "auto", height: "10rem" }}
                    src={require(`./../Images/${m.image}`)}
                    alt=""
                  />
                  <h4 className="text-center mt-2 letter-space2">{m.title}</h4>
                  <h6 className="fw-light letter-space1 color4">{m.dec}</h6>
                  
                </div>
              );
            })}
        </div>
      </div>
     
    </>
  );
}

export default Service;
