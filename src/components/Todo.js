import React, { useReducer, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./context/TodoContext";

export default function Todo() {
  const [state, dispatch] = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>New Todo</button>
      <br />
      <br />
      {state.map(item => (
        <TodoItem key={item.id} {...item}></TodoItem>
      ))}
    </div>
  );
}
