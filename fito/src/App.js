
import Home from "./Home/Home";
import About from "./About/About";
import SignUp from "./Signup/Signup";
import Signin from "./Signin/Signin";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const routerdata=[

    {path:"/",
    element:<Home/>},
    {path:"/about",
    element: <About/> },
    {path:"/Signin",
    element:<Signin/>},
    {path:"/Signup",
    element:<SignUp/>}
    
   ]

  const myRoute= createBrowserRouter(routerdata)

  return (
     <>
     <RouterProvider router={myRoute} />

     </>
  );
}

export default App;
