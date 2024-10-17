import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Principles from './pages/Principles.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'

import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
    
  },
  {
    path: "principles",
    element: <Principles />,
    errorElement: <ErrorPage/>,
    
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
       <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
