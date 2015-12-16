import React from 'react';
import {connect} from 'react-redux';
import {removeAnswer, updateAnswerAttr, updateEntryAttr} from '../actions/index';

import Answer from '../components/Answer';
import SmRemoveBtn from '../components/SmRemoveBtn';

class AnswerContainer extends React.Component {
  render() {
    return(
      <Answer
        {...this.props}
        selected={this.getSelectedAnswer.call(this)}
        onUpdateText={this.updateText.bind(this)}
        onRemoveAnswer={this.removeAnswer.bind(this)}
        onSelectAnswer={this.selectAnswer.bind(this)}
        getContextualIcon={this.getContextualIcon.bind(this)}
      />
    );
  }

  updateText(input) {
    this.props.dispatch(updateAnswerAttr({ id: this.props.id, text: input }));
  }

  removeAnswer() {
    this.props.dispatch(removeAnswer(this.props.id, this.props.question));
  }

  selectAnswer() {
    this.props.dispatch(updateEntryAttr({
      id: this.props.entry,
      selections: {
        [this.props.question]: {
          selected: this.props.id
        }
      }
    }));
  }

  getSelectedAnswer() {
    if (this.props.entriesById[this.props.entry]) {
      const entryById = this.props.entriesById[this.props.entry];
      const question = entryById.selections && entryById.selections[this.props.question];
      return question ? question.selected === this.props.id : false;
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
      return <span className="glyphicon glyphicon-record"></span>;
    }
  }

}

export default connect()(AnswerContainer);
