import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledCard = styled.div`
  background-color: ${props => props.theme.color};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 #ccc;
  margin: 2rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: 2px 6px 15px 2px #ccc;
    background-color: ${props =>
      props.theme.highlight && props.theme.highlight};
    transition: all 0.2s ease-in;
  }
`;

StyledCard.defaultProps = {
  theme: {
    color: "#000",
    shadow: "#222"
  }
};

const Card = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <h2>Heading</h2>
        <p>Here is a bunch of content for the button</p>
      </StyledCard>
    </ThemeProvider>
  );
};

export default Card;    