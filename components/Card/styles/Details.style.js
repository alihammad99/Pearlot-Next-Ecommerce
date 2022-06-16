import styled from "styled-components";
import Image from "next/image";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3.438rem;
  margin: 6.938rem 0;
`;

export const LeftSide = styled.div`
  .a {
    grid-area: a;
  }
  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
  .d {
    grid-area: d;
  }
  display: grid;
  grid-template-areas:
    "b a a"
    "c a a"
    "d a a";
  width: 34.375rem;

  gap: 1.25rem;
`;

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 3;
  overflow: hidden;
`;

export const Photo = styled(Image)`
  object-fit: cover;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;
export const Price = styled.h6`
  font-size: 1.5rem;
  color: #000000;
  opacity: 0.6;
  font-family: Palash;
  margin-top: 1.1rem;
  font-weight: 400;
`;
export const Description = styled.p`
  font-size: 0.938rem;
  color: #000;
  font-weight: 300;
  opacity: 0.55;
  line-height: 1.563rem;
  width: 29.188rem;
  text-align: justify;
`;

export const Delivery = styled.p`
  font-size: 0.938rem;
  color: #000;
  font-weight: 300;
  line-height: 1.563rem;
  text-align: justify;
  opacity: 0.55;
  width: 29.188rem;

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Quantity = styled.div`
  span {
    font-weight: 500;
    font-size: 1rem;
    color: #000;
    opacity: 0.55;
    line-height: 2.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.563rem;
`;

export const Bg = styled.section`
  width: 100%;
  margin-bottom: 6rem;
  padding 7rem 0;
  background: #ECE2D6;
`;
