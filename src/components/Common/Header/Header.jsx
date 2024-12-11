import React, { useState, useEffect } from "react";
import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";

const Header = () => {
  const navigate = useNavigate()

/*   const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
 */
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false  
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();  
    } else {
      setLight(); 
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      setLight();  
    } else {
      setDark();   
    }
    setDarkMode(!darkMode); 
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return <header className="navbar">
    <h1 className="logo">Coin<span style={{ color: "var(--blue)" }}>Track .</span></h1>
    <div className="links">
      <Switch checked={darkMode} onClick={() => changeMode()} />
      <Link to="/">
        <p className="link">Home</p>
      </Link>
      <Link to="/compare">
        <p className="link">Compare</p>
      </Link>
      <Link to="/watchlist">
        <p className="link">WatchList</p>
      </Link>
      <Link to="/dashboard">
        <Button
          text={"Dashboard"}
          outlined={true}
          onClick= {() => navigate("/dashboard")}
        />
      </Link>
    </div>

    <div className="drawer">
      <TemporaryDrawer />
    </div>
  </header>;
};

export default Header;
