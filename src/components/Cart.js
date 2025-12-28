import { useDispatch } from "react-redux";
import { clearitem } from "../utils/cardclise";

const Cart=()=>{
    const dispatch=useDispatch();

    const handleitem=()=>{
        dispatch(clearitem())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className=" text-2xl font-bold">Cart</h1>
            <button onClick={handleitem} className="border-2 border-black m-2 p-2 ">Clear Items</button>

        </div>
    )
    
}
export default Cart;