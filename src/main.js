import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Explore from "./pages/Explore"

function Main() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/explore' exact component={Explore} />
            </Switch>
        </Router>
    )
}

export default Main
