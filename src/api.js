import { database, auth } from "firebase";
import { Map } from "immutable";
import Game from "./models/Game";
import Group from "./models/Group";
import Entry from "./models/Entry";

export default class API {
  static signOut() {
    return auth().signOut();
  }

  static saveTitle(title) {
    return database()
      .ref(`/titles/${title.get("id")}`)
      .set(title.toJS());
  }

  static savePerson(person) {
    return database()
      .ref(`/people/${person.get("id")}`)
      .set(person.toJS());
  }

  static createUser(user) {
    return database().ref(`/users/${user.id}`).set(user.toJS());
  }

  static createGameId() {
    return database().ref().child("games").push().key;
  }

  static createGame(newGameId, game) {
    const updates = {
      [`/games/${newGameId}`]: new Game({ ...game, id: newGameId }).toJS(),
    };
    return database().ref().update(updates);
  }

  static createGroupId() {
    return database().ref().child("groups").push().key;
  }

  static createGroup(newGroupId, group, user, categoryValues) {
    const updates = {
      [`/groups/${newGroupId}`]: new Group({
        ...group,
        id: newGroupId,
        admin: user.id,
        values: new Map(categoryValues),
      }).toJS(),
      [`/users/${user.id}/groups/${newGroupId}`]: { admin: true },
      [`/games/${group.game}/groups/${newGroupId}`]: true,
    };
    return database().ref().update(updates);
  }

  static createEntryId() {
    return database().ref().child("entries").push().key;
  }

  static createEntry(newEntryId, entry, user) {
    const updates = user.groups.get(entry.group)
      ? {
          [`/entries/${newEntryId}`]: new Entry({
            ...entry,
            id: newEntryId,
          }).toJS(),
          [`/groups/${entry.group}/entries/${newEntryId}`]: true,
          [`/games/${entry.game}/entries/${newEntryId}`]: true,
          [`/users/${user.id}/entries/${newEntryId}`]: true,
        }
      : {
          [`/entries/${newEntryId}`]: new Entry({
            ...entry,
            id: newEntryId,
          }).toJS(),
          [`/groups/${entry.group}/entries/${newEntryId}`]: true,
          [`/games/${entry.game}/entries/${newEntryId}`]: true,
          [`/users/${user.id}/groups/${entry.group}`]: true,
          [`/users/${user.id}/entries/${newEntryId}`]: true,
        };
    return database().ref().update(updates);
  }

  static selectNominee(entryId, nominee) {
    return database()
      .ref(`/entries/${entryId}/selections/${nominee.category}`)
      .set(nominee.id);
  }

  static selectCorrectNominee(nominee) {
    const key = database()
      .ref()
      .child(`games/${nominee.game}/answeredOrder`)
      .push().key;
    const updates = {
      [`/categories/${nominee.category}/correctAnswer`]: nominee.id,
      [`/games/${nominee.game}/answeredOrder/${key}`]: nominee.id,
    };
    return database().ref().update(updates);
  }
}
