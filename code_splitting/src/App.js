import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./nav";
import { Children } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Products from "./Products";

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children: [
      
        { path: "home", element: <Home/> },
        { path: "profile", element: <Profile/> },
        { path: "products", element: <Products/> },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
