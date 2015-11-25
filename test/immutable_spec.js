import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addQuestion(currentState, question) {
      return currentState.push(question);
    }

    it('is immutable', () => {
      let state = List.of('First question', 'Another question');
      let nextState = addQuestion(state, 'A third question');

      expect(nextState).to.equal(List.of(
        'First question',
        'Another question',
        'A third question'
      ));
      expect(state).to.equal(List.of(
        'First question',
        'Another question'
      ));
    });

  });

  describe('a tree', () => {

    function addQuestion(currentState, question) {
      return currentState.set(
        'questions',
        currentState.get('questions').push(question)
      );
    }

    function conciseAdd(currentState, question) {
      return currentState.update('questions', questions => questions.push(question));
    }

    it('is immutable', () => {
      let state = Map({
        questions: List.of('First question', 'Another question')
      });
      let nextState = addQuestion(state, 'A third question');
      let thirdState = conciseAdd(nextState, 'A fourth');

      expect(nextState).to.equal(Map({
        questions: List.of(
          'First question',
          'Another question',
          'A third question'
        )
      }));

      expect(thirdState).to.equal(Map({
        questions: List.of(
          'First question',
          'Another question',
          'A third question',
          'A fourth'
        )
      }));

      expect(state).to.equal(Map({
        questions: List.of(
          'First question',
          'Another question'
        )
      }));
    });

  });

});
