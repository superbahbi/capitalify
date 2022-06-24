import React from "react";
import styled from "styled-components";
import { NewsletterImage } from "../Assets/Images";
const NewsletterContainer = styled.div`
  display: grid;
  grid-template-areas: "image form";
  grid-template-columns: 660px 1fr;
  margin-top: 127px;
  background-color: #ec994b;
  height: 544px;
`;
const NewsletterImageTag = styled.img`
  grid-area: image;
  width: 460.01px;
  align-self: center;
  justify-self: center;
`;
const NewsletterText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  width: 542px;
  .newsletter-header {
    margin-top: 122px;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    color: #ffffff;
  }
  .newsletter-sub-header {
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #ffffff;
  }
  .newsletter-input {
    margin-top: 24px;
    width: 542px;
    height: 65px;

    input {
      width: 380px;
      height: 65px;
      border-radius: 8px;
      border: 1px solid #ffffff;
      padding-left: 16px;
      ::placeholder {
        color: #bfbfbf;
        padding-left: 16px;
      }
    }
    button {
      margin-left: 24px;
      color: #ffffff;
      padding: 22px 42px;
      gap: 10px;
      width: 114px;
      height: 65px;
      background: #222224;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <NewsletterContainer>
      <NewsletterImageTag src={NewsletterImage} />
      <NewsletterText>
        <div className="newsletter-header">
          Get more discount if you order from us
        </div>
        <div className="newsletter-sub-header">
          Join with us then you must have get a discount and get promo from us
          to you , enjoy and happy to order.
        </div>
        <div className="newsletter-input">
          <input type="text" placeholder="Your email address" />
          <button>Get</button>
        </div>
      </NewsletterText>
    </NewsletterContainer>
  );
};
export default Newsletter;
