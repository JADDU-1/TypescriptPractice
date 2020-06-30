import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TodosPostsList from '../components'
import TodoPostsStore from '../stores/TodoStores'

interface TodosRouteProps {}

interface InjectedProps extends TodosRouteProps {
  todoPostsStore: TodoPostsStore
}

@inject('todoPostsStore')
@observer
class TodosPostsRoute extends Component<TodosRouteProps> {
  componentDidMount() {
    this.getTodos()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getTodoStore = () => {
    return this.getInjectedProps().todoPostsStore
  }

  getTodos = () => {
    this.getTodoStore().getTodoList()
  }

  render() {
    const { todos } = this.getTodoStore()
    return (
      <div>
        <TodosPostsList todos={todos} />
      </div>
    )
  }
}

export default TodosPostsRoute
