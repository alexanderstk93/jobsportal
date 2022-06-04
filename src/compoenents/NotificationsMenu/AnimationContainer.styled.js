import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

const AnimationContainer = styled.div`
  animation: 0.6s ${keyframes`${fadeInRight}`};
  padding: 0.5rem;
  position: absolute;
  right: 0;
  top: 4.5rem;
  width: 28%;
  background-color: rgb(52, 75, 94);
  border-radius: 0.5rem;
  min-height: 15rem;
  max-height: 25rem;
  overflow-y: auto;
  /* -webkit-box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5);
  box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5); */
  @media only screen and (max-width: 1020px) {
    width: 100%;
    padding: 0.3rem;
    min-height: 15rem;
    max-height: 20rem;
  }
`;

export { AnimationContainer };
