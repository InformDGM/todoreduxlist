export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO"
  };
};

export const toogleTodo = (id) => {
  return {
    type: "TOOGLE_TODO",
    id
  };
};

export const editTodo = (id) => {
  return {
    type: "EDIT_TODO",
    id
  };
};

export const editUpdateText = (value, id) => {
  return {
    type: "EDIT_UPDATE_TEXT",
    payload: { value, editTodoId: id }
  };
};

export const active = (id) => {
  return {
    type: "TOOGLE_ACTIVE",
    id
  };
};

export const completed = (id) => {
  return {
    type: "TOOGLE_COMPLETED",
    id
  };
};

export const showAll = (id) => {
  return {
    type: "TOOGLE_ALL",
    id
  };
};
