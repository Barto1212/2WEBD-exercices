import { TodoType } from "./App";
const Tododetail = ({ todo }: { todo: TodoType }) => {
  return (
    <>
      <h2>{todo.label}</h2>
      <p>{todo.done ? "cette action est faite" : "non fait"}</p>
    </>
  );
};

export default Tododetail;
