import styled from "styled-components";

export const Button = styled.button`
  padding: 0.625rem 2rem;
  border: 1px solid var(--salmon-red);
  font-size: 1rem;
  color: #000000;
  opacity: 0.6;
  font-family: Poppins;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(200, 0, 0, 0.12);
  }
`;
