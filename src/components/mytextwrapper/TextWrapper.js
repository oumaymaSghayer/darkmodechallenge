import React, { useState } from "react";
import "./TextWrapper.css";
function TextWrapper({ darkMode }) {
  return (
    <div className="d-flex flex-column flex-md-row mt-3 text-wrapper">
      <div
        className={
          darkMode
            ? "align-self-stretch flex-grow-1 text-boxD ma-1 px-3 text-left"
            : "align-self-stretch flex-grow-1 text-box ma-1 px-3 text-left"
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div
        className={
          darkMode
            ? "align-self-stretch flex-grow-1 text-boxD ma-1 px-3 text-left"
            : "align-self-stretch flex-grow-1 text-box ma-1 px-3 text-left"
        }
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}
export default TextWrapper;
