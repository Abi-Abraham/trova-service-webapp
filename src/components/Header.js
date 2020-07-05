import React from "react";
import logo from "../img/logo.webp";

const Header = () => {
  return (
    <header className="nav-head">
      <div className="ham-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="search-icon">
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="chats">
        <i className="fa fa-comment-o" aria-hidden="true"></i>
      </div>
      <div className="notifications">
        <i className="fa fa-bell-o" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Header;
