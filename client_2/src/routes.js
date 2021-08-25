import LOGIN_PAGE from './pages/login'
import GOODS_PAGE from './pages/goods'
import BASKET_PAGE from './pages/basket'
import MAIN_PAGE from './pages/shop'

import {MAIN_ROUTE, LOGIN_ROUTE, GOODS_ROUTE, BASKET_ROUTE} from './utils/consts';


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
        path: GOODS_ROUTE,
        Component: GOODS_PAGE
    },
    {
        path: MAIN_ROUTE,
        Component: MAIN_PAGE
    }

]