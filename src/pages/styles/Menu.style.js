import styled from 'styled-components';

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
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonLogin = styled.button`
  height: 2.65rem;
  padding: 0px 85px;
  margin-top: 0.5rem;
  font-size: 1.3rem;
  line-height: 2.2rem;
  vertical-align: middle;
  color: #ecf7fd;
  text-shadow: 1px 1px 2px rgba(48, 48, 48, 0.96);
  background: ${({ secondary }) =>
    secondary
      ? 'linear-gradient(180deg, #ee9a00 38.02%, #fdd12f 100%)'
      : 'linear-gradient(180deg, #3892DC 38.02%, #82BFDA 100%)'};
  border: 1.5px solid ${({ secondary }) => (secondary ? '#8c5000' : '#315670')};
  outline: none;
  box-shadow: ${({ secondary }) =>
    secondary
      ? '0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 0px 2px #8c5000, inset 1px 2px 1px 2px #ffd740'
      : '0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 0px 2px #366DA0, inset 1px 2px 1px 2px #7DBBE4'};
  border-radius: 13px;
  cursor: pointer;
`;

export const OptionRegion = styled.label`
  position: relative;
  width: 17rem;
  height: 2.7rem;
  background-color: ${({ clicked }) => (clicked ? '#010101;' : '#f8f8f8')};
  color: ${({ clicked }) => (clicked ? '#f8f8f8;' : '#010101')};
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
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s;
    width: 4rem;
    height: 100%;
    background-color: ${({ clicked }) => (clicked ? '#2d1f1f' : '#f8f8f8')};
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
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 2.2rem;
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 100%;
    clip-path: polygon(75% 0, 100% 0, 100% 50%, 100% 100%, 10% 100%);
    background-color: #2d1f1f;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0, 55% 50%, 15% 100%, 0% 100%);

    background-color: #2d1f1f;
  }
`;

export const StartButton = styled.button`
  width: 17rem;
  height: 2.65rem;
  margin-top: 1.7rem;
  font-size: 1.3rem;
  line-height: 2.2rem;
  vertical-align: middle;
  color: #ecf7fd;
  text-shadow: 1px 1px 0px #807f84;
  background: linear-gradient(180deg, #3892dc 38.02%, #82bfda 100%);
  border: 1.5px solid #315670;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 0px 2px #366da0,
    inset 2px 2px 1px 1px #7dbbe4;
  border-radius: 13px;
  cursor: pointer;
`;

export const FooterMenu = styled.div`
  position: fixed;
  bottom: 2%;
  width: 80%;
  display: flex;
  justify-content: space-between;

  & div {
    cursor: pointer;
    background: #262626;
    border: 2.5px solid #f8f8f8;
    box-shadow: 0px 0px 0px 2px #262626, inset 0px 0px 0px 2px #131313;
    height: 56px;
    width: 56px;
    border-radius: 6px;

    & img {
      padding: 6px;
      width: 100%;
      height: 100%;
    }
  }
`;
