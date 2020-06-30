// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'
import TodoPostService from '../TodoPosts/services/TodoPostServices/todo.api'
import TodoPostsStore from '../TodoPosts/stores/TodoStores'

const todoPostsStore = new TodoPostsStore(new TodoPostService())
const todoStore = new TodoStore(new TodoService())

const stores = {
  todoPostsStore,
  todoStore
}

export default stores
