import React from 'react'
import styled from 'styled-components'

const ActivityCardWrapper = ({ children }) => {
    return <StyledActivityCardWrapper>{children}</StyledActivityCardWrapper>
}

const StyledActivityCardWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 12px #ddd;
    padding: 1rem;
    border-top: 6px solid ${props => props.theme.color};
    border-radius: 3px;
    margin: 1rem;
`

export default ActivityCardWrapper
