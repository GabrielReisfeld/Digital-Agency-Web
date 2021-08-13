import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 50%;
`;
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AdressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let´s Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AdressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Send} />
            <Text>contact@greis.com</Text>
            <Text>sales@greis.com</Text>
          </AdressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
