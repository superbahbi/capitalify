import React from "react";
import styled from "styled-components";
import {
  Trending1,
  Trending2,
  Trending3,
  Trending4,
  Trending5,
  Trending6,
  Trending7,
  Star,
} from "../Assets/Images";
const TrendingContainer = styled.div`
  display: grid;
  grid-template-areas:
    "subText"
    "text"
    "group";
  height: 542px;
  font-family: "Montserrat";
  font-style: normal;
  text-align: center;
  padding-top: 110px;
`;
const TrendingSubText = styled.div`
  grid-area: subText;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ec994b;
  height: 17px;
`;
const TrendingText = styled.div`
  grid-area: text;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #222224;
  height: 44px;
`;
const TrendingGroup = styled.div`
  grid-area: group;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: 381px;
  //   display: grid;
  margin: auto;
`;
const TrendingImage = styled.div<TrendingImageProps>`
  background: url(${(p) => p.backgroundImage});
  background-size: cover;
  width: 420px;
  height: 420px;
  border-radius: 16px;
`;
const TrendingPrice = styled.div`
  position: relative;
  top: 20px;
  left: 270px;
  width: 121px;
  height: 59px;
  padding: 10px 30px;
  border: 1px solid #ffffff;
  border-radius: 56px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
`;
const TrendingTitle = styled.div`
  position: relative;
  font-size: 32px;
  line-height: 100%;
  color: #fff;
  text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  top: 270px;
  left: -85px;
`;
const TrendingRating = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 100%;
  color: #fff;
  text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  top: 282px;
  left: -130px;
`;
interface TrendingProps {}
interface TrendingImageProps {
  backgroundImage: string;
}

const Trending: React.FC<TrendingProps> = () => {
  return (
    <TrendingContainer>
      <TrendingSubText>- Popular Delivery -</TrendingSubText>
      <TrendingText>Trending food</TrendingText>
      <TrendingGroup>
        <TrendingImage backgroundImage={Trending3}>
          <TrendingPrice>$20</TrendingPrice>
          <TrendingTitle>Special Deal</TrendingTitle>
          <TrendingRating>
            5 <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </TrendingRating>
        </TrendingImage>
      </TrendingGroup>
    </TrendingContainer>
  );
};
export default Trending;
