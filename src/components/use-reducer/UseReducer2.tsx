import React, {Reducer} from 'react'

interface State {
  tasks: Todo[]
}

interface Todo {
  name: string;
}

interface Action {
  type: string;
  payload: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add-task' : {
      let updatedState = {
        tasks: [...state.tasks, { name: action.payload }]
      }

      console.log(updatedState)

      return updatedState
    }
    default :
      return state
  }
}

const UseReducer2 = () => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(reducer, { tasks: [] })
  const [inputValue, setInputValue] = React.useState<string>("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handlerInput() {
    if (inputValue != "") {
      dispatch({ type: "add-task", payload: inputValue })
    }

    setInputValue("")

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid cyan",
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
      }} >
        <input
          autoFocus={true}
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handlerInput()
            }
          }}
        />
        <button
          onClick={handlerInput} >
          Adicionar
        </button >
      </div >
      {
        state.tasks.length == 0
          ? <></>
          : <div >
            <ul >
              {
                state.tasks.map((task, index) => <li key={index} >{task.name}</li >)
              }
            </ul >
          </div >
      }
    </>
  )
}

export default UseReducer2