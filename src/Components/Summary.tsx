import React from "react";
import styled from "styled-components";
const SummaryContainer = styled.div`
  grid-area: summary;
  border: 1px solid red;
`;

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = ({}) => {
  return <SummaryContainer>Summary</SummaryContainer>;
};
export default Summary;
