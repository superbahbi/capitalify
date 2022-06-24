import React from "react";
import styled from "styled-components";
import { ReviewerAvatar, ReviewImage, Star } from "../Assets/Images";
const ReviewContainer = styled.div`
  width: 1068px;
  display: grid;
  grid-template-areas: "image text text";
  margin: auto;
`;
const ReviewImageTag = styled.img`
  grid-area: image;
  width: 435px;
  height: 636.96px;
  padding-right: 121px;
  font-family: "Montserrat";
  font-style: normal;
`;
const ReviewTextTag = styled.div`
  grid-area: text;
  align-self: center;
  .review-text-subTitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ec994b;
  }
  .review-text-title {
    padding-top: 20px;
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #222224;
  }
  .review-text-reviewer {
    display: inline-block;
    padding-left: 13px;

    .review-text-name {
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      color: #000000;
    }
    .review-text-occupation {
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      color: #b7b4b4;
    }
  }

  .review-text-content {
    padding-top: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #b5b5b5;
  }
  .review-text-rating {
    padding-top: 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #222224;
  }
`;
interface ReviewProps {}

const Review: React.FC<ReviewProps> = () => {
  return (
    <ReviewContainer>
      <ReviewImageTag src={ReviewImage} alt="Review image" />
      <ReviewTextTag>
        <div className="review-text-subTitle">- What they are say -</div>
        <div className="review-text-title">What they are says about us</div>
        <div>
          <img src={ReviewerAvatar} />
          <span className="review-text-reviewer">
            <div className="review-text-name">Eric Smith</div>
            <div className="review-text-occupation">Food Vlogger</div>
          </span>
        </div>

        <div className="review-text-content">
          “All service provided is so perfect and fast, and im so happy to order
          from this company”
        </div>
        <div className="review-text-rating">
          5.0 <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
      </ReviewTextTag>
    </ReviewContainer>
  );
};
export default Review;
