import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { authRoutes, publicRoutes } from '../routes'
import {MAIN_ROUTE} from '../utils/consts'



const AppRoutes = () => {

    return (
        <Switch>
            {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={MAIN_ROUTE} />
        </Switch>
    )
}

export default AppRoutes;