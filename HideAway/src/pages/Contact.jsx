import React from "react";
import CounterSec from "../components/CounterSec";
import ContactParallax from "../components/parallax/ContactParallax";
import Layout from "../Layout/Layout";

function Contact() {
 
  return (
    <>
    <Layout title={'Contact-Book Now'}>
      <ContactParallax/>
      <div className="pt-3 pb-2 text-wrap container">
      <h4 className=" letter-space1 text-capitalize border-bottom corinthia text-center fw-light color1">Reserve <span className="fs-2 color3 fw-bold">(or)</span> Book Now</h4>
        
        
        {/* section-02 */}
        
        <p className=" lh-lg text-center color2">
          Auctor elit Praesent tristique magna sit amet purus gravida. Fames ac turpis egestas sed
          tempus urna et pharetra pharetra.</p>
         
        <p className="lh-lg text-center color3"></p> 
          <p className="lh-lg text-center color3"> Pharetra massa massa ultricies mi quis hendrerit.Elit duis tristique sollicitudin nibh sit
          amet commodo nulla. Eu non diam phasellus vestibulum lorem sed risus
          ultricies.
         
        </p>
</div>
      <CounterSec/>
      </Layout>
    </>
  );
}

export default Contact;
