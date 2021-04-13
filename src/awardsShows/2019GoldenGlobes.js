const goldenGlobes = {
  categories: {
    bestMotionPictureDrama: {
      value: 16,
      name: "Best Motion Picture - Drama",
      nominees: [
        { text: "BlacKkKlansman" },
        { text: "Bohemian Rhapsody" },
        { text: "If Beale Street Could Talk" },
        { text: "A Star Is Born" },
        { text: "Black Panther" },
      ],
    },
    bestMotionPictureMusicalComedy: {
      value: 16,
      name: "Best Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Crazy Rich Asians" },
        { text: "The Favourite" },
        { text: "Green Book" },
        { text: "Mary Poppins Returns" },
        { text: "Vice" },
      ],
    },
    bestTvSeriesDrama: {
      value: 16,
      name: "Best TV Series - Drama",
      nominees: [
        { text: "Bodyguard" },
        { text: "Homecoming" },
        { text: "Killing Eve" },
        { text: "Pose" },
        { text: "The Americans" },
      ],
    },
    bestTvSeriesMusicalComedy: {
      value: 16,
      name: "Best TV Series - Musical or Comedy",
      nominees: [
        { text: "Barry" },
        { text: "The Good Place" },
        { text: "Kidding" },
        { text: "The Kominsky Method" },
        { text: "The Marvelous Mrs. Maisel" },
      ],
    },
    limitedSeriesTV: {
      value: 16,
      name: "Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "The Alienist" },
        { text: "The Assassination of Gianni Versace: American Crime Story" },
        { text: "Escape at Dannemora" },
        { text: "Sharp Objects" },
        { text: "A Very English Scandal" },
      ],
    },
    bestActressDrama: {
      value: 8,
      name: "Best Performance by an Actress in a Motion Picture - Drama",
      nominees: [
        { text: "Glenn Close", secondaryText: "The Wife" },
        { text: "Lady Gaga", secondaryText: "A Star Is Born" },
        {
          text: "Nicole Kidman",
          secondaryText: "Destroyer",
        },
        { text: "Melissa McCarthy", secondaryText: "Can You Ever Forgive Me?" },
        {
          text: "Rosamund Pike",
          secondaryText: "A Private War",
        },
      ],
    },
    bestActorDrama: {
      value: 8,
      name: "Best Performance by an Actor in a Motion Picture - Drama",
      nominees: [
        { text: "Bradley Cooper", secondaryText: "A Star Is Born" },
        { text: "Willem Dafoe", secondaryText: "At Eternity's Gate" },
        { text: "Lucas Hedges", secondaryText: "Boy Erased" },
        { text: "Rami Malek", secondaryText: "Bohemian Rhapsody" },
        { text: "John David Washington", secondaryText: "BlacKkKlansman" },
      ],
    },
    bestActressMusicalComedy: {
      value: 8,
      name: "Best Actress in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Emily Blunt", secondaryText: "Mary Poppins Returns" },
        { text: "Olivia Colman", secondaryText: "The Favourite" },
        { text: "Elsie Fisher", secondaryText: "Eighth Grade" },
        { text: "Charlize Theron", secondaryText: "Tully" },
        { text: "Constance Wu", secondaryText: "Crazy Rich Asians" },
      ],
    },
    bestActorMusicalComedy: {
      value: 8,
      name:
        "Best Performance by an Actor in a Motion Picture - Musical or Comedy",
      nominees: [
        { text: "Christian Bale", secondaryText: "Vice" },
        { text: "Lin-Manuel Miranda", secondaryText: "Mary Poppins Returns" },
        { text: "Viggo Mortensen", secondaryText: "Green Book" },
        { text: "Robert Redford", secondaryText: "The Old Man & the Gun" },
        { text: "John C. Reilly", secondaryText: "Stan & Ollie" },
      ],
    },
    bestActressTVDrama: {
      value: 8,
      name: "Best performance by Actress in a TV series - Drama",
      nominees: [
        { text: "Caitriona Balfe", secondaryText: "Outlander" },
        { text: "Elisabeth Moss", secondaryText: "The Handmaid's Tale" },
        { text: "Sandra Oh", secondaryText: "Killing Eve" },
        { text: "Julia Roberts", secondaryText: "Homecoming" },
        { text: "Keri Russell", secondaryText: "The Americans" },
      ],
    },
    bestActorTVDrama: {
      value: 8,
      name: "Best performance by an Actor in a TV Series - Drama",
      nominees: [
        { text: "Jason Bateman", secondaryText: "Ozark" },
        { text: "Stephan James", secondaryText: "Homecoming" },
        { text: "Richard Madden", secondaryText: "Bodyguard" },
        { text: "Billy Porter", secondaryText: "Pose" },
        { text: "Matthew Rhys", secondaryText: "The Americans" },
      ],
    },
    bestActressTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actress in a TV series - Musical or Comedy",
      nominees: [
        { text: "Kristen Bell", secondaryText: "The Good Place" },
        { text: "Candice Bergen", secondaryText: "Murphy Brown" },
        { text: "Alison Brie", secondaryText: "Glow" },
        {
          text: "Rachel Brosnahan",
          secondaryText: "The Marvelous Mrs. Maisel",
        },
        { text: "Debra Messing", secondaryText: "Will & Grace" },
      ],
    },
    bestActorTVMusicalComedy: {
      value: 8,
      name: "Best performance by an Actor in a TV series - Musical or Comedy",
      nominees: [
        { text: "Jim Carrey", secondaryText: "Kidding" },
        { text: "Michael Douglas", secondaryText: "The Kominsky Method" },
        { text: "Donald Glover", secondaryText: "Atlanta" },
        { text: "Bill Hader", secondaryText: "Barry" },
        { text: "Sacha Baron Cohen", secondaryText: "Who is America?" },
      ],
    },
    bestActorLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actor in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Antonio Banderas", secondaryText: "Genius: Picasso" },
        { text: "Daniel Brühl", secondaryText: "The Alienist" },
        {
          text: "Darren Criss",
          secondaryText:
            "The Assassination of Gianni Versace: American Crime Story",
        },
        { text: "Benedict Cumberbatch", secondaryText: "Patrick Melrose" },
        { text: "Hugh Grant", secondaryText: "A Very English Scandal" },
      ],
    },
    bestActressLimitedTV: {
      value: 8,
      name:
        "Best Performance by an Actress in a Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Patricia Arquette", secondaryText: "Escape at Dannemora" },
        { text: "Connie Britton", secondaryText: "Dirty John" },
        { text: "Laura Dern", secondaryText: "The Tale" },
        { text: "Regina King", secondaryText: "Seven Seconds" },
        { text: "Amy Adams", secondaryText: "Sharp Objects" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Best Supporting Actor in a Motion Picture",
      nominees: [
        { text: "Mahershala Ali", secondaryText: "Green Book" },
        { text: "Timothée Chalamet", secondaryText: "Beautiful Boy" },
        { text: "Adam Driver", secondaryText: "BlacKkKlansman" },
        {
          text: "Richard E. Grant",
          secondaryText: "Can You Ever Forgive Me?",
        },
        {
          text: "Sam Rockwell",
          secondaryText: "Vice",
        },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Best Supporting Actress in a Motion Picture",
      nominees: [
        { text: "Claire Foy", secondaryText: "First Man" },
        { text: "Regina King", secondaryText: "If Beale Street Could Talk" },
        { text: "Emma Stone", secondaryText: "The Favourite" },
        { text: "Rachel Weisz", secondaryText: "The Favourite" },
        { text: "Amy Adams", secondaryText: "Vice" },
      ],
    },
    bestSupportingActorTV: {
      value: 4,
      name:
        "Best Performance by an Actor in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Alan Arkin", secondaryText: "The Kominsky Method" },
        { text: "Kieran Culkin", secondaryText: "Succession" },
        {
          text: "Edgar Ramírez",
          secondaryText:
            "The Assassination of Gianni Versace: American Crime Story",
        },
        { text: "Ben Whishaw", secondaryText: "A Very English Scandal" },
        { text: "Henry Winkler", secondaryText: "Barry" },
      ],
    },
    bestSupportingActressTV: {
      value: 4,
      name:
        "Best Performance by an Actress in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television",
      nominees: [
        { text: "Alex Borstein", secondaryText: "The Marvelous Mrs. Maisel" },
        { text: "Patricia Clarkson", secondaryText: "Sharp Objects" },
        {
          text: "Penélope Cruz",
          secondaryText:
            "The Assassination of Gianni Versace: American Crime Story",
        },
        { text: "Thandie Newton", secondaryText: "Westworld" },
        { text: "Yvonne Strahovski", secondaryText: "The Handmaid's Tale" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Best Animated Film",
      nominees: [
        { text: "Isle of Dogs" },
        { text: "Mirai" },
        { text: "Ralph Breaks the Internet" },
        { text: "Spider-Man: Into the Spider-Verse" },
        { text: "Incredibles 2" },
      ],
    },
    directing: {
      value: 4,
      name: "Best Director",
      nominees: [
        { text: "A Star Is Born", secondaryText: "Bradley Cooper" },
        {
          text: "Roma",
          secondaryText: "Alfonso Cuarón",
        },
        { text: "Green Book", secondaryText: "Peter Farrelly" },
        { text: "BlacKkKlansman", secondaryText: "Spike Lee" },
        { text: "Vice", secondaryText: "Adam McKay" },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "Best Motion Picture - Foreign Language",
      nominees: [
        { text: "Capernaum" },
        { text: "Girl" },
        { text: "Never Look Away" },
        { text: "Roma" },
        { text: "Shoplifters" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Best Original Score in a Motion Picture",
      nominees: [
        { text: "A Quiet Place" },
        { text: "Isle of Dogs" },
        { text: "Black Panther" },
        { text: "First Man" },
        { text: "Mary Poppins Returns" },
      ],
    },
    musicOriginalSong: {
      value: 1,
      name: "Best Original Song in a Motion Picture",
      nominees: [
        { text: "All The Stars", secondaryText: "Black Panther" },
        {
          text: "Girl in the Movies",
          secondaryText: "Dumplin'",
        },
        {
          text: "Requiem For A Private War",
          secondaryText: "A Private War",
        },
        { text: "Revelation", secondaryText: "Boy Erased" },
        { text: "Shallow", secondaryText: "A Star Is Born" },
      ],
    },
    screenplay: {
      value: 2,
      name: "Best Screenplay in a Motion Picture",
      nominees: [
        { text: "Roma" },
        { text: "The Favourite" },
        { text: "If Beale Street Could Talk" },
        { text: "Vice" },
        { text: "Green Book" },
      ],
    },
  },
};

import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";

function reset() {
  const ref = database().ref("/games/2019GoldenGlobes/categories");
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
