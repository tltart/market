import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { authRoutes, publicRoutes, adminRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        isAdmin: state.user.isAdmin,
        isAuth: state.user.isAuth,

    }
}


const AppRoutes = ({ isAdmin, isAuth }) => {
    return (
        <Switch>
            {isAdmin && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />)
            }
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />)
            }
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}

export default connect(mapStateToProps)(AppRoutes);