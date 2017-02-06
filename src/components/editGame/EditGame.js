import React, { PropTypes } from 'react'
import './EditGame.css'
import { Record, List } from 'immutable';
import { connect } from 'react-redux';
import { updateGame } from '../../actions/game-actions';
import { currentGameSelector } from '../../selectors/games-selector'
import { currentCategoriesSelector } from '../../selectors/categories-selector'

import PageHeading from '../pageHeading/PageHeading';
import AddCategoryButton from './addCategoryButton/AddCategoryButton';
import SavePendingGameButton from './savePendingGameButton/SavePendingGameButton';
import EditCategoriesList from './editCategoriesList/EditCategoriesList';

const EditGame = ({
  game,
  categories,
  onChange
}) => {
  return (
    <div className='EditGame'>
      <PageHeading text={game.name}>
        <AddCategoryButton />
      </PageHeading>
      <SavePendingGameButton
        id={game.id}
        disabled={!categories.size}
      />
      <EditCategoriesList categories={categories} />
    </div>
  )
}

EditGame.propTypes = {
  game: PropTypes.instanceOf(Record),
  categories: PropTypes.instanceOf(List),
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: currentGameSelector(state, ownProps),
    categories: currentCategoriesSelector(state, ownProps)
  }
}

export default connect(mapStateToProps, {
  onChange: updateGame
})(EditGame)
