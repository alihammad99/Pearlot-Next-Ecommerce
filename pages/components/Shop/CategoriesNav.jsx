import React from "react";
import Container from "../Layout/Container";
import { List, Item } from "./styles/CategoriesNav.style"

const CategoriesNav = () => {
  return (
    <Container>
      <List>
        <Item>Necklaces</Item>
        <Item>Earings</Item>
        <Item>Rings</Item>
        <Item>Braceletes</Item>
        <Item>Princess Collection</Item>
        <Item>Summer Collection</Item>
      </List>
    </Container>
  );
};

export default CategoriesNav;
