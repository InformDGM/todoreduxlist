const initialState = {
  list: [],
  text: ""
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      };
    case "DELETE_TODO":
      const newlist = state.list.filter((items) => items.id !== action.id);
      return {
        ...state,
        list: newlist
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: []
      };
    case "TOOGLE_TODO":
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "EDIT_TODO":
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
        )
      };
    case "EDIT_UPDATE_TEXT":
      const {
        payload: { value, editTodoId }
      } = action;
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === editTodoId ? { ...todo, data: value } : todo
        )
      };
    default:
      return state;
  }
};

export default TodoReducer;
