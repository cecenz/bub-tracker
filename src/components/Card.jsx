import React from 'react'
import styled from 'styled-components'

const Card = ({ children }) => {
    return <StyledCard>{children}</StyledCard>
}

const StyledCard = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 12px #ddd;
    padding: 1.5rem;
    border-top: 6px solid ${props => props.theme.color};
    border-radius: 3px;
    margin: 1rem;
`

export default Card
