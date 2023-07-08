import React from "react";

function Events() {
  const events = [
    {
      id: "01",
      image: "event-02.jpg",
      
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      date:12,
      month:"Aug",
    },
    {
      id: "02",
      image: "events.jpg",
     
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      date:15,
      month:"Aug",
    },
    {
      id: "03",
      image: "event-03.jpg",
      
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      date:20,
      month:"Aug",
    },{
      id: "04",
      image: "event-04.jpg",
      
      dec: "tempor incididunt ut labore et dolore magna aliqua",
      date:24,
      month:"Aug",
    },
    
  ];

  return (
    <>

      <div className="container text-center my-4">
      <h4 className=" color5 letter-space1  text-center dashed-border corinthia">
      Up-Coming Events
        </h4>
    
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          {" "}
          Fermentum iaculis eu non diam phasellus vestibulum lorem dictumst
          quisque.
        </p>
       
        <div className="container m-auto row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
          {events &&
            events.map((m, index) => {
              return (
                <div className="col p-2 " key={index}>
                  <img
                    className="w-100 img-fluid p-2 rounded-3"
                    style={{ width: "auto", height: "15rem" }}
                    src={require(`./../Images/${m.image}`)}
                    alt=""
                  />
                 
                 
                  <div className="d-flex mt-2 ps-2 bg-body-secondary">
                  <div class="d-flex flex-column bg-danger p-3 text-white">
                  <h5 className=" fw-semibold letter-space1">{m.date}</h5>
                  <h6 className=" fw-light text-uppercase letter-space1">{m.month}</h6>
                  </div>
                  <h6 className=" text-capitalize fw-light letter-space1 lh-base">{m.dec}</h6>
                  
                  </div>
                </div>
              );
            })}
        </div>
 
      </div>

    </>
  );
}

export default Events;
