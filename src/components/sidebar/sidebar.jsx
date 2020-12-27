import React from "react";
import logo from "../../assests/images/gradifylogo.png";
import routes from "../../routes";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="gradify" />
      </div>
      <div className="menu">
        <p>menu</p>
        <ul className="menu-bar">
          {routes.map((route) => {
            return route.show ? (
              <li>
                <Link to={route.layout+route.path}>{<route.icon color="white" size={15}/>}  <span className="menu-span">{route.name}</span></Link>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
