import React, { useState } from "react";
import { addTodo } from "../actions/index";
import { useDispatch } from "react-redux";

const DisplayText = () => {
  const [inputData, setInputData] = useState("");
  // const [updateData, setupdateData] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="enter todo item"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        >
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default DisplayText;
