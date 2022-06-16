import React from "react";
import { Menu, MenuList, Logo, MenuListItems } from "./nav.style";
import Container from "./Container";
import Link from "next/link";

const Nav = () => {
  return (
    <Container>
      <Menu>
        <MenuList style={{ marginLeft: 0 }}>
          <MenuListItems>
            <Link href="/">Home</Link>
          </MenuListItems>
          <MenuListItems>
            <Link href="/shop">Shop</Link>
          </MenuListItems>
          <MenuListItems>
            <Link href="/about">About</Link>
          </MenuListItems>
        </MenuList>

        <Logo>PEARLOT</Logo>

        <MenuList>
          <MenuListItems style={{ transform: "translateX(95px)" }}>
            Search
          </MenuListItems>
          <MenuListItems style={{ transform: "translateX(95px)" }}>
            <Link href="/cart">Cart </Link>
            <span>0</span>
          </MenuListItems>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Nav;
