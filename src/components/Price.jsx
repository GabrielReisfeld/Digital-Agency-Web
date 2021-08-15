import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: 100%;
`;

const Up = styled.div`
  text-align: center;
  margin: 100px;
  @media only screen and (max-width: 480px) {
    margin: 40px;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Price = () => {
  return (
    <Container>
      <Up>
        <Title>Prices</Title>
      </Up>
      <Bottom>
        <PriceCard price="10" type="Basic" />
        <PriceCard price="20" type="Premium" />
        <PriceCard price="30" type="Advance" />
      </Bottom>
      <AnimatedShapes />
    </Container>
  );
};

export default Price;
