import React from "react";
import ThemeContextProvider from "./components/use-context/UseContextHook";
import Message from "./components/use-context/Message";

function App() {
  return (
    <>
      <ThemeContextProvider >
        <Message />
      </ThemeContextProvider >
    </>
  );
}

export default App;