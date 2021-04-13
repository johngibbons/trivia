import { Nominee } from "../../models/Nominee";
import { Map } from "immutable";

export default Map({
  k: new Nominee({
    id: "k",
    text: "La La Land",
  }),
  l: new Nominee({
    id: "l",
    text: "Lion",
  }),
  m: new Nominee({
    id: "m",
    text: "Moonlight",
  }),
  n: new Nominee({
    id: "n",
    text: "Hidden Figures",
  }),
  o: new Nominee({
    id: "o",
    text: "Manchester by the Sea",
  }),
  a: new Nominee({
    id: "a",
    text: "Ryan Gosling",
    secondary_text: "La La Land",
  }),
  b: new Nominee({
    id: "b",
    text: "Casey Affleck",
    secondary_text: "Manchester by the Sea",
  }),
  c: new Nominee({
    id: "c",
    text: "Viggo Mortenson",
    secondary_text: "Captain Fantastic",
  }),
  d: new Nominee({
    id: "d",
    text: "Andrew Garfield",
    secondary_text: "Hacksaw Ridge",
  }),
  e: new Nominee({
    id: "e",
    text: "Denzel Washington",
    secondary_text: "Fences",
  }),
  f: new Nominee({
    id: "f",
    text: "Isabelle Huppert",
    secondary_text: "Elle",
  }),
  g: new Nominee({
    id: "g",
    text: "Amy Adams",
    secondary_text: "Arrival",
  }),
  h: new Nominee({
    id: "h",
    text: "Jessica Chastain",
    secondary_text: "Miss Sloane",
  }),
  i: new Nominee({
    id: "i",
    text: "Ruth Negga",
    secondary_text: "Loving",
  }),
  j: new Nominee({
    id: "j",
    text: "Natalie Portman",
    secondary_text: "Jackie",
  }),
});
