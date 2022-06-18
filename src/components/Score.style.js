import styled from 'styled-components';

export const BadgeScore = styled.div`
  position: absolute;
  top: 1%;
  left: 2%;
  padding: 0.45rem 0.7rem;
  width: 106px;
  background-color: #fefefe;
  z-index: 55;
  border-radius: 28px;

  //Gray Decoration
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 100%;
    background-color: #4d4d4d;
    clip-path: polygon(0 0, 75% 0, 45% 100%, 0% 100%);
    border-radius: 28px;
    z-index: -1;
  }
`;
export const BadgeWrapper = styled.div`
  display: flex;
  align-content: center;
`;

export const BadgeIcon = styled.img`
  z-index: 99;
`;

export const BadgeText = styled.p`
  color: #1f1f1f;
  margin-left: 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
