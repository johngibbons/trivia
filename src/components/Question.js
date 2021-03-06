import React from 'react';
import EditableTextContainer from '../containers/EditableTextContainer';
import AnswerList from './AnswerList';
import PanelFooterBtn from './PanelFooterBtn';
import SmRemoveBtn from './SmRemoveBtn';

const Question = ({
  id,
  text,
  ptValue,
  correctAnswer,
  answers,
  game,
  entry,
  isEditable,
  isSelectable,
  onRemove,
  onUpdate,
  onAddAnswer,
  onRemoveAnswer,
  onUpdateAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="card question">
      <div className="card-header">
        <h5 className='question-text'>
          { isEditable ?
            <EditableTextContainer
              id={id}
              attr='text'
              type='text'
              value={text}
              placeholder='Add a question...'
              save={onUpdate}
            /> : text
          }
        </h5>
        <h6 className='question-value'>
          { isEditable ?
            <EditableTextContainer
              id={id}
              attr='ptValue'
              type='number'
              value={`${ptValue} pts`}
              placeholder='point value...'
              save={onUpdate}
              showInput={!ptValue}
            /> : `${ptValue} pts`
          }
        </h6>
        { isEditable &&
          <SmRemoveBtn
            id={id}
            handleRemove={onRemove}
          />
        }
      </div>
      <AnswerList
        answers={answers}
        question={id}
        correctAnswer={correctAnswer}
        entry={entry}
        isEditable={isEditable}
        isSelectable={isSelectable}
        onAddAnswer={onAddAnswer}
        onRemoveAnswer={onRemoveAnswer}
        onUpdateAnswer={onUpdateAnswer}
        onSelectAnswer={onSelectAnswer}
      />
      { isEditable &&
        <PanelFooterBtn
          onClick={() => onAddAnswer(id)}
        >Add answer...</PanelFooterBtn>
      }
    </div>
  );
};

Question.defaultProps = {
  answers: []
};

Question.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  ptValue: React.PropTypes.number,
  answers: React.PropTypes.array,
  game: React.PropTypes.string.isRequired,
  entry: React.PropTypes.object,
  isEditable: React.PropTypes.bool.isRequired,
  isSelectable: React.PropTypes.bool.isRequired,
  onRemove: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onAddAnswer: React.PropTypes.func,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default Question;
