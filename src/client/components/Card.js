// @flow

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

/**
 * @type {Object}
 */
type Props = {
  image: string,
  header: string,
  meta: string,
  description: string,
  extra: string,
}

/**
 * @param  {string} image
 * @param  {string} header
 * @param  {string} meta
 * @param  {string} description
 * @param  {string} extra
 */
export default ({
  image,
  header,
  meta,
  description,
  extra,
}: Props) =>
  (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>{extra}</Card.Content>
    </Card>
  )
