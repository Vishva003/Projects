
import Home from "./Home/Home";
import About from "./About/About";
import SignUp from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Cart from "./Cart/Cart";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Container from "./Container/Container";
import Supplier from "./Supplier/Supplier";

function App() {
  const routerdata=[

    {path:"/",
    element:<Home/>},
    {path:"/about",
    element: <About/> },
    {path:"/Signin",
    element:<Signin/>},
    {path:"/Signup",
    element:<SignUp/>},
  { path :"/container",
    element:<Container/>},
    {path:"/supplier",
  element:<Supplier/>},
  {path:"/cart",
element:<Cart/>}
    
   ]

  const myRoute= createBrowserRouter(routerdata)

  return (
     <>
     <RouterProvider router={myRoute} />

     </>
  );
}

export default App;
