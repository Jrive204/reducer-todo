import React from "react";

export default function TodoItem({ id, completed, item, dispatch }) {
  return (
    <>
      <div
        className={`todo${completed ? ` completed` : ""}`}
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%"
        }}>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch({ type: "COMPLETED", payload: id })}
        />
        <p>{item}</p>
        <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
          Delete
        </button>
      </div>
    </>
  );
}
