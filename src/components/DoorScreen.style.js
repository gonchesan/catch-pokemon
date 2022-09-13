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
  border: ${({ loadingDone }) =>
    loadingDone ? '9px solid #eb4d4d' : '9px solid #585d63'};
  border-top: 9px solid #eb4d4d;
  border-bottom: 9px solid #eb4d4d;
  margin: -40px 0 0 -40px;
  background-color: ${({ loadingDone }) =>
    loadingDone ? '#f0f0f0' : '#2e323b'};
  box-shadow: 0px 0px 0px 10px #f0f0f0, 0px 0px 0px 10px #f0f0f0,
    0px 0px 0px 24px #615e69;
  padding: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: ${({ loadingDone }) => (loadingDone ? '-20%' : '50%')};
  left: 50%;
  transform: ${({ loadingDone }) =>
    loadingDone ? 'translate(-50%, -150%)' : 'translate(-50%, -50%)'};
  z-index: 999;
  transition: all 0.98s;
  transition-delay: 0.3s;
  animation: spinLoader 2s ease-in-out infinite;

  @keyframes spinLoader {
    0% {
      transform: scale(1, 1);
    }
    10% {
      transform: scale(1, 1);
    }
    15% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
      border-top: 9px solid #585d63;
      border-bottom: 9px solid #585d63;
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
      border-top: 9px solid #eb4d4d;
      border-bottom: 9px solid #eb4d4d;
    }
  }
`;
