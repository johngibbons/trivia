import React from 'react';
import EditableTextContainer from '../containers/EditableTextContainer';
import AnswerListContainer from '../containers/AnswerListContainer';
import PanelFooterBtn from './PanelFooterBtn';
import SmRemoveBtn from './SmRemoveBtn';

export default ({
  id,
  text,
  ptValue,
  answers,
  game,
  onRemove,
  onUpdateText,
  onUpdatePtValue,
  onAddAnswer
}) => {
  return (
    <div className="col-md-4">
      <div className="panel panel-primary question">
        <div className="panel-heading clearfix">
          <h4>
            <EditableTextContainer
              type='text'
              value={text}
              placeholder='Add a question...'
              save={onUpdateText}
            />
          </h4>
          <h5>
            <EditableTextContainer
              type='number'
              value={`${ptValue} pts`}
              placeholder='point value...'
              save={onUpdatePtValue}
              showInput={true}
            />
          </h5>
          <SmRemoveBtn
            handleRemove={onRemove}
            id={id}
            game={game}
          />
        </div>
        <AnswerListContainer
          answers={answers || []}
          question={id}
        />
        <PanelFooterBtn
          onClick={onAddAnswer}
        >Add answer...</PanelFooterBtn>
      </div>
    </div>
  );
}
