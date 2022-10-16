import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router';
import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const AppRouter = () => {
    const user = false;
    return user ? (
            <Switch>
                {privateRoutes.map(route =>
                    <Route key={route.path} {...route}/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        )
        : (
            <Switch>
                {publicRoutes.map(route =>
                    <Route key={route.path} {...route}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>

            </Switch>
        );
};

export default AppRouter;
