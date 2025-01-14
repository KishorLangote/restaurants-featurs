import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Restaurants from './pages/Restaurants.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/restaurants",
    element: <Restaurants />
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)