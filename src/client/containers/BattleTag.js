// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Input from '../components/Input'

import { updateInput } from '../actions/battleTagAction'

class battleTag extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.updateInput(event.target.value)
  }

  render() {
    return <Input onchange={this.handleChange} />
  }
}

battleTag.propTypes = {
  updateInput: PropTypes.func.isRequired,
}

battleTag.defaultProps = {
}

export default connect(null, { updateInput })(battleTag)
