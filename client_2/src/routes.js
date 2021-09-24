import LOGIN_PAGE from './pages/login'
import GOODS_PAGE from './pages/goods'
import BASKET_PAGE from './pages/basket'
import TRACK_PAGE from './pages/track'
import {SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, TRACK_ROUTE} from './utils/consts';


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: BASKET_PAGE
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LOGIN_PAGE
    },
    {
        path: REGISTRATION_ROUTE,
        Component: LOGIN_PAGE
    },
    {
        path: SHOP_ROUTE,
        Component: GOODS_PAGE
    },
    {
        path: SHOP_ROUTE,
        Component: GOODS_PAGE
    },
    {
        path: SHOP_ROUTE + '/:id',
        Component: GOODS_PAGE
    },
    {
        path: BASKET_ROUTE,
        Component: BASKET_PAGE
    },
    {
        path: TRACK_ROUTE,
        Component: TRACK_PAGE
    },



]