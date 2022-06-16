import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const PrimaryButton = styled.button`
  height: 50px;
  text-align: center;
  width: 150px;
  background: none;
  border-radius: 50%;
  border: 1px solid var(--salmon-red);
  font-size: 1.063rem;
  color: #3d3a38;
  font-family: Poppins;
  font-weight: 400;
`;

export const Arrow = styled(Image)`
  padding: 0;
  maring: 0;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  left: -47px;
  top: 50%;
  transform: translateY(-60%);
  transition: all 0.3s ease;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 150;
  overflow: visible;
  background: none;
  position: relative;
  width: 9.375rem;
  transform: ${(props) => props.left && "translateX(42px)"};
  &:hover ${ArrowContainer} {
    left: -50px;
  }
`;


