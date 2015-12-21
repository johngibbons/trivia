import React from 'react';
import Question from './Question';

 const QuestionList = ({
  questions,
  isEditable,
  entry,
  onRemove,
  onUpdate,
  onAddAnswer,
  onRemoveAnswer,
  onUpdateAnswer,
  onSelectAnswer
}) => {
  return (
    <span>
      {questions.map(question => {
        return (
          <Question
            key={question.id}
            {...question}
            isEditable={isEditable}
            entry={entry}
            onRemove={onRemove}
            onUpdate={onUpdate}
            onAddAnswer={onAddAnswer}
            onRemoveAnswer={onRemoveAnswer}
            onUpdateAnswer={onUpdateAnswer}
            onSelectAnswer={onSelectAnswer}
          />
        );
      })}
    </span>
  );
};

QuestionList.defaultProps = {
  isEditable: false
};

QuestionList.PropTypes = {
  questions: React.PropTypes.array.isRequired,
  isEditable: React.PropTypes.bool.isRequired,
  entry: React.PropTypes.string,
  onRemove: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onAddAnswer: React.PropTypes.func,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default QuestionList
