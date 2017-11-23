// @flow

import React from 'react'
import { connect } from 'react-redux'

import Input from '../components/Input'

import { updateInput } from '../actions/battleTagAction'

type Props = {
  updateInput: Function,
}

class battleTag extends React.Component<Props> {
  constructor(props) {
    super(props)
    // flow-disable-next-line
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.updateInput(event.target.value)
  }

  render() {
    return <Input onchange={this.handleChange} />
  }
}

export default connect(null, { updateInput })(battleTag)
