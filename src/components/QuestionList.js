import React from 'react';
import Question from './Question';

 const QuestionList = ({
  questions,
  isEditable,
  entry,
  answersById,
  onRemove,
  onUpdate,
  onAddAnswer,
  onRemoveAnswer,
  onUpdateAnswer,
  onSelectAnswer
}) => {
  const getAnswers = (answers) => {
    if (answers) {
      return answers.map(id => answersById[id]);
    }
    return [];
  };
  return (
    <span>
      {questions.map(question => {
        question.answers = getAnswers(question.answers);
        return (
          <Question
            key={question.id}
            {...question}
            isEditable={isEditable}
            entry={entry}
            onRemove={onRemove}
            onUpdate={onUpdate}
            onAddAnswer={onAddAnswer}
            onRemoveAnswer={onRemoveAnswer.bind(null, question.id)}
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
