import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { nappy, activity, sleep, media, feed } from './common/themes'

import './globalStyles.css'

import Header from './components/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Nappy from './Nappy/Nappy'
import Sleep from './Sleep/Sleep'

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route
                exact
                path="/nappy"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy />
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
                        <Sleep />
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

export default App
