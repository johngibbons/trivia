import { database } from 'firebase';
import Game from './models/Game';
import Group from './models/Group';
import Entry from './models/Entry';

export default class API {
  static saveTitle(title) {
    return database().ref(`/titles/${title.get('id')}`).set(title.toJS());
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

  static createGroup(newGroupId, group, user) {
    console.log(user.toJS())
    const updates = {
      [`/groups/${newGroupId}`]: new Group({
        ...group,
        id: newGroupId,
        admin: user.id
      }).toJS(),
      [`/users/${user.id}`]: {
        ...user.toJS(),
        groups: {
          ...user.groups,
          [newGroupId]: { admin: true }
        }
      },
      [`/games/${group.game}/groups/${newGroupId}`]: true
    }
    return database().ref().update(updates);
  }

  static createEntryId() {
    return database().ref().child('entries').push().key;
  }

  static createEntry(newEntryId, entry, user) {
    const updates = {
      [`/entries/${newEntryId}`]: new Entry({ ...entry, id: newEntryId }).toJS(),
      [`/groups/${entry.group}/entries/${newEntryId}`]: true,
      [`/games/${entry.game}/entries/${newEntryId}`]: true,
      [`/users/${user.id}`]: {
        ...user.toJS(),
        entries: {
          ...user.toJS().entries,
          [newEntryId]: true
        }
      },
    }
    return database().ref().update(updates);
  }

  static selectNominee(entryId, nominee) {
    return database()
      .ref(`/entries/${entryId}/selections/${nominee.category}`)
      .set(nominee.id)
  }

  static selectCorrectNominee(nominee) {
    const key = database()
      .ref().child(`games/${nominee.game}/answeredOrder`).push().key;
    const updates = {
      [`/categories/${nominee.category}/correctAnswer`]: nominee.id,
      [`/games/${nominee.game}/answeredOrder/${key}`]: nominee.id
    }
    return database().ref().update(updates)
  }
}
