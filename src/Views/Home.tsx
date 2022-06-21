import React from "react";
import Nav from "../Components/Nav";
import Content from "../Components/Content";
import Transaction from "../Components/Transaction";
import Summary from "../Components/Summary";
import Sidebar from "../Components/Sidebar";

import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav content content content content sidebar"
    "nav transaction transaction transaction summary sidebar";
  gap: 3rem;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Container>
      <Nav />
      <Content />
      <Transaction />
      <Summary />
      <Sidebar />
    </Container>
  );
};
export default Home;
