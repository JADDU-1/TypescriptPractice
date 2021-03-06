import React from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../../components/common/Icons/ReactLogo'
import {
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  VIDEO_ANIMATION,
  DRAG_DROP
} from '../../constants/NavigationConstants'

import './index.css'
import { TODOS_POSTS_ROUTE_PATH } from '../../TodoPosts/constants/navigationConstants'

function HomeRoute() {
  return (
    <div className='app'>
      <header className='bg-indigo-900 app-header'>
        <ReactLogo className='app-logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='app-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Link to={SAMPLE_ROUTE_PATH}>Sample Route</Link>
        <Link to={TODOS_ROUTE_PATH}>Todos</Link>
        <Link to={TODOS_POSTS_ROUTE_PATH}>Todo Posts</Link>
        <Link to={VIDEO_ANIMATION}>Video Animation</Link>
        <Link to={DRAG_DROP}>Drag And Drop</Link>
      </header>
    </div>
  )
}

export default HomeRoute
