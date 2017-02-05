import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import { connect } from 'react-redux';
import { currentEntrySelector } from '../../selectors/entries-selector';

const Entry = ({ entry }) => {
  return (
    <h1>{entry.name}</h1>
  )
}

Entry.propTypes = {
  entry: PropTypes.instanceOf(EntryModel)
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
