import React, { PropTypes } from 'react'
import './Entry.css'
import { Map } from 'immutable'
import { connect } from 'react-redux';
import { currentEntrySelector } from '../../selectors/entries-selector';

const Entry = ({ entry }) => {
  return (
    <h1>{entry.name}</h1>
  )
}

Entry.propTypes = {
  entry: PropTypes.instanceOf(Map)
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
