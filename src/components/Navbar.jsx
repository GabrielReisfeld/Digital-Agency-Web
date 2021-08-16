import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.a`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
  &:hover {
    color: darkblue;
  }
`;

const Instagram = styled.a`
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Digital Agency</Logo>
          <Menu>
            <MenuItem href="#feature">Features</MenuItem>
            <MenuItem href="#service">Services</MenuItem>
            <MenuItem href="#pricing">Pricing</MenuItem>
            <MenuItem href="#contact">Contact</MenuItem>
          </Menu>
        </Left>
        <Instagram href="https://www.instagram.com/" target="_blank">
          <InstagramIcon
            style={{
              fontSize: "50px",
            }}
          />
        </Instagram>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
