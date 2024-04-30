import { useState } from "react"
import "./App.css"

const toDoList = ["faire la vaisselle", "étudier React", "regarder une série"]

const Item = ({ todo }) => {
  const state = useState(false)
  const check = state[0]
  const setCheck = state[1]
  return (
    <li onClick={() => setCheck(true)}>{` ${check ? "✔" : ""}  ${todo}`}</li>
  )
}

function App() {
  return (
    <>
      <h1>To do list</h1>
      <ul>
        {toDoList.map((item) => (
          <Item todo={item} />
        ))}
      </ul>
    </>
  )
}

export default App
