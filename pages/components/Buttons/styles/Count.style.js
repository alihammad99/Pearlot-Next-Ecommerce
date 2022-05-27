import styled from "styled-components";
import Image from "next/image";

export const CountContainer = styled.button`
  padding: 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid var(--salmon-red);
  background: none;
  width: 5.25rem;
  align-items: center;
`;

export const Number = styled.input`
  font-weight: 500;
  font-size: 1rem;
  color: #000000;
  opacity: 0.6;
  background: none;
  width: 2.188rem;
  font-family: Poppins;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  border: 0;
  outline: 0;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.488rem;
`;

export const Increase = styled(Image)`
  cursor: pointer;
`;
export const Decrease = styled(Image)`
  cursor: pointer;
`;
