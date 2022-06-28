import styled from 'styled-components';

export const GithubCorner = styled.a`
  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  & svg {
    fill: #151513;
    color: #fff;
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    & .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;
