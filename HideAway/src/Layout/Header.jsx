import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
   <>
<div className="bg-black clearfix" id="header">
  <div className='float-start'>
      <p className="container-fluid mb-0 text-white fw-lighter letter-space1">
      <span> </span> Location : <img
                   className="mx-1"
                   style={{ width: "1rem", height: "1rem" }}
                   src={require(`./../Images/map.png`)}
                   alt=""
                 /> Hide-Away Luxury Resort | <span> Reserve or Book Now , Restaurant , 24/7 Service  </span>
      
      </p>
      </div>
<div className='bg-blcak float-end mx-3 flex justify-content-around'>
  <div>
  <img
                   className="mx-1"
                   style={{ width: "1rem", height: "1rem" }}
                   src={require(`./../Images/facebook.png`)}
                   alt=""
                 />
    <img
                   className="mx-1 my-1"
                   style={{ width: "1rem", height: "1rem" }}
                   src={require(`./../Images/twitter.png`)}
                   alt=""
                 />
                
                 
                 <img
                   className="mx-1"
                   style={{ width: "1rem", height: "1rem" }}
                   src={require(`./../Images/whatsapp.png`)}
                   alt=""
                 />
                 
                 </div>
  </div>

    </div>
    {/* navbar */}
    <nav>
    <Navbar bg="light" expand="lg" className="bg-nav shadow border-top border-secondary letter-space1" sticky="top">
      <Container className='grid row-cols-6 align-content-center'>
        <Link href="#home" className='border-0 logo text-center bglogo'>Hide Away</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav text-uppercase fs-6 fw-semibold p-2 " style={{letterSpacing:"0.4rem"}}>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact">Contact</Link>  
            <Link to="/blog" >Blog</Link>                  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>

   </>
  )
}

export default Header