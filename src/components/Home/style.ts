import styled, { createGlobalStyle } from "styled-components";
import bg from '../../assets/astroo.webp'

interface Color {
  color: string
}

// RESET GLOBAL CSS APPLICATION
export const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Montserrat', 'Rowdies';
  }
  #root {
    background-color: #000;
  }
  a {
    text-decoration: none;
  }
`;

// CONTAINER APP
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: bottom;
  box-shadow: inset #000 0px 0px 100px 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  animation: AnimationBackground 3s ease-in-out !important;

  @media (max-width: 756px) {
    background-size: cover;
    background-position: center !important;
    animation: AnimationBackground 3s ease-in-out !important;
    -webkit-animation: AnimationBackground 3s ease-in-out !important;
  }

  @keyframes AnimationBackground {
    0% {
      background-position: center;
      transform: scale(.90);
    }

    100% {
      background-position: bottom;
      transform: scale(1);
    }
  }
`;

// CONTENT APP
export const Content = styled.div`
  position: absolute;
  top: 10%;
  width: 90%;
  height: 100px;
  height: 90%;
  left: 5%;
  border: solid 1px #ffffff6e;
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  backdrop-filter: blur(2px);
  z-index: 0;
`;

// LINK URL APP
export const Link = styled.a<Color>`
  background-color: ${({color}) => color} !important;
  color: #333;
  font-weight: 700;
  border-radius: 5px;
  width: 85%;
  text-align: center;
  padding: 15px 0 !important;
  position: absolute;
  bottom: 15px;

  &:hover {
    color: #33333380;
    background-color: #8ec7ff80;
  }
`;

// TEXT TITLE APP
export const ContentTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1 !important;
`;
export const SubText = styled.span`
  text-align: center;
  color: #FFF;
`;

export const Title = styled.h3`
  background-color: transparent;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 28px;
  text-align: center;

  @media (max-width: 758px) {
    font-size: initial;
  }
`;

export const SubTitle = styled.h2`
  background-color: transparent;
  font-size: 120px;
  font-weight: 700;
  color: transparent;
  letter-spacing: 28px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #FFF;
  
  @media (max-width: 758px) {
    -webkit-text-stroke-width: 1px;
    font-size: 40px;
  }
`;

// CAROUSEL CARDS APPLICATION
export const Cards = styled.div`
  border-radius: 20px;
  z-index: 1;
  box-shadow: 0px 5px 20px 5px #00000054;
  background: linear-gradient(to bottom,#0c1b3a, #0c1b3a,transparent);
  width: 100%;
  height: 100%;
  padding: 20px !important;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px !important;
`;

export const CardImage = styled.div<Color>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 4px ${({color}) => color};
  z-index: 1;

  @media (max-width: 758px) {
    background: transparent;
  }
`;

export const Image = styled.img`
  width: 96%;
  height: 96%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #FFF;
`;
export const Icon = styled.i<Color>`
  background: transparent;
  border-radius: 50%;
  color: ${({color}) => color};
  font-size: 40px;
`;

export const CardIcons = styled.div`
  margin-top: 15px !important;
`;

export const Icons = styled.i`
  font-size: 18px;
  background: transparent;
  margin: 0 2px !important;
  color: #ffff59;
`;

export const TextCard = styled.span`
  color: #fff;
  margin-top: 15px !important;
  font-size: 18px;
  font-weight: 700;
`;