import React from "react";
import styled from "styled-components";
const ContentContainer = styled.div`
  grid-area: content;
  border: 1px solid red;
`;

interface ContentProps {}

const Content: React.FC<ContentProps> = ({}) => {
  return <ContentContainer>Overview</ContentContainer>;
};
export default Content;
