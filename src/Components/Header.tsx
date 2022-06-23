import React from "react";
import styled from "styled-components";
import Button from "./Button";
import headerImage from "../Assets/header.png";
import playCircle from "../Assets/play-circle.svg";
import star from "../Assets/star.svg";
import portrait1 from "../Assets/portrait-1.jpg";
import portrait2 from "../Assets/portrait-2.jpg";
import portrait3 from "../Assets/portrait-3.jpg";
import Avatar from "./Avatar";

const HeaderContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "header-left header-right";
  grid-template-columns: 1fr 1fr;
  height: 586px;
  width: 1240px;
  margin: 0 auto;
`;
const HeaderLeft = styled.div`
  grid-area: header-left;
`;
const HeaderRight = styled.div`
  grid-area: header-right;
`;
const HeaderTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #222224;
  line-height: 120%;
  padding-top: 46px;
`;
const HeaderSubtitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #797979;
  line-height: 130%;
  padding-top: 25px;
  width: 505px;
`;
const HeaderButtonGroup = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  button:first-of-type {
    margin-right: 40px;
  }
`;
const HeaderReview = styled.div`
  grid-template-areas: "review-left review-right";
  top: 0;
  left: 0;
`;
const HeaderReviewAvatar = styled.div`
  grid-area: review-left;
  position: relative;
`;
const HeaderReviewCustomer = styled.div`
  grid-area: review-right;
  position: relative;
  width: 145px;
  height: 45px;
  left: 140px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  color: #222224;
  .review-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
  }
  .review-star {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    display: inline-flex;
    padding-top: 6px;
    img:first-of-type {
      margin-right: 4px;
    }
    span:first-of-type {
      margin-right: 4px;
    }
    span:last-of-type {
      color: #9c9c9c;
    }
  }
`;
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderTitle>Don’t wanna Make you have A bad day</HeaderTitle>
        <HeaderSubtitle>
          Our job is delivering a delicious food with fast , free delivery and
          easy.
        </HeaderSubtitle>
        <HeaderButtonGroup>
          <Button primary name="Order now" size="lg" />
          <Button secondary name="How to order" size="lg" icon={playCircle} />
        </HeaderButtonGroup>
        <HeaderReview>
          <HeaderReviewAvatar>
            <Avatar src={portrait3} top="0" left="0" />
            <Avatar src={portrait2} top="0" left="30px" />
            <Avatar src={portrait1} top="0" left="60px" />
          </HeaderReviewAvatar>
          <HeaderReviewCustomer>
            <span className="review-text">Customer Review</span>
            <span className="review-star">
              <img src={star} alt="star" />
              <span>4.8</span>
              <span>(5k reviews)</span>
            </span>
          </HeaderReviewCustomer>
        </HeaderReview>
      </HeaderLeft>
      <HeaderRight>
        <img src={headerImage} alt="header" />
      </HeaderRight>
    </HeaderContainer>
  );
};
export default Header;
