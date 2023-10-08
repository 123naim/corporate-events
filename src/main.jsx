import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SingleDataDetails from './Components/SingleDataDetails';
import AuthProvider from './Provider/AuthProvider';
import Registration from './Pages/Registration';
import PrivateRoute from './Routes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category',
        element: <PrivateRoute><Category></Category></PrivateRoute>
      },
      {
        path: '/carddetail/:id',
        element: <PrivateRoute><SingleDataDetails></SingleDataDetails></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
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
