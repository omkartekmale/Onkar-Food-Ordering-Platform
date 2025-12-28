import { useDispatch } from "react-redux"
import { additems } from "../utils/cardclise"

const ItemList=()=>{
    const dispatch=useDispatch()
    const handleclick=()=>{
        dispatch(additems("pizza"))
    }

    return(
        <div>
        {/* {ItemList.maps((item)=>(<div key={}))} */}

        <div className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="flex justify-between">
                <div className="mr-10"> 
                    <span className="font-bold ">item name</span>
                    <span>- $ XX </span>
                <p className="font-light">Description.. </p>
            </div>
            <button onClick={handleclick}> add </button>
            <div className="w-30 h-30 border-2 border-black object-cover">img</div>
            </div>
            
        </div>
        </div>
    )
}
export default ItemList;