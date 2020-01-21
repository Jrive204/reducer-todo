export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
  }
];

export const todoreducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
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
