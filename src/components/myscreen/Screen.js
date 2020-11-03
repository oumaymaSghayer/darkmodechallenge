import React, { useState, useEffect } from "react";
import "./Screen.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import MyForm from "./../myform/MyForm";
import TextWrapper from "./../mytextwrapper/TextWrapper";

function Screen({ updateTheme }) {
  const [darkMode, setDarkMode] = useState(getInitialTheme());
  console.log(darkMode);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialTheme() {
    let theme = JSON.parse(localStorage.getItem("darkMode")) || false;
    //  updateTheme(theme);
    return theme;
  }
  const renderCorrectIcon = () => {
    if (darkMode) {
      return (
        <FaMoon
          className="darkIconD"
          onClick={() => {
            setDarkMode(false);
            updateTheme(false);
          }}
        />
      );
    } else {
      return (
        <FaRegMoon
          className="darkIcon"
          onClick={() => {
            setDarkMode(true);
            updateTheme(true);
          }}
        />
      );
    }
  };
  return (
    <div
      className={
        darkMode
          ? "screenD d-flex flex-column flex-grow-1"
          : "screen d-flex flex-column flex-grow-1"
      }
    >
      <div className="theme-wrapper">
        <div className="title-wrapper">
          <h2 className={darkMode ? "titleD" : "title"}>Dark Mode Challenge</h2>
        </div>
        {renderCorrectIcon()}
      </div>
      <TextWrapper darkMode={darkMode} />
      <MyForm darkMode={darkMode} />
    </div>
  );
}

export default Screen;
