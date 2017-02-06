import React, { PropTypes } from 'react'
import './Admin.css'
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {
  updateSearchField,
  openModal
} from '../../actions/ui-actions';
import {
  submitSearch,
  saveTitle,
  savePerson
} from '../../actions/admin-actions';
import { List } from 'immutable';
import {
  titleResultsSelector,
  peopleResultsSelector
} from '../../selectors/admin-selector';

import RaisedButton from 'material-ui/RaisedButton';
import NewGameModal from '../game/newGameModal/NewGameModal';

const Admin = ({
  searchValue,
  peopleResults,
  titleResults,
  onClickNewGame,
  onChangeSearchInput,
  onSavePerson,
  onSaveTitle,
  onSubmitSearch
}) => {
  return (
    <div className='Admin'>
        <RaisedButton
          primary
          label='Create a Game'
          labelStyle={{
            color: '#212121'
          }}
          onClick={() => onClickNewGame('NEW_GAME')}
        />
        <NewGameModal />
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitSearch(searchValue);
        }}
      >
        <TextField
          id='search'
          type='text'
          autoFocus
          className='Admin-search-input'
          floatingLabelText='Search for movies, tv, actors'
          value={searchValue}
          onChange={(e, val) => onChangeSearchInput(val)}
        />
      </form>
      <div className='Admin-search-results'>
        {!!titleResults.size &&
        <h5>Titles</h5>}
        {!!titleResults.size &&
        <div className='Admin-titles Admin-results'>
          {titleResults.map((result, i) =>
            <div
              key={i}
              className='Admin-result'
              onClick={() => onSaveTitle(result)}
            >
              <img src={ `https://image.tmdb.org/t/p/w300${result.get('poster_path')}` } />
            </div>
          )}
        </div>}
        {!!peopleResults.size &&
        <h5>People</h5>}
        {!!peopleResults.size &&
        <div className='Admin-people Admin-results'>
          {peopleResults.map((result, i) =>
            <div
              key={i}
              className='Admin-result'
              onClick={() => onSavePerson(result)}
            >
              <img src={`https://image.tmdb.org/t/p/w300${result.get('profile_path')}`} />
            </div>
          )}
        </div>}
      </div>
    </div>
  )
}

Admin.propTypes = {
  searchValue: PropTypes.string,
  peopleResults: PropTypes.instanceOf(List),
  titleResults: PropTypes.instanceOf(List),
  onClickNewGame: PropTypes.func.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  onSaveTitle: PropTypes.func.isRequired,
  onSavePerson: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { ui } = state;
  return {
    searchValue: ui.searchValue,
    peopleResults: peopleResultsSelector(state),
    titleResults: titleResultsSelector(state)
  }
}

export default connect(mapStateToProps, {
  onClickNewGame: openModal,
  onChangeSearchInput: updateSearchField,
  onSubmitSearch: submitSearch,
  onSaveTitle: saveTitle,
  onSavePerson: savePerson
})(Admin)
