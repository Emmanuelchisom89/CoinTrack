import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from '@mui/icons-material/X';import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
return (
    <footer className="footer">
      <h2 className="logo">
        CoinTrack<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://facebook.com">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:avivashishta@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <XIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link" />
        </a>
      </div>
  </footer>
  );
};

export default Footer;
