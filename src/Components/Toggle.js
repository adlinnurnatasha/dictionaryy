import React from "react";
import "./ToggleSwitch.scss";

const Toggle = ({ toggleTheme, theme }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onClick={toggleTheme}
      />
      {
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      }
    </label>
  );
};

export default Toggle;
