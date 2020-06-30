import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import TodoPostService from '../../services/TodoPostServices/index'

import TodoModel from '../Models/index'
import { TodoPostObject } from '../types'

class TodoPostsStore {
  todoService: TodoPostService
  @observable getTodoListAPIStatus!: APIStatus
  @observable getTodoListAPIError!: Error | null
  @observable todos!: Array<TodoModel>

  constructor(todoService: TodoPostService) {
    this.todoService = todoService
    this.init()
  }

  @action.bound
  init() {
    this.getTodoListAPIStatus = API_INITIAL
    this.getTodoListAPIError = null
    this.todos = []
  }

  @action.bound
  setGetTodoListAPIStatus(status) {
    this.getTodoListAPIStatus = status
  }

  @action.bound
  setGetTodoListAPIError(error) {
    this.getTodoListAPIError = error
  }

  @action.bound
  setTodoListResponse(response: Array<TodoPostObject> | null) {
    if (response) {
      this.todos = response.map(todo => {
        return new TodoModel(todo)
      })
    }
  }

  @action.bound
  getTodoList() {
    const getTodosPromise = this.todoService.getTodosPostsAPI()
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setTodoListResponse)
      .catch(this.setGetTodoListAPIError)
  }
}

export default TodoPostsStore
