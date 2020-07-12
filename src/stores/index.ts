// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'
import TodoStore from './TodoStore'
import TodoPostService from '../TodoPosts/services/TodoPostServices/todo.api'
import TodoPostsStore from '../TodoPosts/stores/TodoStores'
import AnimationStore from './AnimationStore'

const todoStore = new TodoStore(new TodoService())
const todoPostsStore = new TodoPostsStore(new TodoPostService())
const animationStore = new AnimationStore()

const stores = {
  todoStore,
  todoPostsStore,
  animationStore
}

export default stores
