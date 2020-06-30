import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'
import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH
} from './constants/NavigationConstants'
import TodosPostsRoute from './TodoPosts/routes/index'
import { TODOS_POSTS_ROUTE_PATH } from './TodoPosts/constants/navigationConstants'
import TodosRoute from './routes/TodosRoute/index'
import stores from './stores'

const App = () => {
  return (
    <Provider {...stores}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={SAMPLE_ROUTE_PATH}>
            <SampleRoute />
          </Route>
          <Route exact path={TODOS_ROUTE_PATH}>
            <TodosRoute />
          </Route>
          <Route exact path={TODOS_POSTS_ROUTE_PATH}>
            <TodosPostsRoute />
          </Route>
          <Route path={HOME_ROUTE_PATH}>
            <HomeRoute />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
