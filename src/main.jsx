import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import SingleDataDetails from './Components/SingleDataDetails';
import AuthProvider from './Provider/AuthProvider';
import Registration from './Pages/Registration';
import PrivateRoute from './Routes/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';
import Sponsor from './Pages/Sponsor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/carddetail/:id',
        element: <PrivateRoute><SingleDataDetails></SingleDataDetails></PrivateRoute>
      },
      {
        path: '/sponsor',
        element: <PrivateRoute><Sponsor></Sponsor></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
