import React from "react";

/**
 * Com o useState posso atribuir uma constante com um valor e com uma função alterar o valor daquela constante.
 * Na declaração do useState, utilizando colchetes [] posso atribuir tanto a variável quanto a função de alteração.
 * Pode-se também atribuir um valor inicial a variável, assim não seria necessário fazer validação para começar a usar.
 *
 * Exemplo:
 * const [constante, mudarValorDaConstante] = React.useState("primeira constante utilizando useState")
 * console.log(constante)
 * Resultado: primeira constante utilizando useState
 * mudarValorDaConstante("alterando valor da constante")
 * console.log(constante)
 * Resultado: alterando valor da constante
 */
const UseStateHook = () => {
  const [count, setCount] = React.useState<number>(0)

  function incrementCount() {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div >
      <h1 >This count is {count}</h1 >
      <button onClick={incrementCount} >Increment count</button >
    </div >
  );
}

export default UseStateHook;