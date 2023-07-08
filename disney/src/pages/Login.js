import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  return ( <>
  <Header/>
    <Container>
       
      <Content>
        <Logo1 src="/images/cta-logo-one.svg"></Logo1>
        <SignUp>Sign-Up</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional
          subscription. As of 10/26/22, the price of Disney+ and Bundle wiil
          increase by 400.
        </Description>
        <Logo2 src="/images/cta-logo-two.png"></Logo2>
      </Content>
    </Container>
    <Footer/>
    </>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    display: flex;
    justify-content: center;

    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    background-image: url("/images/login-background.jpg");
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 80%;
  padding: 2em 2em;
  display: flex;
  flex-direction: column;
`;

const Logo1 = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: 700;
  padding: 1em 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 0.7em;
  margin: 2em 0;
  text-transform: uppercase;

  tra &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const Logo2 = styled.img`
  margin: 1em 0;
`;
