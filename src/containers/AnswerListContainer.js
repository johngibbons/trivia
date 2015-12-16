import React from 'react';
import AnswerList from '../components/AnswerList';
import {connect} from 'react-redux';

class AnswerListContainer extends React.Component {
  render() {
    return(
      <AnswerList
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    answersById: state.answersById,
    entriesById: state.entriesById
  }
}

export default connect(mapStateToProps)(AnswerListContainer);
