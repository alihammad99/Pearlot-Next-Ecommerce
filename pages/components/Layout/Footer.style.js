import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  margin-top: ${(props) => props.home && "-6rem"};
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => (props.mb ? "2.1rem" : "1.063rem")};
`;

export const Title = styled.h5`
  font-size: 1.063rem;
  color: #000;
  font-weight: 500;
  font-weight: ${(props) => (props.bold ? "600" : "500")};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-direction: ${(props) => props.row && "row"};
`;

export const Item = styled.li`
  font-size: 0.938rem;
  color: #000;
  opacity: 0.5;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.625rem;
  textarea:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  margin-top: 1.75rem;
  min-width: 12.25rem;
  padding: 0.25rem;
  font-size: 0.938rem;
  color: #000;
  font-weight: 400;
  transition: all 0.2s ease;

  border-top: none;
  border-left: none;
  border-right: none;
  font-family: Poppins;

  &:focus {
    outline: none;
    background: #eee0d3;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: none;
`;

export const Button = styled.button`
  padding-bottom: 0.25rem;
  margin-top: 2rem;
  font-family: Poppins;
  font-size: 0.938rem;
  color: #000;
  font-weight: 500;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    padding-bottom: 0.438rem;
  }
`;

export const Credits = styled.p`
  font-size: 1rem;
  color: #000;
  opacity: 0.3;
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
`;
