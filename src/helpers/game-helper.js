import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";
import data from "../awardsShows/2020Oscars";
import { CURRENT_GAME } from "../constants";

export async function save(overwrite = false) {
  const dup = await database()
    .ref("categories")
    .orderByChild("game")
    .equalTo(CURRENT_GAME)
    .once("value");

  const isDuplicate = !!dup.val();

  // don't overwrite existing game
  if (isDuplicate && !overwrite) return;

  console.log("overwriting");

  Object.keys(data.categories).map(key => {
    const categoryKey = database()
      .ref()
      .child("categories")
      .push().key;
    const updates = {
      [`/categories/${categoryKey}`]: new Category({
        id: categoryKey,
        value: data.categories[key].value,
        name: data.categories[key].name,
        game: CURRENT_GAME
      }).toJS(),
      [`/games/${CURRENT_GAME}/categories/${categoryKey}`]: true,
      [`/games/${CURRENT_GAME}/id`]: CURRENT_GAME
    };
    database()
      .ref()
      .update(updates);

    data.categories[key].nominees.map(nominee => {
      const nomineeKey = database()
        .ref()
        .child("nominees")
        .push().key;
      const updates = {
        [`/nominees/${nomineeKey}`]: new Nominee({
          ...nominee,
          id: nomineeKey,
          category: categoryKey,
          game: CURRENT_GAME
        }).toJS(),
        [`/categories/${categoryKey}/nominees/${nomineeKey}`]: true
      };
      database()
        .ref()
        .update(updates);
    });
  });
}

export async function saveImages(overwrite) {
  const titlesReq = await database()
    .ref("/titles")
    .once("value");
  const peopleReq = await database()
    .ref("/people")
    .once("value");
  const nomineesReq = await database()
    .ref("/nominees")
    .once("value");

  const titles = titlesReq.val();
  const people = peopleReq.val();
  const nominees = nomineesReq.val();

  const titlesArr = Object.keys(titles).map(key => titles[key]);
  const peopleArr = Object.keys(people).map(key => people[key]);
  const nomineesArr = Object.keys(nominees).map(key => nominees[key]);
  const all = [...titlesArr, ...peopleArr];

  nomineesArr.forEach(nominee => {
    if (!overwrite && nominee.imageUrl) return;
    const match = findMatch(all, nominee);
    if (!match) {
      if (!nominee.imageUrl) {
        console.log("nominee without match:", nominee.text);
      }
      return;
    }
    const isPerson = match.media_type === "person";
    const image = match && (isPerson ? match.profile_path : match.poster_path);
    if (image) setImage(nominee, image);
  });
}

export async function deleteGame(deleteGroups = false) {
  const categoriesToDelete = database()
    .ref("categories")
    .orderByChild("game")
    .equalTo(CURRENT_GAME);

  const categoriesResponse = await categoriesToDelete.once("value");
  const categoriesObj = categoriesResponse.val();

  categoriesObj &&
    Object.values(categoriesObj).forEach(async category => {
      await database()
        .ref("nominees")
        .orderByChild("category")
        .equalTo(category.id)
        .ref.remove();
    });

  await categoriesToDelete.ref.remove();

  if (deleteGroups) {
    const groupsToDelete = database()
      .ref("groups")
      .orderByChild("game")
      .equalTo(CURRENT_GAME);

    const groupsResponse = await groupsToDelete.once("value");
    const groupsObj = groupsResponse.val();

    groupsObj &&
      Object.values(groupsObj).forEach(async group => {
        const entriesToDelete = await database()
          .ref("entries")
          .orderByChild("group")
          .equalTo(group.id);

        const entriesResponse = await entriesToDelete.once("value");
        const entriesObj = entriesResponse.val();
        entriesObj &&
          Object.values(entriesObj).forEach(async entry => {
            const userWithEntriesToDelete = await database()
              .ref(`users/${entry.user}/entries/${entry.id}`)
              .remove();
          });

        entriesToDelete.ref.remove();
      });

    await groupsToDelete.ref.remove();
  }

  await database()
    .ref(`games/${CURRENT_GAME}`)
    .remove();
}

function findMatch(titlesAndPeopleArray, nomineeToFind) {
  const matches = titlesAndPeopleArray.filter(titleOrPerson => {
    const toOptionalLowercaseText = text => (text ? text.toLowerCase() : "");
    const titleOrPersonStrings = [
      titleOrPerson.title,
      titleOrPerson.original_title,
      titleOrPerson.name
    ].map(toOptionalLowercaseText);
    const nomineeToFindStrings = [
      nomineeToFind.text,
      nomineeToFind.secondaryText
    ].map(toOptionalLowercaseText);

    let hasMatch = false;
    for (const titleOrPersonString of titleOrPersonStrings) {
      if (hasMatch) {
        return true;
      }
      for (const nomineeToFindString of nomineeToFindStrings) {
        if (hasMatch) {
          return true;
        }
        const areStringsPresentAndMatch =
          titleOrPersonString &&
          nomineeToFindString &&
          titleOrPersonString === nomineeToFindString;

        if (areStringsPresentAndMatch) {
          hasMatch = true;
        }
      }
    }

    return hasMatch;
  });
  const personMatch = matches.filter(match => match.media_type === "person");
  return personMatch && personMatch.length ? personMatch[0] : matches[0];
}

function setImage(nominee, image) {
  database()
    .ref()
    .update({
      [`/nominees/${nominee.id}/imageUrl`]: `https://image.tmdb.org/t/p/w500${image}`
    });
}
