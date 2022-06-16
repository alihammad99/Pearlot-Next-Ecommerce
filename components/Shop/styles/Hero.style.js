import styled from "styled-components";
import Image from "next/image";

export const PhotoContainer = styled.div`
  width: 71.688rem;
  height: 22.75rem;
  margin-top: 7.938rem;
  overflow: hidden;
`;

export const Photo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(-55px) 
`;
