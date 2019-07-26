import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { nappy, activity, sleep, media, feed } from './themes'
import { ReactComponent as PlusIcon } from './svg/plus.svg'
import { ReactComponent as HouseIcon } from './svg/house.svg'

import './globalStyles.css'

import Dashboard from './Dashboard'
import ActivityAdder from './ActivityAdder'
import Nappy from './Nappy/Nappy'
import Sleep from './Sleep/Sleep'

function App({ history }) {
    const [isShowCards, setShowCards] = useState(false)

    const onClick = () => setShowCards(!isShowCards)
    return (
        <Router>
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
            </Header>

            <Route exact path="/" component={Dashboard} />
            <Route
                exact
                path="/nappy"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy history={history} />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/feed"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/activity"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/sleep"
                component={() => (
                    <ThemeProvider theme={sleep}>
                        <Sleep history={history} />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/media"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
        </Router>
    )
}

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
