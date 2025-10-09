import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/"
          >
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/product"
          >
            Product
          </NavLink>{" "}
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/profile"
          >
            Profile
          </NavLink>{" "}
          |{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/notfound"
          >
            Not Found
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
