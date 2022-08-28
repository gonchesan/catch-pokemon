import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    font-family: 'Saira Condensed';

    body{
         
         justify-content: center;
         align-items: center;
         margin: 0;
         min-height: 100vh;
         overflow: hidden;
     }
     p{
         line-height: 1.5;
     }

}
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`;

export const ModalContent = styled.div`
  border: 3px solid #fff;
  box-shadow: 0px 0px 0px 2px #262626, rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px, inset 0px 0px 0px 1px #131313;
  border-radius: 8px;
  transform: translateY(0vh);
  margin: auto;
  background-color: #eaeaea;
  width: 24rem;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;

  min-width: 70%;
  min-height: 70%;
  background-color: #eaeaea;
  color: #3a3a3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @-webkit-keyframes slideIn {
    from {
      transform: translateY(-25vh);
      opacity: 0;
    }
    to {
      transform: translateY(0vh);
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-25vh);
      opacity: 0;
    }
    to {
      transform: translateY(0vh);
      opacity: 1;
    }
  }
`;

export const ModalButtonClose = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  border: 3px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 6px, inset 0px 0px 0px 1px #131313;
`;

export const ModalHeader = styled.div`
  border-radius: 6px 6px 0 0;
  padding: 2px 16px;
  background-color: #484848;
  box-shadow: inset 0px 1px 0px 1px #131313, inset 0px -1px 0px 0px #c4c4c4;
  color: #fefefe;
  width: 100%;

  & h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 3px #3a3434;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 2.65rem;
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
