import React from "react";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Container, Wrapper } from "./style";

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    </Container>
  );
};

export default Root;
