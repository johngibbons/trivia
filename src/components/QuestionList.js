import React from 'react';
import Question from './Question';
import NewQuestionBtn from './NewQuestionBtn';

const QuestionList = ({
  questions,
  isEditable,
  isSelectable,
  entry,
  answersById,
  onAdd,
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

  const getBlankCards = () => {
    const numLeft = questions.length % 3;

    if (isEditable) {
      if (numLeft === 2) {
        return [];
      } else if (numLeft === 1) {
        return [''];
      } else {
        return (['', '']);
      }
    } else {
      if (numLeft === 2) {
        return [''];
      } else if (numLeft === 1) {
        return ['', ''];
      } else {
        return ([]);
      }
    }

  };

  return (
    <div className='card-deck'>
      {questions.map(question => {
        return (
          <Question
            key={question.id}
            {...question}
            answers = {getAnswers(question.answers)}
            isEditable={isEditable}
            isSelectable={isSelectable}
            entry={entry}
            onRemove={onRemove}
            onUpdate={onUpdate}
            onAddAnswer={onAddAnswer}
            onRemoveAnswer={onRemoveAnswer && onRemoveAnswer.bind(null, question.id)}
            onUpdateAnswer={onUpdateAnswer}
            onSelectAnswer={onSelectAnswer}
          />
        );
      })}
      {isEditable &&
        <NewQuestionBtn save={onAdd}/>
      }
      {getBlankCards().map((_, i) => {
        return (
          <div
            key={i}
            className='card question'
            style={{
              flexBasis: '30%',
              border: 'none'
            }}
          />
        );
      })}
    </div>
  );

};

QuestionList.defaultProps = {
  isEditable: false,
  isSelectable: false,
  questions: []
};

QuestionList.PropTypes = {
  questions: React.PropTypes.array.isRequired,
  isEditable: React.PropTypes.bool,
  isSelectable: React.PropTypes.bool,
  entry: React.PropTypes.string,
  onRemove: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onAddAnswer: React.PropTypes.func,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default QuestionList;
