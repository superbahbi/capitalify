import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  background: #222224;
  height: 300px;
  display: grid;
  grid-template-areas:
    "logo product policies company contact delivery"
    ". . footer footer . .";
  grid-template-columns:
    "336px 1fr 1fr 1fr 1fr 1fr"
    ". . 20px 20px . .";
  color: #ffffff;
  padding-top: 95px;
`;
const FooterLogo = styled.div`
  grid-area: logo;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #ec994b;
  padding-left: 100px;
`;
const FooterProduct = styled.div`
  grid-area: product;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  div {
    margin-top: 16px;
    a {
      color: #e2e2e2;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
    }
  }
`;
const FooterPolicies = styled.div`
  grid-area: policies;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  div {
    margin-top: 16px;
    a {
      color: #e2e2e2;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
    }
  }
`;
const FooterCompany = styled.div`
  grid-area: company;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  div {
    margin-top: 16px;
    a {
      color: #e2e2e2;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
    }
  }
`;
const FooterContact = styled.div`
  grid-area: contact;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  div {
    margin-top: 16px;
    a {
      color: #e2e2e2;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
    }
  }
`;
const FooterDelivery = styled.div`
  grid-area: delivery;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  div {
    margin-top: 16px;
    a {
      color: #e2e2e2;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-decoration: none;
    }
  }
`;
const FooterCopyright = styled.div`
  grid-area: footer;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterContainer>
      <FooterLogo>F&D</FooterLogo>
      <FooterProduct>
        <div>Our Product</div>
        <div>
          <a href="#">Support</a>
        </div>
        <div>
          <a href="#">Guide</a>
        </div>
      </FooterProduct>
      <FooterPolicies>
        <div>Terms & policies</div>
        <div>
          <a href="#">Terms of Service</a>
        </div>
        <div>
          <a href="#">Privacy Policy</a>
        </div>
      </FooterPolicies>
      <FooterCompany>
        <div>Company</div>
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">Contact Us</a>
        </div>
      </FooterCompany>
      <FooterContact>
        <div>Contact</div>
        <div>
          <a href="#">+1 800 888-8888</a>
        </div>
        <div>
          <a href="#">bahbi@bahbi.net</a>
        </div>
      </FooterContact>
      <FooterDelivery>
        <div>Food Delivery</div>
        <div>
          <a href="#">ABC Delivery</a>
        </div>
        <div>
          <a href="#">XYZ Delivery</a>
        </div>
      </FooterDelivery>
      <FooterCopyright>
        © Peoplepower 2020 - All Rights Reserved
      </FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;
