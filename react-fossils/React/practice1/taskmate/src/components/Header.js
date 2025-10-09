import Logo from "../assets/Rocket.jpg";
import "./header.css";

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
    </div>
  );
};

export default Header;
