// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DiabloInput from '../components/DiabloInput'

import { updateInput } from '../actions/diabloInputAction'

class DiabloInputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.updateInput(event.target.value)
  }

  render() {
    return <div><DiabloInput onchange={this.handleChange} /></div>
  }
}

DiabloInputContainer.propTypes = {
  updateInput: PropTypes.func.isRequired,
}

DiabloInputContainer.defaultProps = {
}

export default connect({}, { updateInput })(DiabloInputContainer)
