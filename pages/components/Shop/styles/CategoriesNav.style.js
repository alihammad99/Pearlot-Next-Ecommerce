import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 54.875rem;
  flex-direction: row;
  gap: 3.375rem;
  margin: 2.938rem auto;
`;

export const Item = styled.li`
  font-size: 1.063rem;
  opacity: 0.7;
  transition: all 0.05s ease;
  &:hover {
    opacity: 0.85;
  }
`;
