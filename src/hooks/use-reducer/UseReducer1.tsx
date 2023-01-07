import React, {Reducer} from "react";

interface State {
  count: number;
}

type Action = { type: 'increment' | 'decrement' | 'reset' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
};

const UseReducer1 = () => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(reducer, { count: 0 });

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid cyan",
      borderRadius: "10%",
      position: "absolute",
      left: "50%",
      top: "50%",
      translate: "-50% -50%",
      backgroundColor: "darkgray",
      width: "300px",
      height: "200px"
    }} >
      <em style={{ fontWeight: "bold" }} >Count: <span style={{ color: "darkred" }} >{state.count}</span ></em >
      <div style={{ marginLeft: "20px", display: "flex" }} >
        <button
          style={{ width: "50px", border: "1px solid darkblue" }}
          onClick={() => dispatch({ type: 'decrement' })} >
          -
        </button >
        <button
          style={{ width: "50px", border: "1px solid darkblue" }}
          onClick={() => dispatch({ type: 'increment' })} >
          +
        </button >
        <button
          style={{ width: "50px", border: "1px solid darkblue" }}
          onClick={() => dispatch({ type: 'reset' })} >
          Reset
        </button >
      </div >
    </div >
  )
}

export default UseReducer1