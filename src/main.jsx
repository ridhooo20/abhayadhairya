import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Abhaya.jsx'
import erorPage from "./404/404.jsx"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
const router = createBrowserRouter([
  {
    path: "/Abhaya",
    element: <App/>
  },

  {
    path:"/",
    errorElement: <erorPage/>,
  },

  {
    path: "/Loginabhaya",
    element: <Login/>
  },

  {
    path: "/Dashboard",
    element: <Dashboard/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
