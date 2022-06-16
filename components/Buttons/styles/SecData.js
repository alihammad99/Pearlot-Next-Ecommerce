import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: ${(props) => props.hidden && "none"};
`;

export const Button = styled.button`
  background: none;
  padding: 5px 2px;
  border: 1px solid var(--salmon-red);
`;
