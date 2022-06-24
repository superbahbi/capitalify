import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Support from "../Components/Support";
import Services from "../Components/Services";
import Trending from "../Components/Trending";
import Comment from "../Components/Comment";
import Review from "../Components/Review";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import styled from "styled-components";
const Container = styled.div`
  width: 1440px;
  display: grid;
  grid-template-areas:
    "nav"
    "content";
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Support />
      <Services />
      <Trending />
      <Comment />
      <Review />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Home;
