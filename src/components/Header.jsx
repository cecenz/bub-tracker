import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { nappy, activity, sleep, media, feed } from '../common/themes'
import ActivityAdder from './ActivityAdder'
import { ReactComponent as PlusIcon } from '../svg/plus.svg'
import { ReactComponent as HouseIcon } from '../svg/house.svg'

const Header = ({ history }) => {
    const [isShowCards, setShowCards] = useState(false)

    return (
        <StyledHeader>
            <HeaderIcons>
                <PlusIcon
                    onClick={() => setShowCards(!isShowCards)}
                    style={{
                        width: '16px',
                        height: '16px',
                        cursor: 'pointer',
                    }}
                />
                <HouseIcon
                    onClick={() => history.replace('/bub-tracker/')}
                    style={{
                        width: '16px',
                        height: '16px',
                        cursor: 'pointer',
                    }}
                />
            </HeaderIcons>

            <TransitionGroup component={null}>
                {isShowCards && (
                    <CSSTransition classNames="dialog" timeout={750}>
                        <ContentContainer>
                            <ActivityAdder
                                setShowCards={setShowCards}
                                linkTo="nappy"
                                title="Nappy"
                                theme={nappy}
                            />
                            <ActivityAdder
                                setShowCards={setShowCards}
                                linkTo="feed"
                                title="Feed"
                                theme={feed}
                            />
                            <ActivityAdder
                                setShowCards={setShowCards}
                                linkTo="activity"
                                title="Activity"
                                theme={activity}
                            />
                            <ActivityAdder
                                setShowCards={setShowCards}
                                linkTo="sleep"
                                title="Sleep"
                                theme={sleep}
                            />
                            <ActivityAdder
                                setShowCards={setShowCards}
                                linkTo="media"
                                title="Media"
                                theme={media}
                            />
                        </ContentContainer>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </StyledHeader>
    )
}

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledHeader = styled.div`
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 #eee;
`

const HeaderIcons = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Header
