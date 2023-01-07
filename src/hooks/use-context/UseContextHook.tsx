import Message from "./Message";
import React from "react";
import {ThemeContextProvider} from "./ThemeContextProvider";

/**
 * Este componente React foi criado para demonstrar como utilizar o context passado pelo createContext hook.
 *
 * O componente pai passará os dados do objeto de contexto (ThemeProps) para ser usado nos componentes filhos.
 *
 * Foi utilizado o "React.Fragment" para encapsular os elementos sem adicionar um elemento extra na árvore do DOM.
 * Também poderia se usar uma "div" ou abreviar o "React.Fragment" apenas passando "<></>".
 */
const UseContextHook = () => {
  return (
    <ThemeContextProvider >
      <React.Fragment >
        <Message />
      </React.Fragment >
    </ThemeContextProvider >
  )
}

export default UseContextHook