import React, { useState, useContext } from "react";
import { TodoContext } from "./context/TodoContext";

export default function TodoForm() {
  const { state, dispatch } = useContext(TodoContext);
  const [item, setItem] = useState({ item: "" });

  const handlechange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    if (item.item === "") {
      return null;
    } else {
      return (
        e.preventDefault(),
        dispatch({ type: "ADD", payload: item.item }),
        setItem({ item: "" })
      );
    }
  };

  return (
    <>
      <form>
        <input
          required
          id='form'
          type='text'
          onChange={handlechange}
          name='item'
          value={item.item}
        />
        <button type='submit' onClick={handleSubmit}>
          {console.log(state, "state")}
          New Todo
        </button>
        {console.log(item, "item")}
      </form>
      <button className='clear-btn' onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed
      </button>
    </>
  );
}
