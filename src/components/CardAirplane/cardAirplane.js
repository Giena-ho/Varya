import React from "react"; //импортировала реакт из модуля
import { Link } from "react-router-dom";

import "./cardAirplane.css"; //импортировала стили css .- текущая папка, /- название файла

const CardAirplane = ({img, name, url}) => {
  // создала стрелучную функцию, прокинула props: img, text
  return (
    <div className="plans">
      <img src={img}/>
      <Link to={url}>{name}</Link>
    </div>
  );
}; // завёл оболочку в тег <a></a> для перехода на другие страниы

export default CardAirplane; //экспортировала компоненту в проект.


