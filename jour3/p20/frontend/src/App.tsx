import { useEffect, useState } from "react";
import "./App.css";
import { TodoComponent } from "./TodoComponent";
import AddTodoForm from "./AddTodoForm";
import { getTodos } from "./services/todo.service";
import Title from "./Title";
import { Outlet, Route, Routes } from "react-router-dom";
import Tododetail from "./Tododetail";

export type TodoType = {
  id: string;
  done: boolean;
  label: string;
};

export type DataState = "needRefresh" | "loading" | "success";

const initialToDoList: TodoType[] = [];

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(initialToDoList);
  const [dataState, setDataState] = useState<DataState>("needRefresh");
  useEffect(() => {
    if (dataState === "needRefresh") {
      getTodos().then((response) => {
        setTodoList(response);
        setDataState("success");
      });
    }
  }, [dataState]);
  return (
    <>
      <Title>To do List</Title>
      <Routes>
        <Route
          path="/todo"
          element={
            <>
              <ul>
                {todoList.map((item) => {
                  return (
                    <div key={item.id}>
                      <TodoComponent todo={item} setDataState={setDataState} />
                    </div>
                  );
                })}
              </ul>
              <Outlet />
            </>
          }
        >
          <Route path="create" element={<AddTodoForm setDataState={setDataState} />} />
          <Route path="tododetail" element={todoList[0] && <Tododetail todo={todoList[0]} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
