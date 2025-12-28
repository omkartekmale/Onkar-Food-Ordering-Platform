import { useState } from "react";
import ItemList from "./ItemList";

const Rescategory=()=>{
    const [showItems,setahowitema]=useState(false);

    const handleClick=()=>{
        setahowitema(!showItems);
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span className="font-bold text-bg"> titel</span>
                <span>  ⬇️</span>
                </div>
                {showItems && <ItemList />}          
              </div>
        </div>
    )
}
export default Rescategory;