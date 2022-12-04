import React from "react";

import CardAirplane from "../../CardAirplane/cardAirplane";

import Su from "../../../images/suu.png";
import Sus from "../../../images/sus.png";
import Mig from "../../../images/mig.png";
import YA from "../../../images/yakkk.png";
import F from "../../../images/ftri.png";
import Yak from "../../../images/yaktri.png";
import J from "../../../images/jii.png";
import Cdva from "../../../images/suusorok.png";

import "./main.css";

const data = [
  { id: 1, name: "Су-57", img: Su, url: "/Su57" }, // это кнопки для ссылки
  { id: 2, name: "Су-27", img: Sus, url: "/Su27" }, // назначили кнопку
  { id: 3, name: "МиГ-35", img: Mig, url: '/Mig35'},
  { id: 4, name: "Як-141", img: YA, url: '/Yk141' },
  { id: 5, name: "F-35", img: F, url:"/F35" },
  { id: 6, name: "Як-3", img: Yak, url: "/Yk3" },
  { id: 7, name: "J-20", img: J, url: "/J20" },
  { id: 8, name: "Су-47", img: Cdva, url: '/Su47' },
];

const Main = () => {
  return (
    <div className="pictures">
      {data.map((item) => (
        <div key={item.id}>
          <CardAirplane img={item.img} name={item.name} url={item.url} />
        </div>
      ))}
    </div>
  );
};
export default Main;
// Главная страница!!!
