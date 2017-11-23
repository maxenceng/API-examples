// @flow

import React from 'react'
import { Header } from 'semantic-ui-react'

import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the / route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Home - Maxenceng's examples"
        description="Presents the website"
        keywords="Home API examples ReactJS Redux"
      />
      <Header as="h1">Home</Header>
      <div>
        <p>Welcome to my API examples</p>
        <p>This page uses the boilerplate that I will use in my next projects</p>
        <p>
          This is just a sample of what I can do, mostly demonstrating the use
          of ReactJS with Redux to call external APIs
        </p>
      </div>
    </div>
  )
