import React from 'react';
import AnswerList from './AnswerList';
import EditableText from './EditableText';
import SmRemoveBtn from './SmRemoveBtn';

export default ({
  onRemove,
  onUpdateText,
  id,
  text,
  answers,
  game,
  answersById
}) => (
  <div className="col-md-4">
    <div className="panel panel-default question">
      <div className="panel-heading clearfix">
        <h3 className="no-margin">
          <EditableText
            className={'panel-title'}
            placeholder="Enter a question..."
            text={text}
            saveInput={onUpdateText}
          />
        </h3>
        <SmRemoveBtn
          handleRemove={onRemove}
          id={id}
          game={game}
        />
      </div>
      <div className="panel-body">
        <AnswerList
          answers={answers}
          answersById={answersById}
          question={id}
        />
      </div>
    </div>
  </div>
);
