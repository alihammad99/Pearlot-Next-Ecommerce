import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 1.813rem;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 15.625rem;

`;
export const MenuListItems = styled.li`
  font-size: 1rem;
  color: #000;
  opacity: 0.5;
  transition: all .2s ease;
  // margin: 0 1.156rem;
  min-width: 90px;

  &:hover {
    opacity: 0.6;
    font-weight: 500;
  }
  span { 
    padding: 0.2px 5px;
    margin: 0;
    border-radius: 50%;
    border: 1px solid #000;
    font-size: 0.8rem;
  }
`;


export const Logo = styled.h1`
 font-size: 1.25rem;
 align-self: center;
`;
