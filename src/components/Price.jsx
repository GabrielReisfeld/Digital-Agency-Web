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
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin: 40px;
    margin-bottom: 10px;
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
        <PriceCard
          price="10"
          type="Basic"
          desc="10 Hand-Crafted Templates"
          sup="Email Support"
          pre="5 PreBuilt Websites"
          plug="Standard Plugins"
        />
        <PriceCard
          price="20"
          type="Premium"
          desc="50 Hand-Crafted Templates"
          sup="Exclusive Support"
          pre="10 PreBuilt Websites"
          plug="Premium Plugins"
        />
        <PriceCard
          price="30"
          type="Advance"
          desc="100 Hand-Crafted Templates"
          sup="VIP Support"
          pre="50+ PreBuilt Websites"
          plug="Advance Plugins"
        />
      </Bottom>
      <AnimatedShapes />
    </Container>
  );
};

export default Price;
