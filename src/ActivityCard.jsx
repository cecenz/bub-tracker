import React from "react";
import styled from "styled-components";

const ActivityCard = ({ children }) => {
  return <StyledActivityCard>{children}</StyledActivityCard>;
};

const StyledActivityCard = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 12px #ddd;
  padding: 1rem;
  border-top: 6px solid ${props => props.theme.color};
  border-radius: 3px;
  margin: 1rem;
`;

export default ActivityCard;
