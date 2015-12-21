import React from 'react';
import EditableTextContainer from '../containers/EditableTextContainer';
import AnswerList from './AnswerList';
import PanelFooterBtn from './PanelFooterBtn';
import SmRemoveBtn from './SmRemoveBtn';

const Question = ({
  id,
  text,
  ptValue,
  answers,
  game,
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
    <div className="col-md-4">
      <div className="panel panel-primary question">
        <div className="panel-heading clearfix">
          <h4>
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
          </h4>
          <h5>
            { isEditable ?
              <EditableTextContainer
                id={id}
                attr='ptValue'
                type='number'
                value={`${ptValue} pts`}
                placeholder='point value...'
                save={onUpdate}
                showInput={!ptValue && true}
              /> : `${ptValue} pts`
            }
          </h5>
          { isEditable &&
            <SmRemoveBtn
              id={id}
              game={game}
              handleRemove={onRemove}
            />
          }
        </div>
        <AnswerList
          answers={answers}
          question={id}
          isEditable={isEditable}
          entry={entry}
          onRemoveAnswer={onRemoveAnswer}
          onUpdateAnswer={onUpdateAnswer}
          onSelectAnswer={onSelectAnswer}
        />
        { isEditable &&
          <PanelFooterBtn
            onClick={onAddAnswer}
          >Add answer...</PanelFooterBtn>
        }
      </div>
    </div>
  );
};

Question.defaultProps = {
  answers: []
}

Question.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  ptValue: React.PropTypes.number,
  answers: React.PropTypes.array,
  game: React.PropTypes.string.isRequired,
  isEditable: React.PropTypes.bool.isRequired,
  entry: React.PropTypes.string,
  onRemove: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onAddAnswer: React.PropTypes.func,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default Question
