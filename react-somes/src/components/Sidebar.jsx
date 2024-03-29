import React, { useState } from 'react';
import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaPlay,
    FaGraduationCap,
    FaPhone
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/academics",
            name:"Academics",
            icon:<FaGraduationCap/>
        },
        {
            path:"/events",
            name:"Events",
            icon:<FaPlay/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaPhone/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/*<h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>*/}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;