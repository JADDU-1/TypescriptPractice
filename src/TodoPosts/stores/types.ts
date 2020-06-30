export interface TodoPostObject {
  userId: number
  id: number
  title: string
  body: string
}

export interface GetTodosResponse {
  todos: Array<TodoPostObject>
}
