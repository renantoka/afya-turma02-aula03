import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/pages/Home';
import Login from './views/pages/Login';
import SignUp from './views/pages/SignUp';

const Routes: React.FC = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />

            </Switch>
        </BrowserRouter>

    );
}

export default Routes;