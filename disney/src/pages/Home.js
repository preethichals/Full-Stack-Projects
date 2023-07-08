import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

import Header from "../components/Header";


import ImageSlider from "../components/ImageSlider"
import Movies from "../components/Movies";
import Viewers from "../components/Viewers";

function Home() {
  return (<>

    <Container>
        
<Header/>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Footer/>
    </Container>
    </>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh-70px);
  padding: calc(3.5vw +5px);
  position: relative;
  overflow-x: hidden;

  &:before {
  }
  background: url("/images/home-background.png") center center/ cover no-repeat
    fixed;
  content: "Helloo";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
