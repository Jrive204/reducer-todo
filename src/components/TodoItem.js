import React, { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

export default function TodoItem({ id, completed, text }) {
  const [state, dispatch] = useContext(TodoContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch({ type: "COMPLETED", payload: id })}
      />
      <input type='text' defaultValue={text} />
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button>
    </div>
  );
}
