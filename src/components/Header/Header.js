import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/istri.png";

import "./header.css";



const Header = () => {
  return (
    <div className="headerWrapper">
      {/* <a> */}
      <div className="title">
        ВИКИПЕДИЯ ИСТРЕБИТЕЛЕЙ
        <Link to="/">
        <img src={logo}></img>
        </Link>
      </div>
      <div className="topbar">
        <Link to="/"> Главная </Link>
        <a src="#">Фото</a>
        <a src="#">Видео</a>
      </div>
      {/* </a> */}
    </div>
  );
}; // завёл оболочку в тег <a></a>

export default Header;
