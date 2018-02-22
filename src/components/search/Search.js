import React, { PropTypes } from 'react'
import './Search.css'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { updateSearchField } from '../../actions/ui-actions'
import {
  submitSearch,
  saveTitle,
  savePerson
} from '../../actions/admin-actions'
import {
  titleResultsSelector,
  peopleResultsSelector
} from '../../selectors/admin-selector'

const Search = ({
  children,
  searchValue,
  peopleResults,
  titleResults,
  onChangeSearchInput,
  onSavePerson,
  onSaveTitle,
  onSubmitSearch
}) => {
  return (
    <div className='Search'>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmitSearch(searchValue)
        }}
      >
        <TextField
          id='search'
          type='text'
          autoFocus
          className='Search__input'
          floatingLabelText='Search for movies, tv, actors'
          value={searchValue}
          onChange={(e, val) => onChangeSearchInput(val)}
        />
      </form>
      <div className='Search__results-container'>
        {!!titleResults.size && <h5>Titles</h5>}
        {!!titleResults.size &&
          <div className='Search__titles Search__results'>
            {titleResults.map((result, i) => (
              <div
                key={i}
                className='Search__result'
                onClick={() => onSaveTitle(result)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${result.get('poster_path')}`}
                />
              </div>
            ))}
          </div>}
        {!!peopleResults.size && <h5>People</h5>}
        {!!peopleResults.size &&
          <div className='Search__people Search__results'>
            {peopleResults.map((result, i) => (
              <div
                key={i}
                className='Search__result'
                onClick={() => onSavePerson(result)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${result.get('profile_path')}`}
                />
              </div>
            ))}
          </div>}
      </div>
    </div>
  )
}

Search.propTypes = {
  searchValue: PropTypes.string,
  peopleResults: PropTypes.instanceOf(List),
  titleResults: PropTypes.instanceOf(List),
  onClickNewGame: PropTypes.func.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  onSaveTitle: PropTypes.func.isRequired,
  onSavePerson: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const { ui } = state
  return {
    searchValue: ui.searchValue,
    peopleResults: peopleResultsSelector(state),
    titleResults: titleResultsSelector(state)
  }
}

export default connect(mapStateToProps, {
  onChangeSearchInput: updateSearchField,
  onSubmitSearch: submitSearch,
  onSaveTitle: saveTitle,
  onSavePerson: savePerson
})(Search)
