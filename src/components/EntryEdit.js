import React from 'react';

import QuestionListContainer from '../containers/QuestionListContainer';

export default ({
  questions
}) => {
  return (
    <div className="container">
      <QuestionListContainer
        questions={questions}
        editable={false}
      />
    </div>
  );
}
