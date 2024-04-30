import { useState } from "react"
import "./App.css"
import { TodoComponent } from "./TodoComponent"
import AddTodoForm from "./AddTodoForm"

export type TodoType = {
  id: number
  done: boolean
  label: string
}

const initialToDoList: TodoType[] = [
  { id: 1, done: false, label: "faire la vaisselle" },
  { id: 2, done: false, label: "étudier React" },
  { id: 3, done: false, label: "regarder une série" },
]

function App() {
  const [todoList, setTodoList] = useState(initialToDoList)
  return (
    <>
      <h1>To do list</h1>
      <ul>
        {todoList.map((item) => {
          return (
            <div key={item.id}>
              <TodoComponent setTodoList={setTodoList} todo={item} />
            </div>
          )
        })}
      </ul>
      <AddTodoForm setTodoList={setTodoList} />
    </>
  )
}

export default App
