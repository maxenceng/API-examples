// @flow

import React from 'react'

import Diablo from '../containers/Diablo'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /about route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Diablo 3 profile - Maxenceng's examples"
        description="Displays data from an external API about Diablo 3"
        keywords="Blizzard Diablo example API"
      />
      <h1>Diablo 3 profile</h1>
      <Diablo />
    </div>
  )
