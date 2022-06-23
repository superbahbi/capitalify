import React from "react";
import ShoppingBag from "../Assets/shopping-bag.svg";
import styled from "styled-components";
import Button from "./Button";
const NavContainer = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-areas: "logo  . link . cart . register . login";
  grid-template-columns: 53px 1fr 387px 58px 48px 30px 128px 30px 128px;
  width: 1240px;
  height: 48px;
  font-family: "Montserrat";
  margin-top: 40px;
  margin-bottom: 60px;
  margin-left: 100px;
  margin-right: 100px;
`;
const NavLogo = styled.div`
  grid-area: logo;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 48px;
  color: #ec994b;
  vertical-align: middle;
`;
const NavItem = styled.li`
  display: inline-block;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  max-height: 48px;
  line-height: 48px;
  vertical-align: middle;
  margin-right: 40px;
  cursor: pointer;
  color: #222224;
  &:hover {
    box-shadow: inset 0 -2px 0 0 #ec994b;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
const NavList = styled.ul`
  grid-area: link;
  padding: 0;
  margin: 0;
`;

const NavCart = styled.div`
  grid-area: cart;
  border: 1px solid #f9f9f9;
  border-radius: 100%;
  background-color: #f9f9f9;
  text-align: center;
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  img {
    vertical-align: middle;
  }
`;

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <NavContainer>
      <NavLogo>F&D</NavLogo>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Menu</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
      <NavCart>
        <span className="helper"></span>
        <img src={ShoppingBag} alt="bag" />
      </NavCart>
      <Button secondary name="Register" area="register" size="lg" />
      <Button primary name="Login" area="login" size="lg" />
    </NavContainer>
  );
};
export default Nav;
