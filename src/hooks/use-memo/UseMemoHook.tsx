import React from "react";

const UseMemoHook = () => {
  const [number, setNumber] = React.useState<number>(1)
  const [text, setText] = React.useState<string>("")

  // const doubleNumber = slowFunction(number)

  const multipliedResult = React.useMemo(() => {
    return slowFunction(number)
  }, [number])

  return (
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
      backgroundColor: "darkgray"
    }} >
      <p >Number: {number}</p >
      <input value={text} onChange={(event) => setText(event.target.value)} autoFocus={true} />
      <p >Text: {text}</p >
    </div >
  )
}

function slowFunction(number: number) {
  console.log("Slow function is being called!")

  let result = 0
  for (let i = 0; i < 100000000; i++) {
    result = result + 1
  }

  return number * 10
}

export default UseMemoHook