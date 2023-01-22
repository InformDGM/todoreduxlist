import React from "react";
import {
  deleteTodo,
  removeTodo,
  toogleTodo,
  editTodo,
  editUpdateText,
  active,
  completed,
  showAll
} from "../actions/index";
import { filter } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

const EditInputText = () => {
  // const [updateData, setupdateData] = useState("");

  const list = useSelector((state) => state.TodoReducer.list);
  const selectedFilter = useSelector((state) => state.FilterReducer.filter);
  // const activeList = filter(list, (item) => item.completed !== filters.active);
  // const completedlist = filter(
  //   list,
  //   (item) => item.completed === filters.completed
  // );
  const filteredList = filter(list, (item) => {
    if (selectedFilter === "active") {
      return item.completed === false || !item.completed;
    } else if (selectedFilter === "done") {
      return item.completed === true;
    } else {
      return true;
    }
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="list items">
        {filteredList.map((items) => {
          return (
            <div key={items.id}>
              {!items.edit && (
                <>
                  <p style={{ display: "inline" }}>
                    {items.completed && <s>{items.data}</s>}
                    {!items.completed && <>{items.data}</>}
                  </p>
                </>
              )}
              {items.edit && (
                <>
                  <p style={{ display: "inline" }}>
                    {" "}
                    <input
                      type="text"
                      placeholder="enter updated text"
                      value={items.data}
                      onChange={(e) =>
                        dispatch(editUpdateText(e.target.value, items.id))
                      }
                    />
                  </p>
                </>
              )}
              {!items.edit && (
                <>
                  <DeleteIcon onClick={() => dispatch(deleteTodo(items.id))} />
                  <DoneIcon onClick={() => dispatch(toogleTodo(items.id))} />
                  <button
                    type="submit"
                    onClick={() => dispatch(editTodo(items.id))}
                  >
                    Edit{" "}
                  </button>
                </>
              )}
              {items.edit && (
                <>
                  <button
                    type="submit"
                    onClick={() => dispatch(editTodo(items.id))}
                  >
                    Done{" "}
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
      <button onClick={() => dispatch(removeTodo())}>Delete All</button>

      {/* we are setting up background color based on the toogle button status, if its active apply color and no color for inactive */}

      <button
        onClick={() => dispatch(active())}
        className={selectedFilter === "active" ? "activefilter" : ""}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(completed())}
        className={selectedFilter === "done" ? "activefilter" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(showAll())}
        className={selectedFilter === "all" ? "activefilter" : ""}
      >
        Show All
      </button>
    </div>
  );
};

export default EditInputText;
