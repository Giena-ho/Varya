import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import CardAirplane from "./components/CardAirplane/cardAirplane";
import Heder from "./components/Header/Header";
import Main from "./components/pages/main/main";

import "./App.css";
import Su57 from "./components/pages/Su57/Su57";
import Su27 from "./components/pages/Su27/Su27";

const App = () => {
  return (
    <BrowserRouter>
      {/* обёртка для роуты */}
      <div className="box">
        <div className="wrapper">
          <Heder />
          <Routes> 
            {/* кнопка */}
            <Route exact path="/" element={<Main />} /> 
            {/* Exact - это возвращение на главную страницу*/}
            <Route path="/Su57" element={<Su57 />} />
            <Route path='/Su27' element={<Su27/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
