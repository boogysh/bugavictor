import React from "react";
import "./headerBurger.css";

export default function HeaderBurger({toggle, Animation}) {
  return (
    // <button className="menu_toggle menu_anim" onClick={toggle}>
    <button className={`menu_toggle ${Animation}`} onClick={toggle}>
      <div className="burger_container" >
        <div className="burger_element el-1"></div>
        <div className="burger_element el-2"></div>
        <div className="burger_element el-3"></div>
      </div>
    </button>
  );
}
