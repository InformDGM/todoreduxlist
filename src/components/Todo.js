import EditInputText from "../components/EditInputText";
import DisplayText from "../components/DisplayText";

const Todo = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Redux To Do List</h2>
      <DisplayText />
      <EditInputText />
    </div>
  );
};

export default Todo;
