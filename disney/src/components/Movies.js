import React from "react";

import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img alt="" src="/images/875.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/875215-v.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/1328.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/107.webp" />
        </Wrap>

        <Wrap>
          <img alt="" src="/images/862.webp" />
        </Wrap>

        <Wrap>
          <img alt="" src="/images/105.webp" />
        </Wrap>
      </Content>
      <h4>Popular Movies</h4>
      <Content>
        <Wrap>
          <img alt="" src="/images/712.jpg" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/1001.webp" />
        </Wrap>

        <Wrap>
          <img alt="" src="/images/1386.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/1398.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/30457-v.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/1115.webp" />
        </Wrap>
      </Content>
      <h4>Magic and Fairy Tales - Kids</h4>
      <Content>
        <Wrap>
          <img alt="" src="/images/674816-v.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/276.webp" />
        </Wrap>

        <Wrap>
          <img alt="" src="/images/666576-v.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/687956-v.webp" />
        </Wrap>

        <Wrap>
          <img alt="" src="/images/1119.webp" />
        </Wrap>
        <Wrap>
          <img alt="" src="/images/679.webp" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 2rem;
  box-sizing: border-box;
`;
const Content = styled.div`
  margin-top: 1em;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(6, minmax(0, 1fr));
`;

const Wrap = styled.div`
  width: 14vw;
  height: 34vh;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
