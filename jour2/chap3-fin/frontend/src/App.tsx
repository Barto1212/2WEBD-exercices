import { useEffect, useState } from "react"
import "./App.css"
import { TodoComponent } from "./TodoComponent"
import AddTodoForm from "./AddTodoForm"
import { getTodos } from "./services/todo.service"

export type TodoType = {
  id: string
  done: boolean
  label: string
}

export type DataState = "needRefresh" | "loading" | "success"

const initialToDoList: TodoType[] = []

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(initialToDoList)
  const [dataState, setDataState] = useState<DataState>("needRefresh")
  useEffect(() => {
    if (dataState === "needRefresh") {
      getTodos().then((response) => {
        setTodoList(response)
        setDataState("success")
      })
    }
  }, [dataState])
  return (
    <>
      <h1>To do list</h1>
      <ul>
        {todoList.map((item) => {
          return (
            <div key={item.id}>
              <TodoComponent todo={item} setDataState={setDataState} />
            </div>
          )
        })}
      </ul>
      <AddTodoForm setDataState={setDataState} />
    </>
  )
}

export default App
