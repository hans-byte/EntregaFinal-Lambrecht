import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Category_rout from './routes/category'
import Detail_rout from "./routes/detail"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
  path:"/",
  element: <Root />
},

{
  path:"/category/:id",
  element: <Category_rout />
},

{
  path:"/item/:id",
  element: <Detail_rout />
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
