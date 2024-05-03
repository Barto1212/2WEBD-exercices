import { Dispatch } from "react"
import { DataState, TodoType } from "./App"
import { deleteTodo, patchTodo } from "./services/todo.service"

export const TodoComponent = ({
  todo,
  setDataState,
}: {
  todo: TodoType
  setDataState: Dispatch<React.SetStateAction<DataState>>
}) => {
  return (
    <li
      onClick={() => {
        patchTodo(todo.id).then(() => {
          setDataState("needRefresh")
        })
      }}
    >
      {` ${todo.done ? "✔" : ""}  ${todo.label} `}
      <span
        onClick={(e) => {
          e.stopPropagation()
          deleteTodo(todo.id).then(() => {
            setDataState("needRefresh")
          })
        }}
      >
        ❌
      </span>
    </li>
  )
}
