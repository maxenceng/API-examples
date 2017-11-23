// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { Sidebar, Segment, Container } from 'semantic-ui-react'

import { ROUTES } from '../utils/routes'
import Nav from './components/Nav'

/**
 * Creates our routes for the React Router
 * @param  {[type]} routes
 * @return {Array<any>}
 */
const createRoutes = (routes: Map<string, Array<any>>): Array<any> => {
  const res = []
  routes.forEach((value, key) => {
    if (key === 'Home') {
      res.push(<Route key={key} exact path={value[0]} component={value[1]} />)
    } else if (key !== 'Not Found') {
      res.push(<Route key={key} path={value[0]} component={value[1]} />)
    } else {
      res.push(<Route key={key} component={value[1]} />)
    }
  })
  return res
}

/**
 * Contains the elements of the pages powered by React
 */
export default () =>
  (
    <Sidebar.Pushable as={Segment}>
      <Nav />
      <Sidebar.Pusher>
        <Container>
          <Switch>
            {createRoutes(ROUTES)}
          </Switch>
        </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
