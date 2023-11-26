import React,{useState} from 'react'
import { MENU_IMG} from '../utils/constant'
import { useParams } from 'react-router-dom'
import MenuShimmer from './MenuShimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import MenuTitle from './MenuTitle'
import Menudetails from './Menudetails'

function RestaurantMenu() {

    const {resId}=useParams()
    const {resMenu,resName}=useRestaurantMenu(resId)
    const [toggle,setToggle]=useState({})

    const handleToggle=(cardId)=>{
      console.log("cardid",cardId)

      setToggle((prev)=>({
        // ...prev,
        [cardId]:!prev[cardId] || false
      

      }))
    }


    const filteredResMenu=resMenu.filter((menu)=>menu?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log("filteredmenu",filteredResMenu[0]?.card?.card?.itemCards)
    if(filteredResMenu.length === 0) return <MenuShimmer />
  return (
    <div>
    <div className='res_heading'>
    <h1>{resName}</h1>
    </div>
  
    {
      filteredResMenu.map((menu)=>(
        <div className='menuCard' key={menu?.card?.card?.title}  >
        <div onClick={() => handleToggle(menu?.card?.card?.title)}>
        <MenuTitle title={menu?.card?.card?.title} length={menu?.card?.card?.itemCards.length} />
        </div>
          {toggle[menu?.card?.card?.title] && <Menudetails item={menu?.card?.card?.itemCards}/>}
        </div>
      ))

    }
    </div>
  )
}

export default RestaurantMenu
