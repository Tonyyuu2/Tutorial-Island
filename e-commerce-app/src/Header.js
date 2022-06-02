import React from "react";
import "./Header.css";
import siteicon from "../public/icons/siteicon.png";

function Header() {
  return (
    <div className="header">
      <img src={siteicon} className="header__logo" alt="icon" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Tony</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineThree">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
