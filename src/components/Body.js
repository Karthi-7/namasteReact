import { Swiggy_URL } from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus"
import RestaurantCard from "./RestaurantCard"
import React,{useState,useEffect} from "react"

const Body=()=>{
    const[restaurant,setRestaurant]=useState([])
    const[tempRestData,setTempResData]=useState([])
    const[searchText,setSearchText]=useState("")
    const{onlineStatus}=useOnlineStatus()

useEffect(()=>{
    fetchRestaurant()

},[])


const fetchRestaurant=async()=>{
  const data=await fetch(Swiggy_URL);
  const JSON=await data.json();
  console.log(JSON,"dataaaaa")
  setRestaurant(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setTempResData(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const filterRestaurant=(restaurant)=>{
    const filterRestaurant=tempRestData.filter((res)=>res?.info?.name.toLowerCase()?.includes(restaurant.toLowerCase() ))
    setRestaurant(filterRestaurant)
}

if(onlineStatus === false) 
return (
<h2>Kindly check your Internet connection, you're offline</h2>
)


    return(
        <div className="body">
        <div className="search-container">
          <div>
          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}  placeholder="Search Restaurant" />
          <button onClick={()=>filterRestaurant(searchText)}>Search</button>
          </div>
          <button onClick={()=>{
           const topRes= tempRestData.filter(res => res?.info?.avgRating > 4.2)
           setRestaurant(topRes)

          }}>Top Rated Restaurant</button>
        
        </div>
        <div className="restaurant-container">
     
            
            <RestaurantCard restaurant={restaurant}/>
        </div>

        </div>
    )
}

export default Body