import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
   - Logo
   - NavItem
*Body
   - Search
   - RestaurantContainer
     - RestaurantCard
       -  Image
       - Name of Restaurant
       - Rating
       - Cuisine
       - Delivery Time
*Footer
   - Copyright
   - Links
   - Address
   - Contact

*/
const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img
          className="Logo"
          src="https://png.pngtree.com/png-vector/20241229/ourmid/pngtree-quick-bite-burger-joint-with-transparent-background-png-image_14977846.png"
          alt="QuickBite Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biriyani, Bengali, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render React Element
root.render(<AppLayout />);
