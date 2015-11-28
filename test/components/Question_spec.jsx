import Question from '../../src/components/Question';
import React from 'react/addons';
import {List} from 'immutable';
import {expect} from 'chai';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
  createRenderer
} = React.addons.TestUtils;

const renderer = createRenderer();

describe('Question', () => {

  it('renders a set of answers', () => {
    const component = renderIntoDocument(
      <Question answers={['Brad Pitt', 'George Clooney']} />
    );
    const radios = scryRenderedDOMComponentsWithTag(component, 'input');

    expect(radios.length).to.equal(2);
    expect(radios[0].getAttribute('value')).to.equal('Brad Pitt');
    expect(radios[1].getAttribute('value')).to.equal('George Clooney');
  });

  it('adds correct class when isCorrect set to true', () => {
    renderer.render(
      <Question isCorrect={true} hasResult={true} />
    );
    const result = renderer.getRenderOutput();
    expect(result.props.className).to.contain('correct');
  });

  it('renders as a pure component', () => {
    const answers = ['Brad Pitt', 'George Clooney'];
    const component = renderIntoDocument(
      <Question answers={answers} />
    );
    let firstAnswer = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    expect(firstAnswer.getAttribute('value')).to.equal('Brad Pitt');

    answers[0] = 'Matt Damon';
    component.setProps({answers: answers});
    firstAnswer = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    expect(firstAnswer.getAttribute('value')).to.equal('Brad Pitt');
  });

  it('does update DOM when prop changes', () => {
    const answers = List.of('Brad Pitt', 'George Clooney');
    const component = renderIntoDocument(
      <Question answers={answers} />
    );
    let firstAnswer = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    expect(firstAnswer.getAttribute('value')).to.equal('Brad Pitt');

    const newAnswers = answers.set(0, 'Matt Damon');
    component.setProps({answers: newAnswers});
    firstAnswer = scryRenderedDOMComponentsWithTag(component, 'input')[0];
    expect(firstAnswer.getAttribute('value')).to.equal('Matt Damon');

  });

});
