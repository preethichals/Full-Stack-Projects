import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MoviesDetail() {
  return (<>
  <Header/>
    <Container>
      <Background>
        <img src="https://stat4.bollywoodhungama.in/wp-content/uploads/2017/09/War-11.jpg" alt="War"/>
      </Background>
      <ImageTitle>
        <img src="https://taukeeredit.com/wp-content/uploads/2019/10/war-movie-text-png.png" alt="War" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="War" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="War"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="War" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2019 ‧ Action/Thriller ‧ 2h 36m</SubTitle>
      <Description>
        War is a high-intensity Bollywood action drama which stars Hrithik
        Roshan, Tiger Shroff, Vaani Kapoor, among other stars. Directed by
        Siddharth Anand, War movie is about a special agent Kabir (Hrithik
        Roshan) who has gone rogue and his student, Khalid (Tiger Shroff) is
        entrusted to take him down. Vaani Kapoor plays a pivotal role in this
        epic battle of teacher vs student. Will Khalid be able to stop Kabir?
        What made Kabir go rogue? Find out in War, the latest action movie
        hitting theatres in October 2019. Book your tickets now to witness this
        thriller, `War`. Releasing in Hindi, Tamil, and Telugu in theatres near
        you!
      </Description>
    </Container>
    <Footer/>
    </>
  );
}

export default MoviesDetail;

const Container = styled.div`
  min-height: calc(100vh -70px);
  padding: 0 calc(3.5vw + 10px);
  position: relative;
  margin-top: 10%;
  margin-left: 5%;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: -10;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 40vw;
  min-heigth: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  font-size: 15px;
  display: flex;
  align-items: center;
  border-color: rgb(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 1em;
  background-color: rgb(245, 240, 240);
  height: 56px;
  border: none;
  cursor: pointer;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  border-radius: 5px;
  font-weight: 700;

  &:hover {
    background-color: rgb(249, 249, 249);
    border-color: rgb(0, 0, 0, 0.3);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  &:hover {
    background: rgb(68, 62, 62);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  padding: 0;
  display: flex;

  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  justify-content: center;
  margin-right: 1em;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0);
  display: flex;
`;

const SubTitle = styled.div`
  color: rgb(92, 83, 83);
  font-size: 18px;
  min-height: 20px;
  margin-top: 26px;
  font-weight: 700;
`;
const Description = styled.div`
  min-width: 40%;
  line-height: 1.4;
  font-weight: 600;
  font-size: 1.2em;
  margin-top: 16px;
  margin-bottom:16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(249, 249, 249);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1rem;
`;
