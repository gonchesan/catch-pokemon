import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const BackgroundLogin = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: red;
  object-fit: cover;
`;

export const LogoLogin = styled.img`
  width: 7rem;
  height: 7rem;
  margin-bottom: 3rem;
`;

export const OptionRegion = styled.label`
  position: relative;
  width: 17rem;
  height: 2.7rem;
  background-color: ${({ clicked }) => (clicked ? "#010101;" : "#f8f8f8")};
  color: ${({ clicked }) => (clicked ? "#f8f8f8;" : "#010101")};
  border-radius: 2rem;
  vertical-align: middle;
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: linear 0.3s;
  cursor: pointer;

  & img {
    margin: 0 2.5rem 0 1rem;
    width: 2.5rem;
    height: 2.5rem;
    filter: drop-shadow(0 0 2px #f8f8f8);
  }

  & input {
    visibility: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s;
    width: 4rem;
    height: 100%;
    background-color: ${({ clicked }) => (clicked ? "#2d1f1f" : "#f8f8f8")};
    clip-path: polygon(45% 0, 100% 0, 100% 50%, 100% 100%, 10% 100%);
    border-radius: 0 2rem 2rem 0;
  }
`;

export const MessageBox = styled.p`
  display: inline-block;
  position: relative;
  background-color: #333333;
  color: #e5e5e5;
  height: 2.3rem;
  width: 17rem;
  text-align: center;
  margin-top: 3rem;
  font-size: 1.2rem;
  line-height: 2.2rem;
  vertical-align: middle;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 100%;
    clip-path: polygon(75% 0, 100% 0, 100% 50%, 100% 100%, 10% 100%);
    background-color: #2d1f1f;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0, 55% 50%, 15% 100%, 0% 100%);

    background-color: #2d1f1f;
  }
`;