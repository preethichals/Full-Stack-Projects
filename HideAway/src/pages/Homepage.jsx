import React from "react";
import Detail from "../components/Detail";
import Service from "../components/Service";
import Video from "../components/Video";
import Layout from "../Layout/Layout";

function Homepage() {
  return (
    <>
      <Layout title={'HideAway - Luxury Inn & Resort'}>
        {/* video */}
        <Video />
        {/* main */}
        <Detail />
        {/* service */}
        <Service />
      </Layout>
    </>
  );
}

export default Homepage;
