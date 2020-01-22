import React, { useState, useContext } from "react";
import { TodoContext } from "./context/TodoContext";

export default function TodoForm() {
  const [state, dispatch] = useContext(TodoContext);
  const [item, setItem] = useState({ item: "" });

  const handlechange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <input
          id='form'
          required
          type='text'
          onChange={handlechange}
          name='item'
          value={item.item}
        />
        {console.log(item, "item")}
        <button
          type='submit'
          onClick={e =>
            e.preventDefault() & dispatch({ type: "ADD", payload: item.item })
          }>
          {console.log(state, "state")}
          New Todo
        </button>
      </form>
      <button className='clear-btn' onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed
      </button>
    </>
  );
}
