import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Product = lazy(() => import('./product/Product'));
const Products = lazy(() => import('./products/Products'));
const Order = lazy(() => import('./order/Order'));
const Orders = lazy(() => import('./orders/Orders'));

const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/data-project/products',
      element: <Products />,
    },
    {
      path: 'apps/data-project/products/:productId/*',
      element: <Product />,
    },
    {
      path: 'apps/data-project/orders',
      element: <Orders />,
    },
    {
      path: 'apps/data-project/orders/:orderId',
      element: <Order />,
    },
    {
      path: 'apps/data-project',
      element: <Navigate to="products" />,
    },
  ],
};

export default ECommerceAppConfig;
