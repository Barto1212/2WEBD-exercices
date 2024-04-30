import { ChangeEvent, Dispatch, useState } from "react"
import { TodoType } from "./App"

const AddTodoForm = ({
  setTodoList,
}: {
  setTodoList: Dispatch<React.SetStateAction<TodoType[]>>
}) => {
  const [value, setValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const addTodo = (todoLabel: string) => {
    if (!todoLabel) return
    setTodoList((oldTodoList) => {
      const newTodo: TodoType = {
        label: todoLabel,
        id: Date.now(),
        done: false,
      }
      setValue("")
      return [...oldTodoList, newTodo]
    })
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo(value)
      }}
    >
      <input value={value} onChange={handleChange} type="text" />
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default AddTodoForm
