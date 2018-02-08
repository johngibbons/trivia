import React, { PropTypes } from 'react'
import './AlertBar.css'
import { connect } from 'react-redux'
import { hideAlertBar } from '../../actions/ui-actions'

import Snackbar from 'material-ui/Snackbar'

const AlertBar = ({ isOpen, message, onClose, isError }) => {
  return (
    <Snackbar
      open={isOpen}
      message={message}
      autoHideDuration={3000}
      onRequestClose={onClose}
      bodyStyle={{
        backgroundColor: isError ? 'rgb(220, 0, 0)' : '#b7a261'
      }}
    />
  )
}

const mapStateToProps = ({ ui }) => {
  return {
    isOpen: ui.isAlertBarOpen,
    message: ui.alertBarMessage,
    isError: ui.isAlertBarError
  }
}

export default connect(mapStateToProps, {
  onClose: hideAlertBar
})(AlertBar)
