import { useEffect, useState } from "react"

const useOnlineEvent=()=>{
    const[onlinestatus,setonlinestatus]=useState(true);

    useEffect(()=>{
    window.addEventListener("online",()=>{
        setonlinestatus(true);
    })
    window.addEventListener("offline",()=>{
        setonlinestatus(false);
    })
    },[])

    return onlinestatus;

}

export default useOnlineEvent;