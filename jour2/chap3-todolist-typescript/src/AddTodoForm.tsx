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
    setTodoList((oldTodoList) => {
      const newTodo: TodoType = {
        label: todoLabel,
        id: Date.now(),
        done: false,
      }
      return [...oldTodoList, newTodo]
    })
  }
  return (
    <>
      <input value={value} onChange={handleChange} type="text" />
      <button onClick={() => addTodo(value)}>Ajouter</button>
    </>
  )
}

export default AddTodoForm
