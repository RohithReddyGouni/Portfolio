import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/rohith_45reddy/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/rohith174518", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rohithreddygouni/", "_blank");
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="#" onClick={handleInstagramClick}>
          <InstagramIcon />
        </a>
        <a href="#" onClick={handleTwitterClick}>
          <TwitterIcon />
        </a>
        <a href="#" onClick={handleLinkedInClick}>
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 RohithReddyGouni.com</p>
    </div>
  );
}

export default Footer;
