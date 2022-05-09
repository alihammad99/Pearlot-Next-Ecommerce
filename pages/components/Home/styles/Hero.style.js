import styled from "styled-components";
import Image from "next/image";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  height: 31.25rem;
  margin-top: 4.5rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  place-items: flex-end;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 47%;
  justify-content: space-between;
  place-items: flex-start;
  place-self: flex-end;
`;

export const HeroPhotoContainer = styled.div`
  min-height: 20.875rem;
  min-width: 15.338rem;
  height: 31.25rem;
  width: 23rem;
  border-top-left-radius: 50rem;
  border-top-right-radius: 50rem;
  overflow: hidden;
`;

export const HeroPhoto = styled(Image)`
  position: fixed;
  object-fit: cover;
  transform: scale(1.5) translate(-43px, -60px);
  //   object-position: 100% 70%;
  margin: 0 auto;
`;

export const Bio = styled.p`
  text-align: justify;
  font-size: 0.813rem;
  color: #000;
  line-height: 1.313rem;
  opacity: 0.35;
  width: 196px;
  font-weight: 300;
`;

export const Title = styled.h1`
  text-align: justify;
  font-size: 5.625rem;
  line-height: 1.313rem;
`;
