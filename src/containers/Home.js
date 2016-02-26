import React from 'react';
import {connect} from 'react-redux';
import {addGame, addAnswers, addQuestions} from '../actions/index';
import shortid from 'shortid';

import NewestGames from '../components/NewestGames';

class Home extends React.Component {
  render() {
    this.newId = shortid.generate();
    return(
      <div>
        <div className="home jumbotron">
          <div className='container'>
            <h1 className='display-4'>Welcome to Trvia</h1>
            <p className="lead">click below to get started</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={this.props.currentUser.username ?
                this.handleNewGame.bind(this) :
                  this.props.toggleLoginModal
              }
            >Create A Game</button>
            <p className='secondary-instructions'>or use one of the games below as a starting point by clicking <strong>'clone this game'</strong></p>
          </div>
        </div>
        <div className="container">
          <NewestGames
            games={this.props.games}
            onCloneGame={this.handleCloneGame.bind(this)}
            onClickGame={this.handleClickGame.bind(this)}
          />
        </div>
      </div>
    );
  }

  handleClickGame(game) {
    this.props.history.push(`/games/${game}`);
  }

  handleNewGame() {
    this.props.dispatch(addGame({id: this.newId, user: this.props.currentUser.id}));
    this.props.history.pushState(null, `games/${this.newId}/edit`);
  }

  handleCloneGame(game) {
    const newGameId = shortid.generate();

    const clonedQuestions = game.questions.reduce((accQuestions, questionId) => {
      const newQuestionId = shortid.generate();
      const question = this.props.questionsById[questionId];

      const clonedAnswers = question.answers.reduce((accAnswers, answerId) => {
        const newAnswerId = shortid.generate();
        const answer = this.props.answersById[answerId];

        return {
          ...accAnswers,
          [newAnswerId]: {
            ...answer,
            id: newAnswerId,
            question: newQuestionId,
            created_at: new Date().getTime(),
            updated_at: null
          }
        };

      }, {});

      this.props.dispatch(addAnswers(clonedAnswers));

      return {
        ...accQuestions,
        [newQuestionId]: {
          ...question,
          id: newQuestionId,
          game: newGameId,
          answers: Object.keys(clonedAnswers),
          created_at: new Date().getTime(),
          updated_at: null
        }
      };

    }, {});

    this.props.dispatch(addQuestions(clonedQuestions));

    const clonedGame = {
      id: newGameId,
      title: game.title,
      user: this.props.currentUser.id,
      questions: Object.keys(clonedQuestions)
    };

    this.props.dispatch(addGame(clonedGame));

    this.props.history.pushState(null, `games/${newGameId}/edit`);
  }
}

function getNewestGames(gamesById) {
  return Object.keys(gamesById)
    .map(id => gamesById[id])
    .sort((a,b) => b.created_at - a.created_at)
    .slice(0, 10);
}

function mapStateToProps(state) {
  const gamesById = state.remote.gamesById || {};

  return {
    currentUser: state.client.currentUser,
    games: getNewestGames(gamesById) || [],
    questionsById: state.remote.questionsById,
    answersById: state.remote.answersById
  };
}

export default connect(mapStateToProps)(Home);
