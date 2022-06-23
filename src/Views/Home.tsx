import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Support from "../Components/Support";

import styled from "styled-components";
const Container = styled.div`
  width: 1440px;
  display: grid;
  grid-template-areas:
    "nav"
    "content";
  gap: 2rem;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Support />
    </Container>
  );
};
export default Home;
