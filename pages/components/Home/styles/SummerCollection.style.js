import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  background-color: #ece2d6;
  padding: 8rem 0;
  margin: 10rem 0;
`;

export const SCContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 7.813rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 29rem;
  height: 39.375rem;
  border-top-right-radius: 16rem;
  border-top-left-radius: 16rem;
  overflow: hidden;
`;
export const SCImage = styled(Image)`
  object-fit: cover;
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
  align-items: left;
`;

export const Paragraph = styled.p`
  width: 29.188rem;
  line-height: 1.563rem;
  text-align: justify;
  color: #000000;
  opacity: 0.5;
  font-size: 0.938rem;
  font-weight: 300;
`;

export const SCTitle = styled.h3`
  line-height: 3.438rem;
  font-size: 2.188rem;
`;
