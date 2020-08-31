import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/receitas/:subId/:recId?" component={Recipes} />
            <Route path='*' component={Home} />
        </Switch>
    );
}

export default AppRoutes;