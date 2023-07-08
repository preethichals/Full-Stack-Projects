import React from "react";
import videobg from "../Assets/video.mp4";

function Video() {
  return (
    <>
      {/* overlay */}
      <div className="overlay"></div>
      {/* video */}
      <div className="main">
        <video src={videobg} autoPlay loop muted />
        {/* content */}
        <div
          className="content text-uppercase"
          style={{ letterSpacing: "0.2rem" }}
        >
          <img
            className="w-25 float- m-4 opacity-75"
            src={require("./../Images/logo.png")}
            alt=""
          />
          <h1 className="fw-light">Enjoy a Luxury</h1>
          <h2 className="fw-light ">Experience</h2>
        </div>
      </div>
    </>
  );
}

export default Video;
