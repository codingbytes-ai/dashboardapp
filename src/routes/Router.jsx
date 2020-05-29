import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import HealthPage from '../pages/HealthPage.jsx'

const Routes = () => {
    return (
        <Switch>

            <Route path="/health">
                <HomePage />
            </Route>

            <Route path="/">
                <HealthPage />
            </Route>
        </Switch>
    )
}

export default Routes