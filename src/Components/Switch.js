import React from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";

const Switch = () => {
  const [theme, setTheme] = React.useState("light");

  // The function that toggles between themes
  // To track which state it is currently on
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  return (
    //return the layout based on the current theme
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default Switch;
