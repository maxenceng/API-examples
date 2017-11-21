// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar, Menu } from 'semantic-ui-react'
import { ROUTES } from '../../utils/routes'

/**
 * Prepares the list of routes that will be in the list, displayed at the top of our site
 * @return {Array<any>}
 */
const routesList = (): Array<any> => {
  const res = []
  ROUTES.forEach((value, key) => {
    if (key !== 'Not Found') {
      res.push(<Menu.Item key={key}><NavLink className="navbar-item" to={value[0]}>{key}</NavLink></Menu.Item>)
    }
  })
  return res
}

/**
 * Nav component
 */
export default () =>
  (
    <Sidebar visible as={Menu} direction="top" inverted>
      {routesList()}
    </Sidebar>
  )
