// @flow

import React from 'react'
import { Header } from 'semantic-ui-react'

import Crypto from '../containers/Crypto'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /about route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Cryptocurrencies - Maxenceng's examples"
        description="Displays data from an external API about cryptocurrencies"
        keywords="Cryptocurrencies example API"
      />
      <Header as="h1">Cryptocurrencies</Header>
      <Crypto />
    </div>
  )
