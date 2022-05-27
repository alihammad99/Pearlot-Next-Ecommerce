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

        <MenuList>
          <MenuListItems style={{ transform: 'translateX(95px)'}}>Search</MenuListItems>
          <MenuListItems style={{ transform: 'translateX(95px)'}}>
            Cart <span>0</span>
          </MenuListItems>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Nav;
