const initialstate = { filter: "all" };

const FilterReducer = (state = initialstate, action) => {
  switch (action.type) {
    //WE are setting toogle for the active and completed button by setting a color when its active and no color when its inactive
    case "TOOGLE_ACTIVE":
      return {
        ...state,
        filter: "active"
      };

    case "TOOGLE_COMPLETED":
      return {
        ...state,
        filter: "done"
      };

    case "TOOGLE_ALL":
      return {
        ...state,
        filter: "all"
      };
    default:
      return state;
  }
};

export default FilterReducer;
