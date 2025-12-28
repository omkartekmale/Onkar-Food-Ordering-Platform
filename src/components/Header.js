import { useContext, useState } from "react";
import {LOGO_URL} from "./../utils/constants"
import { Link } from "react-router-dom";
import useOnlineEvent from "../utils/useOnlineEvent";
import Usercontext from "../utils/Usercontex";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnlogin,setbtnlogin]=useState("login");
  const onlinestate=useOnlineEvent();

  const data=useContext(Usercontext);
  const cartitems=useSelector((state)=>state.cart.items)

  return (
    <div className="flex items-center justify-between px-6 py-2  bg-orange-100">
      <div className="">
        <img className="w-20" src={LOGO_URL} />
      </div>

        <ul className="flex items-center gap-6 font-medium">
          <li > Online Status:{onlinestate?"✅":"🔴"}</li>
          <li >
            <Link to="/" className="hover:text-orange-700">
            Home
            </Link></li>
          <li ><Link to="/about" className="hover:text-orange-700" >About</Link></li>
           <li ><Link to="/contact" className="hover:text-orange-700" >Contact</Link></li>
           <li >< Link to="/Grocery" className="hover:text-orange-700" > Grocery </Link> </li>
             <li >< Link to="/cart" className="hover:text-orange-700" >
             Card-{cartitems.length}Items</Link> </li>
          
          <button className="rounded-md bg-orange-500 px-4 py-1 text-white hover:bg-orange-600 transition" 
          onClick={()=>{
          btnlogin==="login"?setbtnlogin("logout"):setbtnlogin("login");
          }}> 
          {btnlogin}</button>

          <li className="">{data.loginuser}</li>

        </ul>
      </div>
   
  );
};

export default Header;

