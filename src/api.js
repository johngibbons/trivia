import { database } from 'firebase';

export default class API {
  static saveTitle(title) {
    return database().ref(`/titles/${title.get('id')}`).set(title.toJS()).then(title => console.log('TITLE', title));
  }

  static savePerson(person) {
    return database().ref(`/people/${person.get('id')}`).set(person.toJS());
  }

  static createGroupId() {
    return database().ref().child('groups').push().key;
  }

  static createGroup(newGroupId, group, userId) {
    const updates = {
      [`/groups/${newGroupId}`]: group,
      [`/users/${userId}/groups/${newGroupId}`]: { admin: true }
    }
    return database().ref().update(updates);
  }
}
