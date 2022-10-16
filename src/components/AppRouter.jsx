import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router';
import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import {AuthContext} from '../context';

const AppRouter = () => {
    const {auth} = useContext(AuthContext);
    const [user] = useAuthState(auth);

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
