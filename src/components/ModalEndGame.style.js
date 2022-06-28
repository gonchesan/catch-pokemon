import styled from 'styled-components';

/* The Modal (background) */
export const Modal = styled.div`
  /* Hidden by default */
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  border: 3px solid #fff;
  box-shadow: 0px 0px 0px 2px #262626, rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px, inset 0px 0px 0px 1px #131313;
  border-radius: 8px;
  transform: translateY(25vh);
  margin: auto;
  background-color: #eaeaea;
  width: 24rem;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;

  @-webkit-keyframes slideIn {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(25vh);
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(25vh);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  border-radius: 6px 6px 0 0;
  padding: 2px 16px;
  background-color: #484848;
  box-shadow: inset 0px 1px 0px 1px #131313, inset 0px -1px 0px 0px #c4c4c4;
  color: #fefefe;
  & h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 3px #3a3434;
  }
`;

export const ModalBody = styled.div`
  padding: 2px 16px;
  margin: 1rem;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50%);
  grid-column-gap: 10px;
`;

export const Column = styled.div`
  background-color: #393b43;
  color: #3a3a3a;
  border: 0.5px solid #393b43;
  border-radius: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & img {
    margin: 0px 12px;
    height: 24px;
    width: 24px;
  }
  & span {
    font-weight: 600;
    clip-path: polygon(15% 0%, 100% 0, 100% 100%, 1% 100%);
    background-color: #fefefe;
    width: 100%;
    padding: 8px 0px;
    text-align: center;
    height: 100%;
    font-size: 1.1rem;
    letter-spacing: 0.2em;
    border-radius: 0 24px 24px 0;
  }

  &:nth-child(3) {
    margin: 1rem 0px;
    background-color: #a44d43;
    grid-column: 1/3;
    border-radius: 0px;
    border: 3px solid #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 0px 2px #262626, rgba(0, 0, 0, 0.19) 0px 3px 10px,
      rgba(0, 0, 0, 0.23) 0px 2px 2px, inset 0px 0px 0px 1px #131313;

    & span {
      border-radius: 0px;
      clip-path: none;
    }
    & img {
      height: 18px;
    }
  }
`;

export const ModalButton = styled.button`
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
