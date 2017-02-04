import { database } from 'firebase';

export default class API {
  static saveTitle(title) {
    return new Promise(database().ref(`/titles/${title.get('id')}`).set(title.toJS()));
  }

  static savePerson(person) {
    return database().ref(`/people/${person.get('id')}`).set(person.toJS());
  }
}
