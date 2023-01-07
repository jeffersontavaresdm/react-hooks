import React from "react";

const UseRefHook = () => {
  const [name, setName] = React.useState<string>("Jonh Doe")
  const renders = React.useRef<number>(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const previousName = React.useRef<string>("...")

  /**
   * Sempre que o componente for renderizado, vai somar em 1 o valor de renders porém não vai renderizar o componente.
   * No caso do state, faria o componente ser renderizado criando um loop infinito pois quando o state é alterado
   * o componente é renderizado e assim ativaria novamente o useEffect, que alteraria o state, que ativaria o useEffect,
   * assim criando um loop infinito.
   */
  React.useEffect(() => {
    renders.current = renders.current + 1
  })

  /**
   * Nesta função após verificar se o valor foi passado para a constante, posso alterar os valores das propriedades da tag.
   * Neste caso, a tag <input/>
   */
  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  /**
   * Passando o valor da state para a constante com useRef, consigo armazenar na constante o valor anterior do state.
   */
  React.useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <div >
      <input
        autoFocus={true}
        onChange={(event) => setName(event.target.value)}
        /**
        * Aqui, passando esta constante para esta propriedade da tag HTML, consigo pegar a referencia da tag na constante.
        * Assim posso alterar os valores das propriedades da tag através de uma função.
        */
        ref={inputRef}
        style={{padding: "5px"}}
      />
      <p >Hello! My name is {name}</p >
      <p >this page has been rendered {renders.current} times</p >
      <br />
      <button onClick={() => focusInput()} >Input Focus</button >
      <br />
      <p >My old name is {previousName.current}</p >
    </div >
  )
}

export default UseRefHook