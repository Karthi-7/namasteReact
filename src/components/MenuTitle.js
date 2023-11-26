import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menudetails from "./Menudetails";

function MenuTitle({ title,length }) {
  return (
    <div className="">
      <div className="menu_title">
        <span>{title} ({length})</span>
        <MdKeyboardArrowDown />
      </div>
      
    </div>
  );
}

export default MenuTitle;
