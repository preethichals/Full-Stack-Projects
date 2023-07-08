import React from "react";
import About from "../components/About";
import AboutParallax from "../components/parallax/AboutParallax";

import Layout from "../Layout/Layout";


function AboutPage() {
  return (
    <>
    <Layout title={'A little About-Us'}>
    <div className=" container">
        <h4 className="text-left mt-3 corinthia color1">
          Little About Us
        </h4>
        <p className="text-left letter-space1 lh-lg">
          Iaculis urna id volutpat lacus laoreet non. Elit duis tristique
          sollicitudin nibh sit amet commodo nulla. Eu non diam phasellus
          vestibulum lorem sed risus ultricies. Nunc eget lorem dolor sed.
          Condimentum lacinia quis vel eros. Mi bibendum neque egestas congue
          quisque egestas.{" "}
        </p>
        </div>
        <div className="pt-4 pb-3 text-wrap container">
        <h4 className="mb-3 text-uppercase text-center color5" style={{ letterSpacing: "0.2rem" }}>
        Luxury Living in Paradise
        </h4>
        
        {/* section-02 */}
        
        <p className=" lh-lg text-center">
          Auctor elit sed vulputate mi sit amet mauris commodo. ras ornare arcu
          dui vivamus. Pretium viverra suspendisse potenti nullam ac tortor.
          <br /> Pharetra massa massa ultricies mi quis hendrerit.Elit duis tristique sollicitudin nibh sit
          amet commodo nulla. Eu non diam phasellus vestibulum lorem sed risus
          ultricies.Praesent
          tristique magna sit amet purus gravida. Fames ac turpis egestas sed
          tempus urna et pharetra pharetra.
        </p>
</div>
{/* Parallax */}
<AboutParallax/>
<div className=" container">
        <div className="clearfix my-4">
        <img
          className="w-25 sticky-top float-start m-4 shadow"
          src={require("./../Images/aboutus-img.jpg")}
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
        <p className="lh-lg text-capital">
        Miendum neque egestas lit duis tristique sollicitudin nibh sit
          amet commodo nulla. Eu non diam phasellus vestibulum lorem sed risus
          ultricies. Nunc eget lorem dolor sed. Condimentum lacinia quis vel
          eros. congue quisque egestas. Praesent
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
     
       
 
 
        
        <About/>  
        </Layout>
    </>
  );
}

export default AboutPage;
