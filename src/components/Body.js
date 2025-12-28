import Card,{Withpromot} from "./Card"; 
// import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineEvent from "../utils/useOnlineEvent";
import Usercontext from "../utils/Usercontex";

const Body = () => {
    const[resCard,setrescard]=useState([]);
    const[filterresCard,filtersetrescard]=useState([]);
    const[searchvalue,setsearch]=useState("");

    const{loginuser,setusername} =useContext(Usercontext);

    const Restaurantpro=Withpromot(Card)
   console.log(resCard);
useEffect(()=>{ 
  fetchdata();
 },[]);

const fetchdata= async()=>{
  const data=await fetch( "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" )
  const json=await data.json();

setrescard( json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
filtersetrescard(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}
const onlinestate=useOnlineEvent();

if(onlinestate===false){
  return <h1> check connection ur are offline !!! </h1>
}
  return (
    <div className="mx-2">
      
      <div className="flex p-2 m-4">

      
       <input className=" border-2 mx-2 rounded-2xl" 
       value={searchvalue}
        onChange={(e)=>{ setsearch(e.target.value)
        }}/>
     <button className="mx-4 bg-green-200 px-3 rounded-2xl" 
     onClick={() => { 
      const filterdata = resCard.filter(
      (res) => res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    filtersetrescard(filterdata);
  }} >Search </button>
      

        <button className="mx-4 bg-orange-200 px-3 rounded-2xl" 
        onClick={()=>{
            const filtered= resCard.filter((res) =>res.info.avgRating>4.5);
            filtersetrescard(filtered);
        }}> Best Rating </button>
      

        <button className="mx-4 bg-orange-200 px-3 rounded-2xl" 
        onClick={()=>{
            const open=resCard.filter((res)=> res.info.availability.opened==true);
            filtersetrescard(open);
          }}> Open restaurant  </button>
          
          <label>Live context </label>
          <input className="border border-black px-2 mx-2 " value={loginuser} onChange={(e)=>{
          setusername(e.target.value)}}/>
      </div>


      <div className="flex flex-wrap">
        {filterresCard.map((restaurant) => (
          //<Card key={restaurant.info.id}  resdata={restaurant} />
        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
          {restaurant.info.veg ?(<Restaurantpro resdata={restaurant} /> )
          :(< Card  resdata={restaurant}/>
          )}</Link>
        ))}

      </div>
    </div>
  );
};

export default Body;