import React from "react";
import { Menu, MenuList, Logo, MenuListItems } from "./nav.style";
import Container from "./Container";

const Nav = () => {
  return (
    <Container>
      <Menu>
        <MenuList style={{marginLeft: 0}}>
          <MenuListItems>Home</MenuListItems>
          <MenuListItems>Shop</MenuListItems>
          <MenuListItems>About</MenuListItems>
        </MenuList>

        <Logo>PEARLOT</Logo>

        <MenuList style={{ justifyContent: 'flex-end' }}>
          <MenuListItems>Search</MenuListItems>
          <MenuListItems style={{marginRight: 0}}>
            Cart <span>0</span>
          </MenuListItems>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Nav;
