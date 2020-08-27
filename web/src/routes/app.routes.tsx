import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

function AppRoutes() {
    return (
        <article className="content">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='*' component={Home} />
            </Switch>
        </article>
    );
}

export default AppRoutes;