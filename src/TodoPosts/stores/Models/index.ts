import { observable, action } from 'mobx'
import { TodoPostObject } from '../types'

class TodoModel {
  id: number
  userId: number
  @observable title: string
  @observable body: string

  constructor(todo: TodoPostObject) {
    this.id = todo.id
    this.userId = todo.userId
    this.title = todo.title
    this.body = todo.body
  }
}

export default TodoModel
