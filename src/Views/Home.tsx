import React from "react";
import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "nav content content  content content sidebar"
    "nav transaction  transaction transaction summary sidebar";
  gap: 1rem;
  padding: 1rem;
`;
const Nav = styled.nav`
  grid-area: nav;
`;
const Content = styled.div`
  grid-area: content;
`;
const Transaction = styled.div`
  grid-area: transaction;
`;
const Summary = styled.div`
  grid-area: summary;
`;
const Sidebar = styled.div`
  grid-area: sidebar;
`;
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Container>
      <Nav>nav</Nav>
      <Content>Main Content</Content>
      <Transaction>Transaction</Transaction>
      <Summary>Summary</Summary>
      <Sidebar>Sidebar</Sidebar>
    </Container>
  );
};
export default Home;
