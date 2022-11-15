import React from "react";
import { ColorModeContext } from "../../../../context/ColorMode";
import { StyledSwitch } from"./style"

function DarkModeSwitch() {
  const context = React.useContext(ColorModeContext);
  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
            context.toggleMode()
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
}

export default DarkModeSwitch;
