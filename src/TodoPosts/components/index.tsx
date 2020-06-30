import React, { Component } from 'react'
import TodoModel from '../stores/Models'

type Props = {
  todos: Array<TodoModel>
}
class TodosPostsList extends Component<Props> {
  render() {
    const { todos } = this.props
    return (
      <div>
        TODOS
        {todos.map(item => (
          <div>
            <span>{item.userId}</span>
            <span>{item.title}</span>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default TodosPostsList
