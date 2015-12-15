import React from 'react';
import AnswerList from './AnswerList';
import EditableTextContainer from '../containers/EditableTextContainer';
import SmRemoveBtn from './SmRemoveBtn';

export default ({
  id,
  text,
  ptValue,
  answers,
  game,
  answersById,
  onRemove,
  onUpdateText,
  onUpdatePtValue
}) => {
  return (
    <div className="col-md-4">
      <div className="panel panel-default question">
        <div className="panel-heading clearfix">
          <h4>
            <EditableTextContainer
              type='text'
              value={text}
              placeholder='Add a question...'
              save={onUpdateText}
            />
          </h4>
          <EditableTextContainer
            type='number'
            value={`${ptValue} pts`}
            placeholder='e.g. 5'
            save={onUpdatePtValue}
            showInput={true}
          />
          <SmRemoveBtn
            handleRemove={onRemove}
            id={id}
            game={game}
          />
        </div>
        <div className="panel-body">
          <AnswerList
            answers={answers || []}
            answersById={answersById}
            question={id}
          />
        </div>
      </div>
    </div>
  );
}
