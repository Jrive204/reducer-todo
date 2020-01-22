export const initialState = [
  {
    id: Date.now(),
    item: "test",
    completed: false
  }
];

export const todoreducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: Date.now(),
          item: action.payload,
          completed: false
        }
      ];
    }

    case "DELETE": {
      return state.filter(item => item.id !== action.payload);
    }
    case "COMPLETED": {
      return state.map(item =>
        item.id === action.payload
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      );
    }

    case "CLEAR": {
      return state.filter(item => item.completed === false);
    }

    default: {
      return state;
    }
  }
};
