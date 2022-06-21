import React from "react";
import styled from "styled-components";
const TransactionContainer = styled.div`
  grid-area: transaction;
  border: 1px solid red;
`;

interface TransactionProps {}

const Transaction: React.FC<TransactionProps> = ({}) => {
  return <TransactionContainer>Transaction</TransactionContainer>;
};
export default Transaction;
