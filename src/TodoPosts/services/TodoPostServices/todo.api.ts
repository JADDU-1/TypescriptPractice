import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'

import { apiMethods } from '../../constants/APIConstants'

import endpoints from '../endPoint'

import TodoService from './index'
import { TODO_BASE_URL } from '../../constants/EnvironmentConstants'

class TodoPostsAPIService implements TodoService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: TODO_BASE_URL
    })
  }

  async getTodosPostsAPI() {
    return networkCallWithApisauce(
      this.api,
      endpoints.todos.todoPosts,
      {},
      apiMethods.get
    )
  }
}

export default TodoPostsAPIService
