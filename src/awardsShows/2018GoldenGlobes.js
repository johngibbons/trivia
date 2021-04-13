const goldenGlobes = {
  categories: {
    bestMotionPictureDrama: {
      value: 16,
      name: "Best Motion Picture - Drama",
      nominees: [
        { text: "Call Me by Your Name" },
        { text: "Dunkirk" },
        { text: "The Post" },
        { text: "The Shape of Water" },
        { text: "Three Billboards Outside Ebbing, Missouri" },
      ],
    },
    bestMotionPictureMusicalComedy: {
      value: 16,
      name: "Best Motion Picture - Musical or Comedy",
      nominees: [
        { text: "The Disaster Artist" },
        { text: "Get Out" },
        { text: "The Greatest Showman" },
        { text: "I, Tonya" },
        { text: "Lady Bird" },
      ],
    },
    bestTvSeriesDrama: {
      value: 16,
      name: "Best TV Series - Drama",
      nominees: [
        { text: "The Crown" },
        { text: "Game of Thrones" },
        { text: "The Handmaid's Tale" },
        { text: "Stranger Things" },
        { text: "This Is Us" },
      ],
    },
    bestTvSeriesMusicalComedy: {
      value: 16,
      name: "Best TV Series - Musical or Comedy",
      nominees: [
        { text: "Black-ish" },
        { text: "The Marvelous Mrs. Maisel" },
        { text: "Master of None" },
        { text: "SMILF" },
        { text: "Will & Grace" },
      ],
    },
    limitedSeriesTV: {
      value: 16,
      name: "Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Big Little Lies" },
        { text: "Fargo" },
        { text: "Feud: Bette and Joan" },
        { text: "The Sinner" },
        { text: "Top of the Lake: China Girl" },
      ],
    },
    bestActressDrama: {
      value: 8,
      name: "Best Performance by an Actress in a Motion Picture - Drama",
      nominees: [
        { text: "Jessica Chastain", secondaryText: "Molly's Game" },
        { text: "Sally Hawkins", secondaryText: "The Shape of Water" },
        {
          text: "Frances McDormand",
          secondaryText: "Three Billboards Outside Ebbing, Missouri",
        },
        { text: "Meryl Streep", secondaryText: "The Post" },
        {
          text: "Michelle Williams",
          secondaryText: "All the Money in the World",
        },
      ],
    },
    bestActorDrama: {
      value: 8,
      name: "Best Performance by an Actor in a Motion Picture - Drama",
      nominees: [
        { text: "Timothée Chalamet", secondaryText: "Call Me by Your Name" },
        { text: "Daniel Day-Lewis", secondaryText: "Phantom Thread" },
        { text: "Tom Hanks", secondaryText: "The Post" },
        { text: "Gary Oldman", secondaryText: "Darkest Hour" },
        { text: "Denzel Washington", secondaryText: "Roman J. Israel, Esq." },
      ],
    },
    bestActressMusicalComedy: {
      value: 8,
      name: "Best Actress in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Judi Dench", secondaryText: "Victoria & Abdul" },
        { text: "Margot Robbie", secondaryText: "I, Tonya" },
        { text: "Saoirse Ronan", secondaryText: "Lady Bird" },
        { text: "Emma Stone", secondaryText: "Battle of the Sexes" },
        { text: "Helen Mirren", secondaryText: "The Leisure Seeker" },
      ],
    },
    bestActorMusicalComedy: {
      value: 8,
      name:
        "Best Performance by an Actor in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Steve Carell", secondaryText: "Battle of the Sexes" },
        { text: "Ansel Elgort", secondaryText: "Baby Driver" },
        { text: "James Franco", secondaryText: "The Disaster Artist" },
        { text: "Hugh Jackman", secondaryText: "The Greatest Showman" },
        { text: "Daniel Kaluuya", secondaryText: "Get Out" },
      ],
    },
    bestActressTVDrama: {
      value: 8,
      name: "Best performance by Actress in a TV series - Drama",
      nominees: [
        { text: "Caitriona Balfe", secondaryText: "Outlander" },
        { text: "Claire Foy", secondaryText: "The Crown" },
        { text: "Maggie Gyllenhaal", secondaryText: "The Deuce" },
        { text: "Katherine Langford", secondaryText: "13 Reasons Why" },
        { text: "Elisabeth Moss", secondaryText: "The Handmaid's Tale" },
      ],
    },
    bestActorTVDrama: {
      value: 8,
      name: "Best performance by an Actor in a TV Series - Drama",
      nominees: [
        { text: "Sterling K. Brown", secondaryText: "This is Us" },
        { text: "Freddie Highmore", secondaryText: "The Good Docto" },
        { text: "Bob Odenkirk", secondaryText: "Better Call Saul" },
        { text: "Liev Schreiber", secondaryText: "Ray Donovan" },
        { text: "Jason Bateman", secondaryText: "Ozark" },
      ],
    },
    bestActressTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actress in a TV series - Musical or Comedy",
      nominees: [
        { text: "Pamela Adlon", secondaryText: "Better Things" },
        { text: "Alison Brie", secondaryText: "Glow" },
        { text: "Issa Rae", secondaryText: "Insecure" },
        {
          text: "Rachel Brosnahan",
          secondaryText: "The Marvelous Mrs. Maisel",
        },
        { text: "Frankie Shaw", secondaryText: "SMILF" },
      ],
    },
    bestActorTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actor in a TV series - Musical or Comedy",
      nominees: [
        { text: "Anthony Anderson", secondaryText: "Black-ish" },
        { text: "Aziz Ansari", secondaryText: "Master of None" },
        { text: "Kevin Bacon", secondaryText: "I Love Dick" },
        { text: "William H. Macy", secondaryText: "Shameless" },
        { text: "Eric McCormack", secondaryText: "Will and Grace" },
      ],
    },
    bestActorLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actor in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Robert De Niro", secondaryText: "The Wizard of Lies" },
        { text: "Jude Law", secondaryText: "The Young Pope" },
        { text: "Kyle MacLachlan", secondaryText: "Twin Peaks" },
        { text: "Ewan McGregor", secondaryText: "Fargo" },
        { text: "Geoffrey Rush", secondaryText: "Genius" },
      ],
    },
    bestActressLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actress in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Jessica Biel", secondaryText: "The Sinner" },
        { text: "Nicole Kidman", secondaryText: "Big Little Lies" },
        { text: "Jessica Lange", secondaryText: "Feud: Bette and Joan" },
        { text: "Susan Sarandon", secondaryText: "Feud: Bette and Joan" },
        { text: "Reese Witherspoon", secondaryText: "Big Little Lies" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Best Supporting Actor in a Motion Picture",
      nominees: [
        { text: "Willem Dafoe", secondaryText: "The Florida Project" },
        { text: "Armie Hammer", secondaryText: "Call Me by Your Name" },
        { text: "Richard Jenkins", secondaryText: "The Shape of Water" },
        {
          text: "Christopher Plummer",
          secondaryText: "All the Money in the World",
        },
        {
          text: "Sam Rockwell",
          secondaryText: "Three Billboards Outside Ebbing, Missouri",
        },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Best Supporting Actress in a Motion Picture",
      nominees: [
        { text: "Mary J. Blige", secondaryText: "Mudbound" },
        { text: "Hong Chau", secondaryText: "Downsizing" },
        { text: "Allison Janney", secondaryText: "I, Tonya" },
        { text: "Laurie Metcalf", secondaryText: "Lady Bird" },
        { text: "Octavia Spencer", secondaryText: "The Shape of Water" },
      ],
    },
    bestSupportingActorTV: {
      value: 4,
      name:
        "Best Performance by an Actor in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Alfred Molina", secondaryText: "Feud" },
        { text: "Alexander Skarsgård", secondaryText: "Big Little Lies" },
        { text: "David Thewlis", secondaryText: "Fargo" },
        { text: "David Harbour", secondaryText: "Stranger Things" },
        { text: "Christian Slater", secondaryText: "Mr. Robot" },
      ],
    },
    bestSupportingActressTV: {
      value: 4,
      name:
        "Best Performance by an Actress in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Laura Dern", secondaryText: "Big Little Lies" },
        { text: "Ann Dowd", secondaryText: "The Handmaid's Tale" },
        { text: "Chrissy Metz", secondaryText: "This Is Us" },
        { text: "Michelle Pfeiffer", secondaryText: "The Wizard of Lies" },
        { text: "Shailene Woodley", secondaryText: "Big Little Lies" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Best Animated Film",
      nominees: [
        { text: "The Boss Baby" },
        { text: "The Breadwinner" },
        { text: "Ferdinand" },
        { text: "Coco" },
        { text: "Loving Vincent" },
      ],
    },
    directing: {
      value: 4,
      name: "Best Director",
      nominees: [
        { text: "The Shape of Water", secondaryText: "Guillermo del Toro" },
        {
          text: "Three Billboards Outside Ebbing, Missouri",
          secondaryText: "Martin McDonagh",
        },
        { text: "Dunkirk", secondaryText: "Christopher Nolan" },
        { text: "All The Money in the World", secondaryText: "Ridley Scott" },
        { text: "The Post", secondaryText: "Steven Spielberg" },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "Best Motion Picture - Foreign Language",
      nominees: [
        { text: "A Fantastic Woman" },
        { text: "First They Killed My Father" },
        { text: "In the Fade" },
        { text: "Loveless" },
        { text: "The Square" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Best Original Score in a Motion Picture",
      nominees: [
        { text: "Three Billboards Outside Ebbing, Missouri" },
        { text: "The Shape of Water" },
        { text: "Phantom Thread" },
        { text: "The Post" },
        { text: "Dunkirk" },
      ],
    },
    screenplay: {
      value: 2,
      name: "Best Screenplay in a Motion Picture",
      nominees: [
        { text: "The Shape of Water" },
        { text: "Lady Bird" },
        { text: "The Post" },
        { text: "Three Billboards Outside Ebbing, Missouri" },
        { text: "Molly's Game" },
      ],
    },
  },
};

import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";

function reset() {
  const ref = database().ref("/games/2018GoldenGlobes/categories");
  ref
    .once("value")
    .then((category) => {
      Object.keys(category.val()).map((categoryKey) => {
        const catRef = database().ref(`/categories/${categoryKey}`);
        const nomineesRef = database().ref(
          `/categories/${categoryKey}/nominees`
        );
        nomineesRef.once("value").then((nominees) => {
          Object.keys(nominees.val()).map((nomineeKey) => {
            const nomineeRef = database().ref(`/nominees/${nomineeKey}`);
            nomineeRef
              .remove()
              .then(() => console.log(`removed nominee ${nomineeKey}`));
          });
        });
        catRef
          .remove()
          .then(() => console.log(`removed category ${categoryKey}`));
      });
    })
    .then(() =>
      ref.remove().then(() => console.log("removed categories from game"))
    );
}

export function save() {
  Object.keys(goldenGlobes.categories).map((key) => {
    const categoryKey = database().ref().child("categories").push().key;
    const updates = {
      [`/categories/${categoryKey}`]: new Category({
        id: categoryKey,
        value: goldenGlobes.categories[key].value,
        name: goldenGlobes.categories[key].name,
        game: "2018GoldenGlobes",
      }).toJS(),
      [`/games/2018GoldenGlobes/categories/${categoryKey}`]: true,
    };
    database().ref().update(updates);

    goldenGlobes.categories[key].nominees.map((nominee) => {
      const nomineeKey = database().ref().child("nominees").push().key;
      const updates = {
        [`/nominees/${nomineeKey}`]: new Nominee({
          ...nominee,
          id: nomineeKey,
          category: categoryKey,
          game: "2018GoldenGlobes",
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
        .orderByChild("name")
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
                  return (
                    (item.title || item.name).toLowerCase() ===
                    nominee.text.toLowerCase()
                  );
                })[0];
                if (!match) {
                  console.log("nominee without match:", nominee.text);
                  return;
                }
                const isPerson = match.media_type === "person";
                const image =
                  match && (isPerson ? match.profile_path : match.poster_path);
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
