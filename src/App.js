import React from 'react';
import { HomeDefault, StyleGuideButton, StyleGuideInput } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/button">
                    <StyleGuideButton />
                </Route>
                <Route path="/input">
                    <StyleGuideInput />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;