import styled from "styled-components";
import Image from "next/image";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.75rem;
`;

export const PhotoContainer = styled.div`
  height: 10.625rem;
  width: 10.625rem;
`;

export const Photo = styled(Image)`
  object-fit: cover;
`;

export const TextContainer = styled(Image)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ProductTitle = styled(Image)`
  font-size: 1.063rem;
  font-family: Palash;
  font-weight: 400;
`;

export const ProductCategory = styled(Image)`
  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 300;
  color: #000;
  opacity: 0.6;
`;

export const Price = styled(Image)`
  font-size: 0.938rem;
  font-family: Palash;
  font-weight: 400;
  color: #000;
`;

export const Quantity = styled.h6`
  font-size: 0.938rem;
  font-family: Palash;
  font-weight: 400;
  color: #000;
`;