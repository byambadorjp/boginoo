import React from 'react';
import { HomeDefault, Login, SignUp, StyleGuideButton, StyleGuideInput } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AuthUserProvider } from './providers/auth-user-provider';

import './style/main.scss';

const App = () => {
    return (
        <AuthUserProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/button">
                        <StyleGuideButton />
                    </Route>
                    <Route path="/input">
                        <StyleGuideInput />
                    </Route>
                </Switch>
            </Router>
        </AuthUserProvider>
    )
}

export default App;