import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'
import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  VIDEO_ANIMATION,
  DRAG_DROP
} from './constants/NavigationConstants'
import TodosPostsRoute from './TodoPosts/routes/index'
import { TODOS_POSTS_ROUTE_PATH } from './TodoPosts/constants/navigationConstants'
import stores from './stores'
const TodosRoute = lazy(() => import('./routes/TodosRoute'))

import i18n from './i18n'
import VideosList from './routes/animation'
import DragDrop from './routes/DragAndDrop'

const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div />}>
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
              <Route exact path={VIDEO_ANIMATION}>
                <VideosList />
              </Route>
              <Route exact path={DRAG_DROP}>
                <DragDrop />
              </Route>
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
