import React from "react";
import "../../css/header.css";

const Header = ({ text }) => {
  return (
    <div className="moveIt pixelated">
      <div className="header ">{text}</div>
    </div>
  );
};

export default Header;
