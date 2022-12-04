import React from "react";
import { Link } from "react-router-dom";

import styles from "./Su57.module.css";

import ccc from "../../../images/supsforpg.png";

const Su57 = () => {
  {
    /* const - позволяет создать переменную, name=()=>{return()- создал стрелочную функцию}*/
  }
  {
    /* после return необходимо создать контейнер */
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstpaidge}>
        {/* <div> */}
          <img src={ccc} />
        {/* </div> */}
        <iframe src="https://www.youtube.com/embed/IJTCewLTCLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
      <div className={styles.secondpaidge}>
        <span> Cy-57</span> 
        <span> Российский многофункциональный истребитель пятого поколения, созданный ОКБ имени П. О. Сухого в рамках комплексной целевой программы «ПАК ФА». Самолёт разработан для замены в российских ВКС тяжёлого истребителя Су-27. </span>
      </div>
    </div>
  );
};

export default Su57;
// Создали страницу => указываем ссылку по кнопке "Су-57" в файле
