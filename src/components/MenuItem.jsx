import React from "react";
import { NavLink } from "react-router-dom";

import './MenuItem.css'

const MenuItem = props => {

    const activeClassName = "menu-item-link active"
    
    // function handleClick(data) {
    //     console.log(data.name)
    //     const list = document.querySelector(data.name)
    //     console.log(list) 
        
    // }

    function activeClass(isActive) {
        if (isActive) {
            return "menu-item-area active"
        } else {
            return "menu-item-area"
        }
    }

    // onClick={e => handleClick(e.target)}
    return (
        <li className={activeClass(props.active)} > 
            <NavLink to={props.link} className={({ isActive }) =>
              isActive ? activeClassName : "menu-item-link"}>
                <span className="menu-item-icon">
                    <ion-icon name={props.icon}></ion-icon>
                </span>
                <span className="menu-item-text">
                    {props.text}
                </span>
            </NavLink>
        </li>
    )
}

export default MenuItem