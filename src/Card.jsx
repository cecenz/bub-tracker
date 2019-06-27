import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
    background-color: ${props => props.theme.color};
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 #ccc;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover {
        box-shadow: 0px 4px 8px 0px #ccc;
        background-color: ${props =>
            props.theme.highlight && props.theme.highlight};
        transition: all 0.2s ease-in;
    }
`

StyledCard.defaultProps = {
    theme: {
        color: '#000',
        shadow: '#222',
    },
}

const Card = ({ theme, title, linkTo, setShowCards }) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledCard>
                <Link to={linkTo} onClick={() => setShowCards(false)}>
                    <h2>{title}</h2>
                    <p>Here is a bunch of content for the button</p>
                </Link>
            </StyledCard>
        </ThemeProvider>
    )
}

export default Card
