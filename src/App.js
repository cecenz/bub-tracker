import React, { Fragment, useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { yellow, blue, green, purple, pink } from './themes'
import { ReactComponent as PlusIcon } from './svg/plus.svg'
import { ReactComponent as HouseIcon } from './svg/house.svg'

import './globalStyles.css'

import Dashboard from './Dashboard'
import Card from './Card'
import Nappy from './Nappy/Nappy'
import Sleep from './Sleep/Sleep'

function App({ history }) {
    const [isShowCards, setShowCards] = useState(false)

    const onClick = () => setShowCards(!isShowCards)
    return (
        <Fragment>
            <Header>
                <HeaderIcons>
                    <PlusIcon
                        onClick={() => onClick()}
                        style={{
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                        }}
                    />
                    <HouseIcon
                        onClick={() => history.replace('/')}
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
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="nappy"
                                    title="Nappy"
                                    theme={blue}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="feed"
                                    title="Feed"
                                    theme={yellow}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="activity"
                                    title="Activity"
                                    theme={green}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="sleep"
                                    title="Sleep"
                                    theme={purple}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="media"
                                    title="Media"
                                    theme={pink}
                                />
                            </ContentContainer>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </Header>

            <Route exact path="/" component={Dashboard} />
            <Route
                exact
                path="/nappy"
                component={() => (
                    <ThemeProvider theme={blue}>
                        <Nappy history={history} />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/feed"
                component={() => (
                    <ThemeProvider theme={yellow}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/activity"
                component={() => (
                    <ThemeProvider theme={green}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/sleep"
                component={() => (
                    <ThemeProvider theme={purple}>
                        <Sleep history={history} />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/media"
                component={() => (
                    <ThemeProvider theme={pink}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
        </Fragment>
    )
}

const ContentContainer = styled.div`
    /* padding: 0 1rem; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
`

const Header = styled.div`
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 #eee;
`

const HeaderIcons = styled.div`
    display: flex;
    justify-content: space-between;
`

export default App
