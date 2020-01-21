import React, { useReducer, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./context/TodoContext";

export default function Todo() {
  const [state, dispatch] = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>New Todo</button>
      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed
      </button>
      <br />
      <br />
      {state.map(item => (
        <TodoItem key={item.id} {...item} dispatch={dispatch}></TodoItem>
      ))}
    </div>
  );
}
