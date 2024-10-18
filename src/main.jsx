import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
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
    path: "about",
    element: <About />,
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
