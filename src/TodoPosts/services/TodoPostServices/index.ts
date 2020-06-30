import { TodoPostObject } from '../../stores/types'

interface TodoPostService {
  getTodosPostsAPI: () => Promise<Array<TodoPostObject>>
}

export default TodoPostService
