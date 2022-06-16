import React from "react";
import Container from "./Container";
import {
  FooterContainer,
  ColContainer,
  Title,
  List,
  Item,
  Form,
  Input,
  Button,
  Credits,
} from "./Footer.style";
const Footer = ({ home }) => {
  return (
    <Container>
      <FooterContainer home={home}>
        <ColContainer>
          <Title>Jewellery</Title>
          <List>
            <Item>Rings</Item>
            <Item>Earings</Item>
            <Item>Necklaces</Item>
            <Item>Bracelets</Item>
          </List>
        </ColContainer>
        <ColContainer>
          <Title>General</Title>
          <List>
            <Item>About</Item>
            <Item>Shipping</Item>
            <Item>Terms & Conditions</Item>
            <Item>Privacy Policy</Item>
          </List>
        </ColContainer>
        <ColContainer mb>
          <ColContainer>
            <Title>Contact Us</Title>
            <List>
              <Item>sayhi@pearlot.com</Item>
            </List>
          </ColContainer>
          <ColContainer>
            <Title>Follow Us</Title>
            <List row>
              <Item>Instagram</Item>
              <Item>Facebook</Item>
            </List>
          </ColContainer>
        </ColContainer>

        <ColContainer>
          <Title bold>
            Sign up for our newsletter and
            <br />
            get a 10% discount
          </Title>
          <Form>
            <Input type="email" placeholder="Your email"></Input>
            <Button type="submit" bold>
              Submit
            </Button>
          </Form>
        </ColContainer>
      </FooterContainer>
      <Credits>&copy; 2021 pearlot. All rights reserved. </Credits>
    </Container>
  );
};

export default Footer;
