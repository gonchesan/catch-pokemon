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
  /* position: fixed; */
  transform: translateY(25vh);

  /* top: 50%; */
  margin: auto;
  /* transform: translateX(55%); */
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
  box-shadow: inset 0px 1px 0px 1px #131313, inset 0px -1px 0px 2px #c4c4c4;
  color: #fefefe;
  & h2 {
    text-align: center;
    text-transform: uppercase;
    /* text-shadow: 0 1px 2px rgb(0 0 0 / 65%); */
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
  background-color: #777777;
  color: #fefefe;
  text-shadow: 0 1px 2px rgb(0 0 0 / 65%);
  border: 0.5px solid #000;
  border-radius: 2px;
  padding: 8px 12px;
  /* margin: auto; */
  display: flex;
  justify-content: space-around;
  & span {
    background-color: #6a6a6a;
    width: 100%;
  }

  &:nth-child(3) {
    margin: 1rem 0px;
    background-color: #a44d43;
    grid-column: 1/3;
  }
`;

export const ModalButton = styled.button`
  height: 2.65rem;
  margin-top: 1rem;
  font-size: 1.3rem;
  line-height: 2.2rem;
  vertical-align: middle;
  color: #ecf7fd;
  text-shadow: 1px 1px 2px rgba(48, 48, 48, 0.96);
  background: ${({ secondary }) =>
    secondary
      ? 'linear-gradient(180deg, #ee9a00 38.02%, #fdd12f 100%)'
      : 'linear-gradient(180deg, #A82028 38.02%, #C85048 100%)'};
  border: 1.5px solid #8c5000;
  box-shadow: ${({ secondary }) =>
    secondary
      ? '0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 0px 1px #8c5000, inset 1px 2px 1px 1px #ffd740'
      : '0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 0px 1px #862D22, inset 1px 2px 1px 1px #E25E4D'};
  border-radius: 13px;
  cursor: pointer;
`;
