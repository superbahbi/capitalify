import React from "react";
import styled from "styled-components";
import { Services1, Services2, Services3 } from "../Assets/Images";
const ServicesContainer = styled.div`
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
const ServicesSubText = styled.div`
  grid-area: subText;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ec994b;
  height: 17px;
`;
const ServicesText = styled.div`
  grid-area: text;

  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #222224;
  height: 44px;
`;
const ServicesGroup = styled.div`
  grid-area: group;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
`;
const ServicesItem = styled.div`
  width: 255px;
  height: 381px;
`;
const ServicesItemText = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  padding-top: 28.55px;
  color: #222224;
`;
const ServicesItemSubText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  text-align: center;
  padding-top: 16px;
  margin: auto;
  justify-self: center;
  align-self: center;
  color: #222224;
  opacity: 0.7;
  width: 228px;
`;

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <ServicesContainer>
      <ServicesSubText>- Our Services -</ServicesSubText>
      <ServicesText>Our serve just for you</ServicesText>
      <ServicesGroup>
        <ServicesItem>
          <img src={Services1} alt="services1" width="255px" />
          <ServicesItemText>Delivery Food</ServicesItemText>
          <ServicesItemSubText>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </ServicesItemSubText>
        </ServicesItem>
        <ServicesItem>
          <img src={Services2} alt="services2" width="255px" />
          <ServicesItemText>Easy to order</ServicesItemText>
          <ServicesItemSubText>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </ServicesItemSubText>
        </ServicesItem>
        <ServicesItem>
          <img src={Services3} alt="services3" width="255px" />
          <ServicesItemText>Fastest delivery</ServicesItemText>
          <ServicesItemSubText>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </ServicesItemSubText>
        </ServicesItem>
      </ServicesGroup>
    </ServicesContainer>
  );
};
export default Services;
