import Answer from '../../src/components/Answer';
import React from 'react/addons';
import {expect} from 'chai';

const {
  renderIntoDocument,
  Simulate,
  findRenderedDOMComponentWithTag
} = React.addons.TestUtils;

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
    const radio = findRenderedDOMComponentWithTag(component, 'input');
    Simulate.click(radio);
    expect(chosenAnswer).to.equal('Brad Pitt');
  });

});
