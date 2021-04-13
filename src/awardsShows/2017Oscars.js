const oscars = {
  categories: {
    bestPicture: {
      value: 16,
      name: "Best Picture",
      nominees: [
        { text: "Arrival" },
        { text: "Fences" },
        { text: "Hacksaw Ridge" },
        { text: "Hell or High Water" },
        { text: "Hidden Figures" },
        { text: "La La Land" },
        { text: "Lion" },
        { text: "Manchester by the Sea" },
        { text: "Moonlight" },
      ],
    },
    bestActor: {
      value: 8,
      name: "Actor in a Leading Role",
      nominees: [
        { text: "Casey Affleck", secondaryText: "Manchester by the Sea" },
        { text: "Andrew Garfield", secondaryText: "Hacksaw Ridge" },
        { text: "Ryan Gosling", secondaryText: "La La Land" },
        { text: "Viggo Mortensen", secondaryText: "Captain Fantastic" },
        { text: "Denzel Washington", secondaryText: "Fences" },
      ],
    },
    bestActress: {
      value: 8,
      name: "Actress in a Leading Role",
      nominees: [
        { text: "Isabelle Huppert", secondaryText: "Elle" },
        { text: "Ruth Negga", secondaryText: "Loving" },
        { text: "Natalie Portman", secondaryText: "Jackie" },
        { text: "Emma Stone", secondaryText: "La La Land" },
        { text: "Meryl Streep", secondaryText: "Florence Foster Jenkins" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Actor in a Supporting Role",
      nominees: [
        { text: "Mahershala Ali", secondaryText: "Moonlight" },
        { text: "Jeff Bridges", secondaryText: "Hell or High Water" },
        { text: "Lucas Hedges", secondaryText: "Manchester by the Sea" },
        { text: "Dev Patel", secondaryText: "Lion" },
        { text: "Michael Shannon", secondaryText: "Nocturnal Animals" },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Actress in a Supporting Role",
      nominees: [
        { text: "Viola Davis", secondaryText: "Fences" },
        { text: "Naomie Harris", secondaryText: "Moonlight" },
        { text: "Nicole Kidman", secondaryText: "Lion" },
        { text: "Octavia Spencer", secondaryText: "Hidden Figures" },
        { text: "Michelle Williams", secondaryText: "Manchester by the Sea" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Animated Feature Film",
      nominees: [
        { text: "Kubo and the Two Strings" },
        { text: "Moana" },
        { text: "My Life as a Zucchini" },
        { text: "The Red Turtle" },
        { text: "Zootopia" },
      ],
    },
    cinematography: {
      value: 2,
      name: "Cinematography",
      nominees: [
        { text: "Arrival" },
        { text: "La La Land" },
        { text: "Lion" },
        { text: "Moonlight" },
        { text: "Silence" },
      ],
    },
    costumeDesign: {
      value: 1,
      name: "Costume Design",
      nominees: [
        { text: "Allied" },
        { text: "Fantastic Beasts and Where to Find Them" },
        { text: "Florence Foster Jenkins" },
        { text: "Jackie" },
        { text: "La La Land" },
      ],
    },
    directing: {
      value: 4,
      name: "Directing",
      nominees: [
        { text: "Arrival", secondaryText: "Denis Villeneuve" },
        { text: "Hacksaw Ridge", secondaryText: "Mel Gibson" },
        { text: "La La Land", secondaryText: "Damien Chazelle" },
        { text: "Manchester by the Sea", secondaryText: "Kenneth Lonergan" },
        { text: "Moonlight", secondaryText: "Barry Jenkins" },
      ],
    },
    documentaryFeature: {
      value: 4,
      name: "Documentary Feature",
      nominees: [
        {
          text: "Fire at Sea",
          secondaryText: "Gianfranco Rosi and Donatella Palermo",
        },
        {
          text: "I Am Not Your Negro",
          secondaryText: "Raoul Peck, Rémi Grellety and Hébert Peck",
        },
        {
          text: "Life, Animated",
          secondaryText: "Roger Ross Williams and Julie Goldman",
        },
        {
          text: "O.J.: Made in America",
          secondaryText: "Ezra Edelman and Caroline Waterlow",
        },
        {
          text: "13th",
          secondaryText: "Ava DuVernay, Spencer Averick and Howard Barish",
        },
      ],
    },
    documentaryShort: {
      value: 2,
      name: "Documentary Short Subject",
      nominees: [
        { text: "Extremis" },
        { text: "4.1 Miles" },
        { text: "Joe's Violin" },
        { text: "Watani: My Homeland" },
        { text: "The White Helmets" },
      ],
    },
    filmEditing: {
      value: 1,
      name: "Film Editing",
      nominees: [
        { text: "Arrival" },
        { text: "Hacksaw Ridge" },
        { text: "Hell or High Water" },
        { text: "La La Land" },
        { text: "Moonlight" },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "Foreign Language Film",
      nominees: [
        { text: "Land of Mine", secondaryText: "Denmark" },
        { text: "A Man Called Ove", secondaryText: "Sweden" },
        { text: "The Salesman", secondaryText: "Iran" },
        { text: "Tanna", secondaryText: "Australia" },
        { text: "Toni Erdmann", secondaryText: "Germany" },
      ],
    },
    makeupAndHairstyling: {
      value: 1,
      name: "Makeup and Hairstyling",
      nominees: [
        { text: "A Man Called Ove" },
        { text: "Star Trek Beyond" },
        { text: "Suicide Squad" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Music (Original Score)",
      nominees: [
        { text: "Jackie", secondaryText: "Mica Levi" },
        { text: "La La Land", secondaryText: "Justin Hurwitz" },
        { text: "Lion", secondaryText: "Dustin O'Halloran and Hauschka" },
        { text: "Moonlight", secondaryText: "Nicholas Britell" },
        { text: "Passengers", secondaryText: "Thomas Newman" },
      ],
    },
    musicOriginalSong: {
      value: 1,
      name: "Music (Original Song)",
      nominees: [
        { text: "La La Land", secondaryText: "Audition (The Fools Who Dream)" },
        { text: "Trolls", secondaryText: "Can't Stop The Feeling" },
        { text: "La La Land", secondaryText: "City of Stars" },
        {
          text: "Jim: The James Foley Story",
          secondaryText: "The Empty Chair",
        },
        { text: "Moana", secondaryText: "How Far I'll Go" },
      ],
    },
    productionDesign: {
      value: 1,
      name: "Production Design",
      nominees: [
        { text: "Arrival" },
        { text: "Fantastic Beasts and Where to Find Them" },
        { text: "Hail, Caesar!" },
        { text: "La La Land" },
        { text: "Passengers" },
      ],
    },
    shortFilmAnimated: {
      value: 1,
      name: "Short Film (Animated)",
      nominees: [
        { text: "Blind Vaysha" },
        { text: "Borrowed Time" },
        { text: "Pear Cider and Cigarettes" },
        { text: "Pearl" },
        { text: "Piper" },
      ],
    },
    shortFilmLiveAction: {
      value: 1,
      name: "Short Film (Live Action)",
      nominees: [
        { text: "Ennemis Intérieurs" },
        { text: "La femme et le TGV" },
        { text: "Silent Nights" },
        { text: "Sing" },
        { text: "Timecode" },
      ],
    },
    soundEditing: {
      value: 1,
      name: "Sound Editing",
      nominees: [
        { text: "Arrival" },
        { text: "Deepwater Horizon" },
        { text: "Hacksaw Ridge" },
        { text: "La La Land" },
        { text: "Sully" },
      ],
    },
    soundMixing: {
      value: 1,
      name: "Sound Mixing",
      nominees: [
        { text: "Arrival" },
        { text: "Hacksaw Ridge" },
        { text: "La La Land" },
        { text: "Rogue One: A Star Wars Story" },
        { text: "13 Hours: The Secret Soldiers of Benghazi" },
      ],
    },
    visualEffects: {
      value: 1,
      name: "Visual Effects",
      nominees: [
        { text: "Deepwater Horizon" },
        { text: "Doctor Strange" },
        { text: "The Jungle Book" },
        { text: "Kubo and the Two Strings" },
        { text: "Rogue One: A Star Wars Story" },
      ],
    },
    writingAdaptedScreenplay: {
      value: 2,
      name: "Writing (Adapted Screenplay)",
      nominees: [
        { text: "Arrival", secondaryText: "Eric Heisserer" },
        { text: "Fences", secondaryText: "August Wilson" },
        {
          text: "Hidden Figures",
          secondaryText: "Allison Schroeder and Theodore Melfi",
        },
        { text: "Lion", secondaryText: "Luke Davies" },
        { text: "Moonlight", secondaryText: "Barry Jenkins" },
      ],
    },
    writingOriginalScreenplay: {
      value: 2,
      name: "Writing (Original Screenplay)",
      nominees: [
        { text: "Hell or High Water", secondaryText: "Taylor Sheridan" },
        { text: "La La Land", secondaryText: "Damien Chazelle" },
        {
          text: "The Lobster",
          secondaryText: "Yorgos Lanthimos, Efthimis Filippou",
        },
        { text: "Manchester by the Sea", secondaryText: "Kenneth Lonergan" },
        { text: "20th Century Women", secondaryText: "Mike Mills" },
      ],
    },
  },
};

import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";

export function save() {
  Object.keys(oscars.categories).map((key) => {
    const categoryKey = database().ref().child("categories").push().key;
    const updates = {
      [`/categories/${categoryKey}`]: new Category({
        id: categoryKey,
        value: oscars.categories[key].value,
        name: oscars.categories[key].name,
        game: "2017Oscars",
      }).toJS(),
      [`/games/2017Oscars/categories/${categoryKey}`]: true,
    };
    database().ref().update(updates);

    oscars.categories[key].nominees.map((nominee) => {
      const nomineeKey = database().ref().child("nominees").push().key;
      const updates = {
        [`/nominees/${nomineeKey}`]: new Nominee({
          ...nominee,
          id: nomineeKey,
          category: categoryKey,
          game: "2017Oscars",
        }).toJS(),
        [`/categories/${categoryKey}/nominees/${nomineeKey}`]: true,
      };
      database().ref().update(updates);
    });
  });
}

export function saveImages() {
  const titles = [];
  const people = [];
  database()
    .ref("/titles")
    .once("value", (snapshot) => {
      Object.keys(snapshot.val()).map((key) =>
        titles.push(snapshot.val()[key])
      );
      database()
        .ref("/people")
        .once("value", (snapshot) => {
          Object.keys(snapshot.val()).forEach((key) =>
            people.push(snapshot.val()[key])
          );
          const all = [...titles, ...people];
          database()
            .ref("/nominees")
            .once("value", (snapshot) => {
              Object.keys(snapshot.val()).forEach((key) => {
                const nominee = snapshot.val()[key];
                const match = all.filter((item) => {
                  if (!item.title || !nominee.text) return;
                  return (
                    item.original_title.toLowerCase() ===
                    nominee.text.toLowerCase()
                  );
                })[0];
                const image =
                  match &&
                  (match.profile_path ? match.profile_path : match.poster_path);
                image &&
                  database()
                    .ref()
                    .update({
                      [`/nominees/${nominee.id}/imageUrl`]: `https://image.tmdb.org/t/p/w500${image}`,
                    });
              });
            });
        });
    });
}
