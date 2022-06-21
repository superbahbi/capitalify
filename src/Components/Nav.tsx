import React from "react";
import styled from "styled-components";
import Logo from "../Assets/logo.png";
const NavContainer = styled.div`
  grid-area: nav;
  background-color: #fafbfc;
  border-right: 1px solid #3d7ae5;
`;
const NavTop = styled.div`
  height: 8rem;
`;
const NavMiddle = styled.div``;
const NavBottom = styled.div`
  position: absolute;
  bottom: 0;
`;
const NavLogo = styled.img`
  position: absolute;
  width: 120px;
  height: 32px;
  left: 32px;
  top: 48px;
`;

const NavList = styled.ul`
  list-style-type: none;
  position: absolute;
  width: 184px;
  height: 264px;
  left: -8px;
  top: 144px;
`;
const NavListItem = styled.li`
  a {
    display: block;
  }
`;
interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <NavContainer>
      <NavTop>
        <NavLogo src={Logo} />
      </NavTop>
      <NavMiddle>
        <nav className="">
          <NavList>
            <NavListItem>
              <a href="#">Home</a>
            </NavListItem>
            <NavListItem>
              <a href="#">Analytics</a>
            </NavListItem>
            <NavListItem>
              <a href="#">Wallets</a>
            </NavListItem>
            <NavListItem>
              <a href="#">Invoices</a>
            </NavListItem>
            <NavListItem>
              <a href="#">Accounts</a>
            </NavListItem>
            <NavListItem>
              <a href="#">Settings</a>
            </NavListItem>
          </NavList>
        </nav>
      </NavMiddle>
      <NavBottom>
        <p>Get Help</p>
        <p>Dark mode</p>
      </NavBottom>
    </NavContainer>
  );
};
export default Nav;
