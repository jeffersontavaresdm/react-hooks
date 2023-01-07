import {ThemeContext, ThemeProps} from "./ThemeContextProvider";
import React from "react";

const Message = () => {
  const { theme, toggleTheme } = React.useContext<ThemeProps>(ThemeContext)

  return (
    <div >
      {
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 500,
          padding: 20,
          borderRadius: 10,
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "dark" ? "#eee" : "#333"
        }} >
          <h1 >Current Theme: {theme}</h1 >
          <button onClick={() => toggleTheme()} >Toggle Theme</button >
        </div >
      }
    </div >
  )
}

export default Message