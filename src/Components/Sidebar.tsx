import React from "react";
import styled from "styled-components";
const SidebarContainer = styled.div`
  grid-area: sidebar;
  border: 1px solid red;
`;

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return <SidebarContainer>Sidebar</SidebarContainer>;
};
export default Sidebar;
