import styled from "styled-components";
import Image from "next/image";

export const Bg = styled.section`
  background: #ece2d6;
  padding: 7.063rem 0;
  margin: 6.125rem 0;
`;

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 1.688rem;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SecTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 400;
  margin-bottom: 3.938rem;
`;

export const PhotoContainer = styled.div`
  margin-bottom: 1.313rem;
  width: 22.75rem;
  height: 22.75rem;
  overflow: hidden;
`;

export const Photo = styled(Image)`
  object-fit: cover;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.075);
  }
`;

export const Title = styled.h5`
  font-size: 1.063rem;
  font-weight: 500;
`;

export const Price = styled.h6`
  font-size: 0.938rem;
  font-weight: 300;
  opacity: 0.45;
`;
