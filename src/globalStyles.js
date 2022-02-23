import styled, { createGlobalStyle } from "styled-components";

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
