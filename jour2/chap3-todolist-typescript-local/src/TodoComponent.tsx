import { TodoType } from "./App"
import { Dispatch } from "react"

export const TodoComponent = ({
  todo,
  setTodoList,
}: {
  todo: TodoType
  setTodoList: Dispatch<React.SetStateAction<TodoType[]>>
}) => {
  const patchTodo = (id: number) => {
    setTodoList((oldToDoList) => {
      const index = oldToDoList.findIndex((oldTodo) => oldTodo.id === id)
      const newArray = [...oldToDoList]
      newArray[index].done = true
      return newArray
    })
    // setTodoList((oldToDoList) =>
    //   oldToDoList.map((todo) => ({
    //     ...todo,
    //     done: todo.id === id ? true : todo.done,
    //   }))
    // )
  }

  const deleteTodo = (id: number) => {
    console.log("delete : ", id)
    setTodoList((old) => old.filter((todo) => todo.id !== id))
  }

  return (
    <li onClick={() => patchTodo(todo.id)}>
      {` ${todo.done ? "✔" : ""}  ${todo.label} `}
      <span
        onClick={(e) => {
          e.stopPropagation()
          deleteTodo(todo.id)
        }}
      >
        ❌
      </span>
    </li>
  )
}
