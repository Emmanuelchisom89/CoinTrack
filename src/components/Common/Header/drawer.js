import * as React from "react";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
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
  }; */

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

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={openMenu}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={closeMenu}>
        <div className="drawer-div">
          <Link to="/">
            <p>
              <HomeRoundedIcon className="link link-i" />
            </p>
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p>
              <CompareArrowsRoundedIcon className="link link-i" />
            </p>
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p>
              <CollectionsBookmarkRoundedIcon className="link link-i" />
            </p>
            <p className="link">WatchList</p>
          </Link>
          <Link to="/dashboard">
            <p>
              <SpaceDashboardRoundedIcon className="link link-i" />
            </p>
            <p className="link">Dashboard</p>
          </Link>
          <Switch checked={darkMode} onClick={() => changeMode()} />
        </div>
      </Drawer>
    </div>
  );
}
