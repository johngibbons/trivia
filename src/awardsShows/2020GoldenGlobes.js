const goldenGlobes = {
  categories: {
    bestMotionPictureDrama: {
      value: 16,
      name: "Best Motion Picture - Drama",
      nominees: [
        { text: "The Two Popes" },
        { text: "1917" },
        { text: "The Irishman" },
        { text: "Joker" },
        { text: "Marriage Story" },
      ],
    },
    bestMotionPictureMusicalComedy: {
      value: 16,
      name: "Best Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Dolemite Is My Name" },
        { text: "Jojo Rabbit" },
        { text: "Knives Out" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "Rocketman" },
      ],
    },
    bestTvSeriesDrama: {
      value: 16,
      name: "Best TV Series - Drama",
      nominees: [
        { text: "Succession" },
        { text: "Big Little Lies" },
        { text: "The Crown" },
        { text: "Killing Eve" },
        { text: "The Morning Show" },
      ],
    },
    bestTvSeriesMusicalComedy: {
      value: 16,
      name: "Best TV Series - Musical or Comedy",
      nominees: [
        { text: "Barry" },
        { text: "Fleabag" },
        { text: "The Kominsky Method" },
        { text: "The Marvelous Mrs. Maisel" },
        { text: "The Politician" },
      ],
    },
    limitedSeriesTV: {
      value: 16,
      name: "Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Catch-22" },
        { text: "Chernobyl" },
        { text: "Fosse/Verdon" },
        { text: "The Loudest Voice" },
        { text: "Unbelievable" },
      ],
    },
    bestActressDrama: {
      value: 8,
      name: "Best Performance by an Actress in a Motion Picture - Drama",
      nominees: [
        { text: "Cynthia Erivo", secondaryText: "Harriet" },
        { text: "Scarlett Johansson", secondaryText: "Marriage Story" },
        { text: "Saoirse Ronan", secondaryText: "Little Women" },
        { text: "Charlize Theron", secondaryText: "Bombshell" },
        { text: "Renée Zellweger", secondaryText: "Judy" },
      ],
    },
    bestActorDrama: {
      value: 8,
      name: "Best Performance by an Actor in a Motion Picture - Drama",
      nominees: [
        { text: "Joaquin Phoenix", secondaryText: "Joker" },
        { text: "Jonathan Pryce", secondaryText: "The Two Popes" },
        { text: "Christian Bale", secondaryText: "Ford v Ferrari" },
        { text: "Antonio Banderas", secondaryText: "Pain and Glory" },
        { text: "Adam Driver", secondaryText: "Marriage Story" },
      ],
    },
    bestActressMusicalComedy: {
      value: 8,
      name: "Best Actress in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Ana De Armas", secondaryText: "Knives Out" },
        { text: "Awkwafina", secondaryText: "The Farewell" },
        { text: "Cate Blanchett", secondaryText: "Where'd You Go, Bernadette" },
        { text: "Beanie Feldstein", secondaryText: "Booksmart" },
        { text: "Emma Thompson", secondaryText: "Late Night" },
      ],
    },
    bestActorMusicalComedy: {
      value: 8,
      name:
        "Best Performance by an Actor in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Taron Egerton", secondaryText: "Rocketman" },
        { text: "Eddie Murphy", secondaryText: "Dolemite Is My Name" },
        { text: "Daniel Craig", secondaryText: "Knives Out" },
        { text: "Roman Griffin Davis", secondaryText: "Jojo Rabbit" },
        {
          text: "Leonardo DiCaprio",
          secondaryText: "Once Upon a Time… in Hollywood",
        },
      ],
    },
    bestActressTVDrama: {
      value: 8,
      name: "Best performance by Actress in a TV series - Drama",
      nominees: [
        { text: "Nicole Kidman", secondaryText: "Big Little Lies" },
        { text: "Reese Witherspoon", secondaryText: "The Morning Show" },
        { text: "Jennifer Aniston", secondaryText: "The Morning Show" },
        { text: "Olivia Colman", secondaryText: "The Crown" },
        { text: "Jodie Comer", secondaryText: "Killing Eve" },
      ],
    },
    bestActorTVDrama: {
      value: 8,
      name: "Best performance by an Actor in a TV Series - Drama",
      nominees: [
        { text: "Tobias Menzies", secondaryText: "The Crown" },
        { text: "Billy Porter", secondaryText: "Pose" },
        { text: "Brian Cox", secondaryText: "Succession" },
        { text: "Kit Harington", secondaryText: "Game of Thrones" },
        { text: "Rami Malek", secondaryText: "Mr. Robot" },
      ],
    },
    bestActressTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actress in a TV series - Musical or Comedy",
      nominees: [
        { text: "Christina Applegate", secondaryText: "Dead to Me" },
        {
          text: "Rachel Brosnahan",
          secondaryText: "The Marvelous Mrs. Maisel",
        },
        {
          text: "Kirsten Dunst",
          secondaryText: "On Becoming a God in Central Florida",
        },
        { text: "Natasha Lyonne", secondaryText: "Russian Doll" },
        { text: "Phoebe Waller-Bridge", secondaryText: "Fleabag" },
      ],
    },
    bestActorTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actor in a TV series - Musical or Comedy",
      nominees: [
        { text: "Ramy Youssef", secondaryText: "Ramy" },
        { text: "Michael Douglas", secondaryText: "The Kominsky Method" },
        { text: "Bill Hader", secondaryText: "Barry" },
        { text: "Ben Platt", secondaryText: "The Politician" },
        { text: "Paul Rudd", secondaryText: "Living with Yourself" },
      ],
    },
    bestActorLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actor in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Christopher Abbott", secondaryText: "Catch-22" },
        { text: "Sacha Baron Cohen", secondaryText: "The Spy" },
        { text: "Russell Crowe", secondaryText: "The Loudest Voice" },
        { text: "Jared Harris", secondaryText: "Chernobyl" },
        { text: "Sam Rockwell", secondaryText: "Fosse/Verdon" },
      ],
    },
    bestActressLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actress in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Michelle Williams", secondaryText: "Fosse/Verdon" },
        { text: "Kaitlyn Dever", secondaryText: "Unbelievable" },
        { text: "Joey King", secondaryText: "The Act" },
        { text: "Helen Mirren", secondaryText: "Catherine the Great" },
        { text: "Merritt Wever", secondaryText: "Unbelievable" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Best Supporting Actor in a Motion Picture",
      nominees: [
        { text: "Brad Pitt", secondaryText: "Once Upon a Time… in Hollywood" },
        {
          text: "Tom Hanks",
          secondaryText: "A Beautiful Day in the Neighborhood",
        },
        { text: "Anthony Hopkins", secondaryText: "The Two Popes" },
        { text: "Al Pacino", secondaryText: "The Irishman" },
        { text: "Joe Pesci", secondaryText: "The Irishman" },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Best Supporting Actress in a Motion Picture",
      nominees: [
        { text: "Kathy Bates", secondaryText: "Richard Jewell" },
        { text: "Annette Bening", secondaryText: "The Report" },
        { text: "Laura Dern", secondaryText: "Marriage Story" },
        { text: "Jennifer Lopez", secondaryText: "Hustlers" },
        { text: "Margot Robbie", secondaryText: "Bombshell" },
      ],
    },
    bestSupportingActorTV: {
      value: 4,
      name:
        "Best Performance by an Actor in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Alan Arkin", secondaryText: "The Kominsky Method" },
        { text: "Kieran Culkin", secondaryText: "Succession" },
        { text: "Andrew Scott", secondaryText: "Fleabag" },
        { text: "Stellan Skarsgård", secondaryText: "Chernobyl" },
        { text: "Henry Winkler", secondaryText: "Barry" },
      ],
    },
    bestSupportingActressTV: {
      value: 4,
      name:
        "Best Performance by an Actress in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Patricia Arquette", secondaryText: "The Act" },
        { text: "Helena Bonham Carter", secondaryText: "The Crown" },
        { text: "Toni Collette", secondaryText: "Unbelievable" },
        { text: "Meryl Streep", secondaryText: "Big Little Lies" },
        { text: "Emily Watson", secondaryText: "Chernobyl" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Best Animated Film",
      nominees: [
        { text: "How to Train Your Dragon: The Hidden World" },
        { text: "The Lion King" },
        { text: "Missing Link" },
        { text: "Toy Story 4" },
        { text: "Frozen II" },
      ],
    },
    directing: {
      value: 4,
      name: "Best Director",
      nominees: [
        { text: "Parasite", secondaryText: "Bong Joon Ho" },
        { text: "1917", secondaryText: "Sam Mendes" },
        { text: "Joker", secondaryText: "Todd Phillips" },
        { text: "The Irishman", secondaryText: "Martin Scorsese" },
        {
          text: "Once Upon a Time… in Hollywood",
          secondaryText: "Quentin Tarantino",
        },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "Best Motion Picture - Foreign Language",
      nominees: [
        { text: "The Farewell" },
        { text: "Les Misérables" },
        { text: "Pain and Glory" },
        { text: "Parasite" },
        { text: "Portrait of a Lady on Fire" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Best Original Score in a Motion Picture",
      nominees: [
        { text: "1917" },
        { text: "Motherless Brooklyn" },
        { text: "Little Women" },
        { text: "Joker" },
        { text: "Marriage Story" },
      ],
    },
    musicOriginalSong: {
      value: 1,
      name: "Best Original Song in a Motion Picture",
      nominees: [
        { text: "Beautiful Ghosts", secondaryText: "Cats" },
        { text: "I'm Gonna Love Me Again", secondaryText: "Rocketman" },
        { text: "Into the Unknown", secondaryText: "Frozen II" },
        { text: "Spirit", secondaryText: "The Lion King" },
        { text: "Stand Up", secondaryText: "Harriet" },
      ],
    },
    screenplay: {
      value: 2,
      name: "Best Screenplay in a Motion Picture",
      nominees: [
        { text: "Marriage Story" },
        { text: "Parasite" },
        { text: "The Two Popes" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "The Irishman" },
      ],
    },
  },
};

import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";

function reset() {
  const ref = database().ref("/games/2020GoldenGlobes/categories");
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
        game: "2019GoldenGlobes",
      }).toJS(),
      [`/games/2019GoldenGlobes/categories/${categoryKey}`]: true,
    };
    database().ref().update(updates);

    goldenGlobes.categories[key].nominees.map((nominee) => {
      const nomineeKey = database().ref().child("nominees").push().key;
      const updates = {
        [`/nominees/${nomineeKey}`]: new Nominee({
          ...nominee,
          id: nomineeKey,
          category: categoryKey,
          game: "2019GoldenGlobes",
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
                  const itemName = item.title || item.name;
                  return (
                    itemName.toLowerCase() === nominee.text.toLowerCase() ||
                    itemName.toLowerCase() ===
                      nominee.secondaryText.toLowerCase()
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

export default goldenGlobes;
