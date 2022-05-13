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
  min-height: 25rem;
  /* -webkit-box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5);
  box-shadow: -4px 4px 16px -1px rgba(255, 255, 255, 0.5); */
`;

export { AnimationContainer };
