import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HooksUseEffect from "./HooksUseEffects";
const ToggleComponents = () => {
  const [isToggle, setisToggle] = useState(true);
  const isToggleChange = () => {
    setisToggle(!isToggle);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={isToggleChange}>
        Toggle
      </button>
      {isToggle ? <HooksUseEffect /> : null}
    </div>
  );
};

export default ToggleComponents;
