import styled from 'styled-components';

export const StopwatchWrapper = styled.div`
  position: absolute;
  top: 1%;
  right: 18%;
  z-index: 15;
  background-color: #2e323b;
  box-shadow: 0px 0px 5px 2px #2e323b;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 1%;
  right: 18%;
  z-index: 15;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 4px solid #585d63;
  border-left-color: #32a7ed;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  z-index: 55;
`;

export const NumbersWrapper = styled.div`
  & span {
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ecf7fd;
    text-shadow: 1px 1px 0px #807f84;
  }
`;
