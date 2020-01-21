import React, { useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { todoreducer, initialState } from "./reducers/todoreducer";
import { TodoContext } from "./components/context/TodoContext";

function App() {
  const [state, dispatch] = useReducer(todoreducer, initialState);

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoContext.Provider value={[state, dispatch]}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
