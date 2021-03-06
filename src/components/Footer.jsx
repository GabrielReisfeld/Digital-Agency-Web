import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

const Container = styled.div`
  height: 10%;
  background-color: crimson;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
const ListItem = styled.a`
  margin-right: 20px;
  color: lightgray;
  text-decoration: none;
  &:hover {
    color: darkblue;
  }
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;
const Copyright = styled.a`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem href="#home">Home</ListItem>
          <ListItem href="#feature">Features</ListItem>
          <ListItem href="#service">Services</ListItem>
          <ListItem href="#pricing">Pricing</ListItem>
        </List>
        <Copyright
          href="https://github.com/GabrielReisfeld/Website-React"
          target="_blank"
        >
          <GitHubIcon
            style={{
              fontSize: "50px",
              color: "black",
            }}
          />
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
