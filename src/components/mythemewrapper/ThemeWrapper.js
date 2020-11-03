import React, { useState } from "react";
import "./ThemeWrapper.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

function ThemeWrapper({ darkMode }) {
  if (darkMode)
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="./../../Dark.css" />
      </div>
    );
  else return <div>{darkMode}</div>;
}
export default ThemeWrapper;
