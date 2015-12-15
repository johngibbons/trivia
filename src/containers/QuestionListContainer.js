import React from 'react';
import {connect} from 'react-redux';
import QuestionList from '../components/QuestionList';

class QuestionListContainer extends React.Component {
  render() {
    return(
      <QuestionList
        {...this.props}
        questions={this.props.questions || []}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    questionsById: state.questionsById
  }
}

export default connect(mapStateToProps)(QuestionListContainer);
