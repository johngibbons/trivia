export default {
  categories: {
    bestPicture: {
      value: 16,
      name: "Best Picture",
      nominees: [
        { text: "Ford v Ferrari" },
        { text: "The Irishman" },
        { text: "Jojo Rabbit" },
        { text: "Joker" },
        { text: "Little Women" },
        { text: "Marriage Story" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "Parasite" },
      ],
    },
    bestActor: {
      value: 8,
      name: "Actor in a Leading Role",
      nominees: [
        { text: "Antonio Banderas", secondaryText: "Pain and Glory" },
        {
          text: "Leonardo DiCaprio",
          secondaryText: "Once Upon a Time… in Hollywood",
        },
        { text: "Adam Driver", secondaryText: "Marriage Story" },
        { text: "Joaquin Phoenix", secondaryText: "Joker" },
        { text: "Jonathan Pryce", secondaryText: " The Two Popes" },
      ],
    },
    bestActress: {
      value: 8,
      name: "Actress in a Leading Role",
      nominees: [
        { text: "Cynthia Erivo", secondaryText: "Harriet" },
        { text: "Scarlett Johansson", secondaryText: "Marriage Story" },
        { text: "Saoirse Ronan", secondaryText: "Little Women" },
        { text: "Charlize Theron", secondaryText: "Bombshell" },
        { text: "Renée Zellweger", secondaryText: "Judy" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Actor in a Supporting Role",
      nominees: [
        {
          text: "Tom Hanks",
          secondaryText: "A Beautiful Day in the Neighborhood",
        },
        { text: "Anthony Hopkins", secondaryText: "The Two Popes" },
        { text: "Al Pacino", secondaryText: "The Irishman" },
        { text: "Joe Pesci", secondaryText: "The Irishman" },
        { text: "Brad Pitt", secondaryText: "Once Upon a Time… in Hollywood" },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Actress in a Supporting Role",
      nominees: [
        { text: "Kathy Bates", secondaryText: "Richard Jewell" },
        { text: "Laura Dern", secondaryText: "Marriage Story" },
        { text: "Scarlett Johansson", secondaryText: "Jojo Rabbit" },
        { text: "Florence Pugh", secondaryText: "Little Women" },
        { text: "Margot Robbie", secondaryText: "Bombshell" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Animated Feature Film",
      nominees: [
        { text: "How to Train Your Dragon: The Hidden World" },
        { text: "I Lost My Body" },
        { text: "Klaus" },
        { text: "Missing Link" },
        { text: "Toy Story 4" },
      ],
    },
    cinematography: {
      value: 2,
      name: "Cinematography",
      nominees: [
        { text: "The Irishman" },
        { text: "Joker" },
        { text: "The Lighthouse" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
      ],
    },
    costumeDesign: {
      value: 1,
      name: "Costume Design",
      nominees: [
        { text: "The Irishman" },
        { text: "Jojo Rabbit" },
        { text: "Joker" },
        { text: "Little Women" },
        { text: "Once Upon a Time… in Hollywood" },
      ],
    },
    directing: {
      value: 4,
      name: "Directing",
      nominees: [
        { text: "The Irishman", secondaryText: "Martin Scorsese" },
        { text: "Joker", secondaryText: "Todd Phillips" },
        { text: "1917", secondaryText: "Sam Mendes" },
        {
          text: "Once Upon a Time… in Hollywood",
          secondaryText: "Quentin Tarantino",
        },
        { text: "Parasite", secondaryText: "Bong Joon-Ho" },
      ],
    },
    documentaryFeature: {
      value: 4,
      name: "Documentary Feature",
      nominees: [
        { text: "American Factory" },
        { text: "The Cave" },
        { text: "The Edge of Democracy" },
        { text: "For Sama" },
        { text: "Honeyland" },
      ],
    },
    documentaryShort: {
      value: 2,
      name: "Documentary Short Subject",
      nominees: [
        { text: "In the Absence" },
        { text: "Learning to Skateboard in a Warzone (If You're a Girl)" },
        { text: "Life Overtakes Me" },
        { text: "St. Louis Superman" },
        { text: "Walk Run Cha-Cha" },
      ],
    },
    filmEditing: {
      value: 1,
      name: "Film Editing",
      nominees: [
        { text: "Ford v Ferrari" },
        { text: "The Irishman" },
        { text: "Jojo Rabbit" },
        { text: "Joker" },
        { text: "Parasite" },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "International Feature Film",
      nominees: [
        { text: "Corpus Christi", secondaryText: "Poland" },
        { text: "Honeyland", secondaryText: "North Macedonia" },
        { text: "Les Misérables", secondaryText: "France" },
        { text: "Pain and Glory", secondaryText: "Spain" },
        { text: "Parasite", secondaryText: "South Korea" },
      ],
    },
    makeupAndHairstyling: {
      value: 1,
      name: "Makeup and Hairstyling",
      nominees: [
        { text: "Bombshell" },
        { text: "Joker" },
        { text: "Judy" },
        { text: "Maleficent: Mistress of Evil" },
        { text: "1917" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Music (Original Score)",
      nominees: [
        { text: "Joker", secondaryText: "Hildur Guðnadóttir" },
        { text: "Little Women", secondaryText: "Alexandre Desplat" },
        { text: "Marriage Story", secondaryText: "Randy Newman" },
        { text: "1917", secondaryText: "Thomas Newman" },
        {
          text: "Star Wars: The Rise of Skywalker",
          secondaryText: "John Williams",
        },
      ],
    },
    musicOriginalSong: {
      value: 1,
      name: "Music (Original Song)",
      nominees: [
        {
          text: "Toy Story 4",
          secondaryText: "I Can't Let You Throw Yourself Away",
        },
        { text: "Rocketman", secondaryText: "(I'm Gonna) Love Me Again" },
        { text: "Breakthrough", secondaryText: "I'm Standing With You" },
        { text: "Frozen II", secondaryText: "Into The Unknown" },
        { text: "Harriet", secondaryText: "Stand Up" },
      ],
    },
    productionDesign: {
      value: 1,
      name: "Production Design",
      nominees: [
        { text: "The Irishman" },
        { text: "Jojo Rabbit" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "Parasite" },
      ],
    },
    shortFilmAnimated: {
      value: 1,
      name: "Short Film (Animated)",
      nominees: [
        { text: "Dcera" },
        { text: "Hair Love" },
        { text: "Kitbull" },
        { text: "Memorable" },
        { text: "Sister" },
      ],
    },
    shortFilmLiveAction: {
      value: 1,
      name: "Short Film (Live Action)",
      nominees: [
        { text: "Brotherhood" },
        { text: "Nefta Football Club" },
        { text: "The Neighbors' Window" },
        { text: "Saria" },
        { text: "A Sister" },
      ],
    },
    soundEditing: {
      value: 1,
      name: "Sound Editing",
      nominees: [
        { text: "Ford v Ferrari" },
        { text: "Joker" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "Star Wars: The Rise of Skywalker" },
      ],
    },
    soundMixing: {
      value: 1,
      name: "Sound Mixing",
      nominees: [
        { text: "Ad Astra" },
        { text: "Ford v Ferrari" },
        { text: "Joker" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
      ],
    },
    visualEffects: {
      value: 1,
      name: "Visual Effects",
      nominees: [
        { text: "Avengers: Endgame" },
        { text: "The Irishman" },
        { text: "The Lion King" },
        { text: "1917" },
        { text: "Star Wars: The Rise of Skywalker" },
      ],
    },
    writingAdaptedScreenplay: {
      value: 2,
      name: "Writing (Adapted Screenplay)",
      nominees: [
        { text: "The Irishman" },
        { text: "Jojo Rabbit" },
        { text: "Joker" },
        { text: "Little Women" },
        { text: "The Two Popes" },
      ],
    },
    writingOriginalScreenplay: {
      value: 2,
      name: "Writing (Original Screenplay)",
      nominees: [
        { text: "Knives Out" },
        { text: "Marriage Story" },
        { text: "1917" },
        { text: "Once Upon a Time… in Hollywood" },
        { text: "Parasite" },
      ],
    },
  },
};

import { database } from "firebase";
import Nominee from "../models/Nominee";
import Category from "../models/Category";

function reset() {
  const ref = database().ref("/games/2019Oscars/categories");
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
