import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import Game from '../../models/Game';
import { connect } from 'react-redux';
import { currentGameSelector } from '../../selectors/games-selector';
import { currentCategoriesSelector } from '../../selectors/categories-selector';
import { Seq } from 'immutable';

import PageHeading from '../pageHeading/PageHeading';
import Category from './category/Category';

const MasterEntry = ({
  game,
  categories
}) => {
  return (
    <div>
      <PageHeading
        text='Master Entry'
      >{game.name}</PageHeading>
      {categories.map((category, i) => {
        console.log(category.correctAnswer)
        return (
          <Category
            key={i}
            category={category}
            selectedNomineeId={category.correctAnswer}
          />
        )
      })}
    </div>
  )
}

MasterEntry.propTypes = {
  entry: PropTypes.instanceOf(EntryModel),
  game: PropTypes.instanceOf(Game),
  categories: PropTypes.instanceOf(Seq)
}

const mapStateToProps = (state, props) => {
  return {
    game: currentGameSelector(state, props),
    categories: currentCategoriesSelector(state, props)
  }
}

export default connect(mapStateToProps)(MasterEntry)
