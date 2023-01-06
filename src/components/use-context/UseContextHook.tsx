import React from "react";
import Message from "./Message";

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeProps>({
  theme: "light",
  toggleTheme: () => {}
})

const ThemeContextProvider = ({ children = <Message /> }) => {
  const [theme, setTheme] = React.useState<string>("light")

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider >
  )
}

export default ThemeContextProvider