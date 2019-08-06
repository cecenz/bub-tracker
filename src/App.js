import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './globalStyles.css'

import { nappy, activity, sleep, feed } from './common/themes'
import Dashboard from './components/Dashboard/Dashboard'
import Nappy from './Nappy/Nappy'
import Feed from './Feed/Feed'
import Sleep from './Sleep/Sleep'
import Activity from './Activity/Activity'
import Measurement from './Activity/Measurement'
import Bath from './Activity/Bath'
import Appointment from './Activity/Appointment'

const App = () => {
    return (
        <Router>
            <Route exact path="/bub-tracker/" component={Dashboard} />
            <Route
                path="/bub-tracker/nappy"
                component={() => (
                    <ThemeProvider theme={nappy}>
                        <Nappy />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/bub-tracker/feed"
                component={() => (
                    <ThemeProvider theme={feed}>
                        <Feed />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/bub-tracker/activity"
                component={() => (
                    <ThemeProvider theme={activity}>
                        <Activity />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/bub-tracker/sleep"
                component={() => (
                    <ThemeProvider theme={sleep}>
                        <Sleep />
                    </ThemeProvider>
                )}
            />
            <Route
                path="/bub-tracker/media"
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
