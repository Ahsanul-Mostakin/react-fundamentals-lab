import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "../components/menu";

const ProfilepPage = () => {
  return (
    <div>
      <Menu />
      <h1>This is Profile Page</h1>
    </div>
  );
};

export default ProfilepPage;
