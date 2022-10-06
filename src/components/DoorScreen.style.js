import styled from 'styled-components';

export const DoorWrapper = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  min-width: 300px;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 350px 350px;
  background-position: 50px 200px;
  transition: all 0.5s ease-in 0.3s;
  z-index: ${({ loadingDone }) => (loadingDone ? '1' : '66')};

  &::before {
    content: '';
    width: 100%;
    top: ${({ loadingDone }) => (loadingDone ? '-450px' : '0px')};
    background-color: #eb4d4d;
    position: absolute;
    height: calc(50% - 9px);
    border-bottom: 18px solid #615e69;
    transition: all 1s;
    transition-delay: 0.3s;
  }
  &::after {
    content: '';
    width: 100%;
    background-color: #f8f8f8;
    position: absolute;
    top: ${({ loadingDone }) => (loadingDone ? '750px' : 'calc(50% + 9px)')};
    height: calc(50% - 2px);
    border-top: 2px solid #615e69;
    background-image: radial-gradient(#615e69 35px, transparent 35px),
      radial-gradient(black 35px, transparent 36px),
      radial-gradient(#615e69 47px, transparent 47px);
    background-size: 96px 96px;
    background-position: 50% -57px;
    background-repeat: no-repeat;
    transition: all 1s;
    transition-delay: 0.3s;
  }
`;

export const DoorLoader = styled.div`
  background-color: ${({ loadingDone }) =>
    loadingDone ? '#f0f0f0' : '#9a8e8e'};
  box-shadow: 0px 0px 0px 10px #615e69;
  padding: 0;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  position: absolute;
  top: ${({ loadingDone }) => (loadingDone ? '-20%' : '50%')};
  left: 50%;
  transform: ${({ loadingDone }) =>
    loadingDone ? 'translate(-50%, -150%)' : 'translate(-50%, -50%)'};
  z-index: 999;
  transition: all 0.98s;
  transition-delay: 0.3s;

  .big-circle {
    background-color: rgba(0, 0, 0, 0);
    border: ${({ loadingDone }) =>
      loadingDone
        ? '5px solid transparent'
        : '5px solid rgba(187, 16, 45, 0.9)'};
    opacity: 0.9;
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    box-shadow: 0 0 35px #eb4d4d;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    animation: spinPulse 1s infinite linear;
  }
  .small-circle {
    background-color: rgba(0, 0, 0, 0);
    border: ${({ loadingDone }) =>
      loadingDone
        ? '5px solid transparent'
        : '5px solid rgba(187, 16, 45, 0.9)'};
    opacity: 0.9;
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 0 0 15px #ef0404;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    top: -65px;
    animation: spinCircle 1s infinite linear;
  }

  // Animations...
  @keyframes spinPulse {
    0% {
      transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #2187e7;
    }
    50% {
      transform: rotate(145deg);
      opacity: 1;
    }
    100% {
      transform: rotate(-320deg);
      opacity: 0;
    }
  }
  @keyframes spinCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
