import React from "react";
import darkThemeIcon from "../assets/dark.svg";
import lightThemeIcon from "../assets/light.svg";

const Header = ({ theme, setTheme }) => {
  const toggleThemehandler = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div className="header-container">
      <nav>
        <li>_Home</li>
        <li>_Work</li>
        <li>_Contact</li>
      </nav>
      <button className="theme-btn" onClick={() => toggleThemehandler()}>
        <img
          src={theme === "dark" ? darkThemeIcon : lightThemeIcon}
          alt="icon"
        />
      </button>
    </div>
  );
};

export default Header;
