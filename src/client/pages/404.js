// @flow

import React from 'react'
import { Header } from 'semantic-ui-react'

import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed when the user tries to access a non-existing route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Not Found - React Koa Boilerplate"
        description="React Koa Boilerplate 404 Page Not Found"
        keywords="React Koa Boilerplate SSR Redux"
      />
      <Header as="h1">404 Not Found!</Header>
    </div>
  )
