import React from "react";
import Layout from "../Layout/Layout";
import GalleryParallax from "../components/parallax/GalleryParallax"
import Gallery from "../components/Gallery";
import EventParallax from "../components/parallax/EventParallax";
import Events from "../components/Events";


function AboutPage() {
  return (
    <>
    <Layout title={'Gallery - Events'}>
   <GalleryParallax/>
   <Gallery/>
        <EventParallax/>
        <Events/>
        </Layout>
    </>
  );
}

export default AboutPage;