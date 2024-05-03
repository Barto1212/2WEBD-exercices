import { TodoType } from "../App"

const baseURL = "http://localhost:3000/todos"

export async function postTodo(todoLabel: string) {
  if (!todoLabel) return
  const newTodo: TodoType = {
    label: todoLabel,
    id: Date.now().toString(),
    done: false,
  }
  await fetch(baseURL, {
    body: JSON.stringify(newTodo),
    method: "POST",
  })
}

export async function deleteTodo(id: string) {
  await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  })
}

export async function patchTodo(id: string) {
  await fetch(`${baseURL}/${id}`, {
    body: JSON.stringify({ done: true }),
    method: "PATCH",
  })
}

export async function getTodos() {
  const datas = await fetch(baseURL)
  const response = await datas.json()
  return response
}
