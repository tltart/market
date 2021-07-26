import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import Product from './pages/Product';
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicRoutes = [
    {
        path: LOGIIN_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    }
];