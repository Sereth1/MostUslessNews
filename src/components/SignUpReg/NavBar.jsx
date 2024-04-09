import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/text.css";
import "../../css/navbar.css";

function NavBar({ user }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollTimer, setScrollTimer] = useState(null);

  const getStyle = (itemName) => ({
    textDecoration: hoveredItem === itemName ? "underline" : "none",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      setScrollTimer(
        setTimeout(() => {
          setIsScrolled(false);
        }, 150)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [isScrolled, scrollTimer]);

  return (
    <div className={`cont pixelated navB ${isScrolled ? "scrolled" : ""}`}>
      <Link
        to="/home"
        style={getStyle("hello")}
        onMouseEnter={() => setHoveredItem("hello")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <h1>Hello: {user}</h1>
      </Link>

      <Link
        to="/home"
        style={getStyle("main")}
        onMouseEnter={() => setHoveredItem("main")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <h1>Main</h1>
      </Link>

      <Link
        to="/loggedIn/:user"
        style={getStyle("user")}
        onMouseEnter={() => setHoveredItem("user")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <h1>User</h1>
      </Link>

      <Link
        to="/"
        style={getStyle("exit")}
        onMouseEnter={() => setHoveredItem("exit")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <h1>Exit</h1>
      </Link>
    </div>
  );
}

export default NavBar;
