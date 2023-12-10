import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Search from './routes/Search.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:name",
    element: <Search />,
  },
  {
    path: "/name/:name",
    element: <Search />,
  },
  {
    path: "/ingredient/:name",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
