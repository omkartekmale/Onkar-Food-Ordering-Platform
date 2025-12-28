import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rescategory from "./Rescategory";

const ResCard = () => {
  const [menudata, setmenudata] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5807719&lng=73.9787063&restaurantId=573081`
    );

    const json = await data.json();
    console.log(json);
    setmenudata(json.data);
  };

  //const {restaurantInfo} = menudata.cards[2].card.card.info;
  //const catrafry=data.filter((e)=>)
  return (
    <div className="text-center mx-auto">
      <h1 className="font-bold text-2xl my-6 ">Restaurant Name</h1>
      <h2 > price</h2>
      {/* .map((c)=><recat>*/}
     <h1 className=" my-8 text-4xl font-bold"> menu Items...</h1>
      <Rescategory/>
      <Rescategory/>
      <Rescategory/>
      
    </div>
  );
};

export default ResCard;
