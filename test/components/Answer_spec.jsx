import React from 'react';
import Answer from '../../src/components/Answer';
import {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Answer', () => {

  it('invokes a callback when selected', () => {
    let chosenAnswer;
    const chooseAnswer = (answer) => chosenAnswer = answer;
    const component = renderIntoDocument(
      <Answer
        text="Brad Pitt"
        chooseAnswer={chooseAnswer}
      />
    );
    const option = findRenderedDOMComponentWithTag(component, 'a');
    Simulate.click(option);
    expect(chosenAnswer).to.equal('Brad Pitt');
  });

  it('shows correct text', () => {
    const component = renderIntoDocument(
      <Answer
        text="Brad Pitt"
      />
    );
    const ans = findRenderedDOMComponentWithTag(component, 'a');
    expect(ans.textContent).to.equal('Brad Pitt');
  })

});
