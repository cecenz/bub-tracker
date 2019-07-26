import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'

import { iconTheme } from '../common/themes'

const Card = ({ theme, title, linkTo, setShowCards }) => {
    const iconStyles = {
        width: '30px',
        height: '30px',
        verticalAlign: '-webkit-baseline-middle',
    }

    const icon = iconTheme(title, iconStyles)

    return (
        <ThemeProvider theme={theme}>
            <ActivityAdder>
                <Link to={linkTo} onClick={() => setShowCards(false)}>
                    {icon}
                </Link>
            </ActivityAdder>
        </ThemeProvider>
    )
}

const ActivityAdder = styled.div`
    background-color: ${props => props.theme.color};
    padding: 0.75rem;
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

ActivityAdder.defaultProps = {
    theme: {
        color: '#000',
        shadow: '#222',
    },
}

export default Card
