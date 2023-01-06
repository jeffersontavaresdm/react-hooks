import React, {Reducer} from 'react'

interface State {
  tasks: Todo[]
}

interface Todo {
  name: string;
}

interface Action {
  type: string;
  inputValue: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add-task' : {
      let updatedState = {
        tasks: [...state.tasks, { name: action.inputValue }]
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
      dispatch({ type: "add-task", inputValue: inputValue })
    }

    setInputValue("")

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div >
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
    </div >
  )
}

export default UseReducer2