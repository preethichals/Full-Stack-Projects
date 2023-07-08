import React from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

function Header() {
  
  return (
    <>
    <Nav>
        <Logo src="/images/logo.svg" alt="logo" />
        <NavList>
        <a href='/'><img src="/images/home-icon.svg" alt="home" />Home</a>
        <a href='/movie-detail'><img src="/images/search-icon.svg" alt="search" />Search</a>
        <a href='/movie-detail'><img src="/images/watchlist-icon.svg" alt="watchlist" />Watchlist</a>
        <a href="/movie-detail"><img src="/images/original-icon.svg" alt="logo" />ORIGINALS</a>
      
        <Link to="/movie-detail"><img src="/images/movie-icon.svg" alt="movies" />Movies</Link>
        <a href='/movie-detail"'><img src="/images/series-icon.svg" alt="series" />Series</a>
   
        </NavList>
        <UserImg>
        <div>
          <img
            src="https://us.123rf.com/450wm/mrswilkins/mrswilkins1705/mrswilkins170500005/mrswilkins170500005.jpg?ver=6"
            alt=""
          />
        </div>
        <div>
          <Link to="/login">LOGIN</Link>
        </div>
      </UserImg>
   
    </Nav>
    </>
  )
}

export default Header

const Nav  = styled.div`
height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;`

const Logo = styled.img`
width:80px` 

const NavList = styled.div`
display: flex;
flex: 1;
margin-left: 2rem;

a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  img {
    height: 20px;
    margin-right: 2px;
  }
  span {
    font-size: 14px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;

      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      transform: scaleX(0);
    }
  }

  &:hover {
    span:after {
      transform: scale(1);
      opacity: 1;
    }
  }
}
`;

const UserImg = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;

  img {
    width: 30px;
    height: 30px;
    border: 1px solid white;
    margin-right: 1rem;
    border-radius: 5px;
  }
`;