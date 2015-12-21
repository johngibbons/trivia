import React from 'react';
import {connect} from 'react-redux';
import {removeAnswer, updateAnswerAttr, addOrUpdateSelection} from '../actions/index';

import Answer from '../components/Answer';
import SmRemoveBtn from '../components/SmRemoveBtn';

class AnswerContainer extends React.Component {
  render() {
    return(
      <Answer
        {...this.props}
        selected={this.getSelectedAnswer.call(this)}
        onUpdateText={this.updateText.bind(this)}
        onRemoveAnswer={this.props.onRemoveAnswer(this.props.id)}
        onSelectAnswer={this.props.onSelectAnswer(this.props.id, this.props.question)}
        getContextualIcon={this.getContextualIcon.bind(this)}
      />
    );
  }

  updateText(input) {
    this.props.dispatch(updateAnswerAttr({ id: this.props.id, text: input }));
  }

  getSelectedAnswer() {
    if (this.props.entriesById[this.props.entry]) {
      const entryById = this.props.entriesById[this.props.entry];
      const selection = entryById.selections && entryById.selections[this.props.question];
      return selection ? selection === this.props.id : false;
    }
  }

  getContextualIcon() {
    if (this.props.editable) {
      return (
        <SmRemoveBtn
          handleRemove={this.removeAnswer}
        />
      );
    } else if (this.getSelectedAnswer()) {
      return <span className="glyphicon glyphicon-record right-centered"></span>;
    }
  }

}

export default connect()(AnswerContainer);
