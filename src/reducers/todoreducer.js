export const initialState = {
  todo: [
    {
      id: Date.now(),
      item: "test",
      completed: false
    }
  ]
};

export const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        todo: [
          ...state.todo,
          { id: Date.now(), item: action.payload, completed: false }
        ]
      };
    }

    case "DELETE": {
      return {
        todo: state.todo.filter(item => item.id !== action.payload)
      };
    }
    case "COMPLETED": {
      return {
        todo: state.todo.map(item =>
          item.id === action.payload
            ? {
                ...item,
                completed: !item.completed
              }
            : item
        )
      };
    }

    case "CLEAR": {
      return {
        todo: state.todo.filter(item => item.completed === false)
      };
    }

    default: {
      return state;
    }
  }
};
