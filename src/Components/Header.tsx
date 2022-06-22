import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.div`
  grid-area: content;
  height: 586px;
  max-width: 1240px;
  margin: 0 auto;
  border: 1px solid #e6e6e6;
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return <HeaderContainer>Content</HeaderContainer>;
};
export default Header;
