import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { nappy, sleep } from './themes'
// import { nappy, green, sleep, pink } from './themes'
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
                                    theme={nappy}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="feed"
                                    title="Feed"
                                    theme={nappy}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="activity"
                                    title="Activity"
                                    theme={nappy}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="sleep"
                                    title="Sleep"
                                    theme={sleep}
                                />
                                <Card
                                    setShowCards={setShowCards}
                                    linkTo="media"
                                    title="Media"
                                    theme={nappy}
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
