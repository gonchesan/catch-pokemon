// Idea
// https://cdn.dribbble.com/users/392675/screenshots/6412752/day_75_copy_4x.png?compress=1&resize=768x576&vertical=top

import styled from 'styled-components';

export const ListHighScore = styled.ul`
  list-style: none;
  width: 100%;
`;
export const ResultHighScore = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightcoral; */
  border-bottom: 1px solid #c9c9c9;
  padding: 4px 0px;
  &:nth-last-child(1) {
    border-bottom: 1px solid transparent;
  }
  & span {
    margin: 0 1rem;
    font-weight: 600;
    & img {
      margin-right: 12px;

      height: 18px;
    }
  }
`;

export const DataHighScore = styled.div`
  width: 60%;
  & p {
    display: inline-block;
    font-size: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 10rem;
  }
  & img {
    width: 32px;
    height: 32px;
    background: #000;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;
