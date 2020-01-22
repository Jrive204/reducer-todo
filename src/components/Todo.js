import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./context/TodoContext";

export default function Todo() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className='todo-list' style={{ marginTop: "5%" }}>
      {state.todo.map(item => (
        <TodoItem key={item.id} {...item} dispatch={dispatch}></TodoItem>
      ))}
      {console.log(state.todo, "todo")}
    </div>
  );
}
