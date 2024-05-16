import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

/**
 * Import middlewares
 */
import * as Middleware from './middlewares/Core';
/**
 * Import layouts
 */
import Layout from './layouts/base/Layout';
/**
 * Import error handlers
 */
import NotFound from './handlers/NotFound';

/**
 * Import all pages right here
 */
import Login from './pages/auths/Login';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';

/**
 * Initiate auth routes
 */
const authRoutes = [
  {
    path: '/login',
    element: <Login />,
  }
];

/**
 * Intitate dashboard routes
 */
const dashboardRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <Middleware.Authenticated render={<Dashboard />} />
      },
      {
        path: '/dashboard2/:id',
        element: <Middleware.Authenticated render={<Dashboard2 />} />
      }
    ]
  }
];

/**
 * Load all defined routes into main router
 * note: make sure route you made have same properties
 */
const routers = createBrowserRouter([
  ...authRoutes,
  ...dashboardRoutes,
  /**
   * Page error handler
   */
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return <RouterProvider router={routers} />
}

export default App;
