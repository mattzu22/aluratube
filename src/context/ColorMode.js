import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("vc precisa me configurar primeiro ");
  },
  toggleMode: () => {
    alert("vc precisa me configurar primeiro ");
  }
});

function ColorModeprovider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    //entender pq esta sendo ignorado?
    <ColorModeContext.Provider
      value={{ mode: mode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeprovider;
