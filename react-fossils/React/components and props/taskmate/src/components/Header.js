import React from "react";
import Logo from "../assests/logo.jpg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <a href="/">Home</a>
    </header>
  );
};

export default Header;
