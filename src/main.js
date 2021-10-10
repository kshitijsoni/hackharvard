import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Study from "./pages/Study"
import Footer from './components/Footer';

function Main() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Study' exact component={Study} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main
