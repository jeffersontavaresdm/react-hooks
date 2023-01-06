import {ThemeContext, ThemeProps} from "./UseContextHook";
import React from "react";

const Message = () => {
  const { theme, toggleTheme } = React.useContext<ThemeProps>(ThemeContext)

  return (
    <>
      {
        <div style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "dark" ? "#eee" : "#333"
        }} >
          <h1 >Current Theme: {theme}</h1 >
          <button onClick={() => toggleTheme()} >Toggle Theme</button >
        </div >
      }
    </>
  )
}

export default Message