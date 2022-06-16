import styled from "styled-components";
import Image from "next/image";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr;
  gap: 1.75rem;
  width: 100%;
  margin: 4rem 0;
`;

export const Border = styled.div`
  border: 1px solid hsla(10, 46%, 48%, 0.5);
  padding: 1.938rem 2.063rem;
`;

export const Item = styled.div`
  padding: 2.125rem 1.938rem;
  background-color: #f7f0e9;
  background-color: ${(props) => props.wide && "var(--dark-red)"};
  text-align: center;
  font-size: 30px;

  grid-column-start: ${(props) => props.wide && "1"};
  grid-column-end: ${(props) => props.wide && "3"};
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  .princeCollectionImg {
    transform: translateY(-55px);
  }

  .imageContainer {
    width: 628px;
    height: 335px;
    overflow: hidden;
  }

  .titleContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.875rem;
    min-width: 150px;
    align-items: center;

    .arrow-master-container {
      overflow: hidden;
      width: 30px;

      &:hover {
        .arrow-container {
          transition: transform 0.5s ease;
          transform: translateX(43px);
        }
      }
      .arrow-container {
        min-width: 70px;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        float: right;
        justify-content: flex-end;
      }
    }
  }
`;

export const CategImage = styled(Image)`
  border-radius: ${(props) =>
    props.fullRounded ? "15rem" : props.topRounded ? "15rem 15rem 0 0" : "0"};
  object-fit: cover;
  object-position: ${(props) => (props.top ? "top" : "bottom")};
  transition: all 0.7s ease-out;
  &:hover {
    border-radius: 0;
    transform: ${(props) => (props.wide ? "scale(1.04) translateY(-4rem)" : "scale(1.05)")};
  }
`;

export const Title = styled.h5`
  font-size: 0.933rem;
`;

export const Arrow = styled.img`
  height: 7px;
  width: 27px;
  min-width: 27px;
  min-height: 7px;
`;
