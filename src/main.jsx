import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Pages/UserAutentication/AuthProvider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';



const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
      
  </React.StrictMode>,
)
