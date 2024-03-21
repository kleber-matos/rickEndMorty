/** @format */

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

`;

export const Logo = styled.img`
  width: 20vw;
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 1rem;
  width: 15vw;
  border-radius: 3px;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const BoxCard = styled.div`
  /* border: solid; */
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 60vw;
`;

export const Container = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Buscas = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  text-align: center;
`;
