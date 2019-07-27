import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import './globalStyles.css'

import { nappy, activity, sleep, media, feed } from './common/themes'
import Header from './components/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Nappy from './Nappy/Nappy'
import Sleep from './Sleep/Sleep'
import Activity from './Activity/Activity'
import Measurement from './Activity/Measurement'
import Bath from './Activity/Bath'
import Appointment from './Activity/Appointment'

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route
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
                    <ThemeProvider theme={activity}>
                        <Activity />
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
            <Route path="/appointment" exact component={Appointment} />
            <Route path="/bath" exact component={Bath} />
            <Route path="/measurement" exact component={Measurement} />
        </Router>
    )
}

export default App
