import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Study from "./pages/Study"
import Poloxamer from './pages/Poloxamer'
import Atom from "./pages/Atom"
import Volcano from './pages/Volcano';
import DiamondMolecule from './pages/DiamondMoleculeStructure';
import Dichlorohexane from './pages/Dichlorohexane';
import Footer from './components/Footer';
import './App.css';

function App() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Study' exact component={Study} />
                <Route path='/poloxamer' exact component={Poloxamer} />
                <Route path='/atom' exact component={Atom} />
                <Route path='/volcano' exact component={Volcano} />
                <Route path='/diamondmolecule' exact component={DiamondMolecule} />
                <Route path='/dichlorohexane' exact component={Dichlorohexane} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
