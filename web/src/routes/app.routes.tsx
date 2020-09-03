import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import Search from '../pages/Search';

function AppRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/receitas/:subId/:recId?" component={Recipes} />
            <Route path="/pesquisar/:search?" component={Search} />
            <Route path='*' component={Home} />
        </Switch>
    );
}

export default AppRoutes;