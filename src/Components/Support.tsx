import React from "react";
import styled from "styled-components";
import { Gojek, Grab, Dana, Shopee, Zomato } from "../Assets/Images";
const SupportContainer = styled.div`
  display: grid;
  grid-template-areas:
    "text"
    "image";
  height: 120px;
`;
const SupportText = styled.div`
  grid-area: text;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #9c9c9c;
  text-align: center;
`;
const SupportImage = styled.div`
  grid-area: image;
  grid-template-columns: repeat(5, 1fr);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
  return (
    <>
      <SupportContainer>
        <SupportText>Support by:</SupportText>
        <SupportImage>
          <img src={Gojek} alt="test" height="60" width="90" />
          <img src={Grab} alt="test" height="46.6" width="120" />
          <img src={Dana} alt="test" height="35.2" width="120" />
          <img src={Shopee} alt="test" height="52.8" width="120" />
          <img src={Zomato} alt="test" height="120" width="120" />
        </SupportImage>
      </SupportContainer>
    </>
  );
};
export default Support;
