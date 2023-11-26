import { useEffect, useState } from "react"
import { SWIGGY_RESTAURANT_MENU } from "./constant"

const useRestaurantMenu=(resId)=>{
    const [resMenu,setResMenu]=useState([])
    const [resName,setResName]=useState("")


    useEffect(()=>{
        fetchMenu()

    },[])

    const fetchMenu=async()=>{
        const data=await fetch(SWIGGY_RESTAURANT_MENU+resId)
        const json=await data.json();
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setResName(json?.data?.cards[0]?.card?.card?.info?.name)
        //console.log(json?.data?.cards[0]?.card?.card)
        //setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    }

    return {resMenu,resName}
}
export default useRestaurantMenu