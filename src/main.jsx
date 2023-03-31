import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Category_rout from './routes/category'
import Detail_rout from "./routes/detail"
import Cart_rout from './routes/cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomProvider from './context';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDSeLvyV1XlAAs5DXRDfPNT5Ys1wbgjcvI",
  authDomain: "ebook-store-hanslambrecht.firebaseapp.com",
  projectId: "ebook-store-hanslambrecht",
  storageBucket: "ebook-store-hanslambrecht.appspot.com",
  messagingSenderId: "254633132969",
  appId: "1:254633132969:web:141c1d99bfa5457a14bab8"
};
const app = initializeApp(firebaseConfig);

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

{
  path:"/cart",
  element: <Cart_rout />
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
)
