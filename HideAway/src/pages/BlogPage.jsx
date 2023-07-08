import React from "react";
import Blog from "../components/Blog";
import Layout from "../Layout/Layout";

function BlogPage() {
  return (
    <>
     <Layout title={'Blog - Places to visit'}>
        
        <div className=" container">
        <h4 className="text-left mt-2 corinthia">
          Near by Places to Explore
        </h4>
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
        
        <Blog/>
      </Layout>
    </>
  );
}

export default BlogPage;
