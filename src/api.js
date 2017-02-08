import { database } from 'firebase';
import Game from './models/Game';
import Group from './models/Group';
import Entry from './models/Entry';

export default class API {
  static saveTitle(title) {
    return database().ref(`/titles/${title.get('id')}`).set(title.toJS()).then(title => console.log('TITLE', title));
  }

  static savePerson(person) {
    return database().ref(`/people/${person.get('id')}`).set(person.toJS());
  }

  static createGameId() {
    return database().ref().child('games').push().key;
  }

  static createGame(newGameId, game) {
    const updates = {
      [`/games/${newGameId}`]: new Game({ ...game, id: newGameId }).toJS(),
    }
    return database().ref().update(updates);
  }

  static createGroupId() {
    return database().ref().child('groups').push().key;
  }

  static createGroup(newGroupId, group, userId) {
    const updates = {
      [`/groups/${newGroupId}`]: new Group({ ...group, id: newGroupId }).toJS(),
      [`/users/${userId}/groups/${newGroupId}`]: { admin: true }
    }
    return database().ref().update(updates);
  }

  static createEntryId() {
    return database().ref().child('entries').push().key;
  }

  static createEntry(newEntryId, entry) {
    const updates = {
      [`/entries/${newEntryId}`]: new Entry({ ...entry, id: newEntryId }).toJS(),
      [`/groups/${entry.group}/entries/${newEntryId}`]: true,
      [`/users/${entry.user}/entries/${newEntryId}`]: true
    }
    return database().ref().update(updates);
  }
}
