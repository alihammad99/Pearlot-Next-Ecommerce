import styled from "styled-components";
import Image from "next/image";
import { keyframes } from "styled-components";

const animationButtonOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0)
    
  }
  40% {
    opacity: 0.6;
    transform: translateY(4rem)
  }
  100% {
    opacity: 0;
    transform: translateY(4rem)
  }
`;
const animationButtonIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem)
  }
  30% {
    opacity: 0.8;
    transform: translateY(4rem)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const CardTitle = styled.h5`
  font-weight: 400;
  font-size: 1.063rem;
  color: var(--salmon-red);
`;

export const CardPrice = styled.h6`
  font-weight: 300;
  font-size: 0.938rem;
  color: #000;
  opacity: 0.45;
`;

export const TitleContainer = styled.div`
  margin-top: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: flex-start;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.6rem;
  text-align: center;
  color: #f3e9e0;
  font-size: 1.3rem;
  font-weight: medium;
  transform: translateY(4rem);
  opacity: 0;
  background-color: var(--dark-red);
  border: none;
  cursor: pointer;

  animation-name: ${animationButtonOut};
  animation-duration: 1.2s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: forwards;
`;

export const Cards = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: flex-start;
`;

export const Item = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${Button} {
    animation-name: ${animationButtonIn};
    animation-duration: 0.7s;
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.4s ease-out;
  &:hover {
    transform: scale(1.085);
  }
`;
