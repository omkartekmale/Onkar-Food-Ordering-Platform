import React ,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ResCard from "./components/ResCard";
import Usercontext from "./utils/Usercontex";
import Error from "./components/Error";
import { Provider } from "react-redux";
import UserStore from "./utils/UserStore";
import Cart from "./components/Cart";

const Grocery=lazy(() => import("./components/Grocery"));


const AppLayout = () => {
  const[username,setusername]=useState("");

useEffect(()=>{
  const data={
    name:"omkar",
  };
  setusername(data.name)
},[])

  return (
    <Provider store={UserStore}>
    <Usercontext.Provider value={{loginuser:username, setusername }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Usercontext.Provider>
    </Provider>
  );
};

const AppRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>

      },
       {
        path:"/Grocery",
        element:<Suspense fallback={"loding..."} ><Grocery/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
      ,{
        path:"/restaurants/:resid",
        element:<ResCard/>
      },{
      path:"/cart",
      element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>);
