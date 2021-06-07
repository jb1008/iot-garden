import React from "react";
import styled from "styled-components/native";
import Text from "../components/Text";

export default function SignInScreen() {
  return (
    <Container>
      <Main>
        <Text>Welcome back.</Text>
      </Main>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 192px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  left: -100px;
  top: -20px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: --50px;
`;

const StatusBar = styled.StatusBar``;
