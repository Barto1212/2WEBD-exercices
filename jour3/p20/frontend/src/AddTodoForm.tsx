import { ChangeEvent, Dispatch, useState } from "react"
import { postTodo } from "./services/todo.service"
import { DataState } from "./App"

const AddTodoForm = ({
  setDataState,
}: {
  setDataState: Dispatch<React.SetStateAction<DataState>>
}) => {
  const [value, setValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        postTodo(value)
        setDataState("needRefresh")
        setValue("")
      }}
    >
      <input value={value} onChange={handleChange} type="text" />
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default AddTodoForm
