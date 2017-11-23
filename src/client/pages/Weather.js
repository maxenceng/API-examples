// @flow

import React from 'react'
import { Header } from 'semantic-ui-react'

import Weather from '../containers/Weather'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /weather route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Weather - Maxenceng's examples"
        description="Displays data from an external API about weather at the user's position"
        keywords="Weather OpenWeather example API"
      />
      <Header as="h1">Weather</Header>
      <Weather />
    </div>
  )
