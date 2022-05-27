import styled from "styled-components";
import Image from "next/image";

export const CardImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.4s ease-out;
  &:hover {
    transform: scale(1.08);
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
export const Cards = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: flex-start;
`;
