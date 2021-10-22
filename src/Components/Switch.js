import React from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";

const Switch = () => {
  const [theme, setTheme] = React.useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  //switch between themes
  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  //store local mode preference
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    //return the layout based on the current theme
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default Switch;
