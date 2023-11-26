import React from "react";
import { SWIGGY_IMAGE_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function Menudetails({ item }) {

  const dispatch=useDispatch()
  const handleAddItem=(item)=>{
    dispatch(addItem(item))

   }
  return (
    <div>
      {item.map((menu) => (
        <div className="menudetails_container">
          <div className="content">
            <p className="food_name">{menu?.card?.info?.name}</p>
            <p>&#8377;{menu?.card?.info?.price / 100}</p>
            <p className="desc">{menu?.card?.info?.description}</p>
          </div>
          <div className="right_container">
            <div className="menu_items_img">
              <img src={SWIGGY_IMAGE_URL + menu?.card?.info?.imageId} alt="" />
            </div>
            <button className="menu-btn"
            onClick={()=>handleAddItem(menu?.card?.info)}
            >Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menudetails;
