export default {
  categories: {
    bestPicture: {
      value: 16,
      name: "Best Picture",
      nominees: [
        { text: "Call Me by Your Name" },
        { text: "Darkest Hour" },
        { text: "Dunkirk" },
        { text: "Get Out" },
        { text: "Lady Bird" },
        { text: "Phantom Thread" },
        { text: "The Post" },
        { text: "The Shape of Water" },
        { text: "Three Billboards outside Ebbing, Missouri" },
      ],
    },
    bestActor: {
      value: 8,
      name: "Actor in a Leading Role",
      nominees: [
        { text: "Timothée Chalamet", secondaryText: "Call Me by Your Name" },
        { text: "Daniel Day-Lewis", secondaryText: "Phantom Thread" },
        { text: "Daniel Kaluuya", secondaryText: "Get Out" },
        { text: "Gary Oldman", secondaryText: "Darkest Hour" },
        { text: "Denzel Washington", secondaryText: "Roman J. Israel, Esq." },
      ],
    },
    bestActress: {
      value: 8,
      name: "Actress in a Leading Role",
      nominees: [
        { text: "Sally Hawkins", secondaryText: "The Shape of Water" },
        {
          text: "Frances McDormand",
          secondaryText: "Three Billboards outside Ebbing, Missouri",
        },
        { text: "Margot Robbie", secondaryText: "I, Tonya" },
        { text: "Saoirse Ronan", secondaryText: "Lady Bird" },
        { text: "Meryl Streep", secondaryText: "The Post" },
      ],
    },
    bestSupportingActor: {
      value: 4,
      name: "Actor in a Supporting Role",
      nominees: [
        { text: "Willem Dafoe", secondaryText: "The Florida Project" },
        {
          text: "Woody Harrelson",
          secondaryText: "Three Billboards outside Ebbing, Missouri",
        },
        { text: "Richard Jenkins", secondaryText: "The Shape of Water" },
        {
          text: "Christopher Plummer",
          secondaryText: "All the Money in the World",
        },
        {
          text: "Sam Rockwell",
          secondaryText: "Three Billboards outside Ebbing, Missouri",
        },
      ],
    },
    bestSupportingActress: {
      value: 4,
      name: "Actress in a Supporting Role",
      nominees: [
        { text: "Mary J. Blige", secondaryText: "Mudbound" },
        { text: "Allison Janney", secondaryText: "I, Tonya" },
        { text: "Lesley Manville", secondaryText: "Phantom Thread" },
        { text: "Laurie Metcalf", secondaryText: "Lady Bird" },
        { text: "Octavia Spencer", secondaryText: "The Shape of Water" },
      ],
    },
    animatedFeature: {
      value: 4,
      name: "Animated Feature Film",
      nominees: [
        { text: "The Boss Baby" },
        { text: "The Breadwinner" },
        { text: "Coco" },
        { text: "Ferdinand" },
        { text: "Loving Vincent" },
      ],
    },
    cinematography: {
      value: 2,
      name: "Cinematography",
      nominees: [
        { text: "Blade Runner 2049" },
        { text: "Darkest Hour" },
        { text: "Dunkirk" },
        { text: "Mudbound" },
        { text: "The Shape of Water" },
      ],
    },
    costumeDesign: {
      value: 1,
      name: "Costume Design",
      nominees: [
        { text: "Beauty and the Beast" },
        { text: "Darkest Hour" },
        { text: "Phantom Thread" },
        { text: "The Shape of Water" },
        { text: "Victoria & Abdul" },
      ],
    },
    directing: {
      value: 4,
      name: "Directing",
      nominees: [
        { text: "Dunkirk", secondaryText: "Christopher Nolan" },
        { text: "Get Out", secondaryText: "Jordan Peele" },
        { text: "Lady Bird", secondaryText: "Greta Gerwig" },
        { text: "Phantom Thread", secondaryText: "Paul Thomas Anderson" },
        { text: "The Shape of Water", secondaryText: "Guillermo del Toro" },
      ],
    },
    documentaryFeature: {
      value: 4,
      name: "Documentary Feature",
      nominees: [
        {
          text: "Abacus: Small Enough to Jail",
          secondaryText: "Steve James, Mark Mitten and Julie Goldman",
        },
        {
          text: "Faces Places",
          secondaryText: "Agnès Varda, JR and Rosalie Varda",
        },
        {
          text: "Icarus",
          secondaryText: "Bryan Fogel and Dan Cogan",
        },
        {
          text: "Last Men in Aleppo",
          secondaryText: "Feras Fayyad, Kareem Abeed and Søren Steen Jespersen",
        },
        {
          text: "Strong Island",
          secondaryText: "Yance Ford and Joslyn Barnes",
        },
      ],
    },
    documentaryShort: {
      value: 2,
      name: "Documentary Short Subject",
      nominees: [
        {
          text: "Edith+Eddie",
          secondaryText: "Laura Checkoway and Thomas Lee Wright",
        },
        {
          text: "Heaven Is a Traffic Jam on the 405",
          secondaryText: "Frank Stiefel",
        },
        {
          text: "Heroin(e)",
          secondaryText: "Elaine McMillion Sheldon and Kerrin Sheldon",
        },
        { text: "Knife Skills", secondaryText: "Thomas Lennon" },
        {
          text: "Traffic Stop",
          secondaryText: "Kate Davis and David Heilbroner",
        },
      ],
    },
    filmEditing: {
      value: 1,
      name: "Film Editing",
      nominees: [
        {
          text: "Baby Driver",
          secondaryText: "Paul Machliss and Jonathan Amos",
        },
        { text: "Dunkirk", secondaryText: "Lee Smith" },
        { text: "I, Tonya", secondaryText: "Tatiana S. Riegel" },
        { text: "The Shape of Water", secondaryText: "Sidney Wolinsky" },
        {
          text: "Three Billboards outside Ebbing, Missouri",
          secondaryText: "Jon Gregory",
        },
      ],
    },
    foreignLanguageFile: {
      value: 4,
      name: "Foreign Language Film",
      nominees: [
        { text: "A Fantastic Woman", secondaryText: "Chile" },
        { text: "The Insult", secondaryText: "Lebanon" },
        { text: "Loveless", secondaryText: "Russia" },
        { text: "On Body and Soul", secondaryText: "Hungary" },
        { text: "The Square", secondaryText: "Sweden" },
      ],
    },
    makeupAndHairstyling: {
      value: 1,
      name: "Makeup and Hairstyling",
      nominees: [
        {
          text: "Darkest Hour",
          secondaryText: "Kazuhiro Tsuji, David Malinowski and Lucy Sibbick",
        },
        {
          text: "Victoria & Abdul",
          secondaryText: "Daniel Phillips and Lou Sheppard",
        },
        { text: "Wonder", secondaryText: "Arjen Tuiten" },
      ],
    },
    musicOriginalScore: {
      value: 1,
      name: "Music (Original Score)",
      nominees: [
        { text: "Dunkirk", secondaryText: "Hans Zimmer" },
        { text: "Phantom Thread", secondaryText: "Jonny Greenwood" },
        {
          text: "The Shape of Water",
          secondaryText: "Alexandre Desplat",
        },
        { text: "Star Wars: The Last Jedi", secondaryText: "John Williams" },
        {
          text: "Three Billboards outside Ebbing, Missouri",
          secondaryText: "Carter Burwell",
        },
      ],
    },
    musicOriginalSong: {
      value: 1,
      name: "Music (Original Song)",
      nominees: [
        {
          text: "Mudbound",
          secondaryText: "Mighty River",
        },
        { text: "Call Me by Your Name", secondaryText: "Mystery Of Love" },
        { text: "Coco", secondaryText: "Remember Me" },
        {
          text: "Marshall",
          secondaryText: "Stand Up For Something",
        },
        { text: "The Greatest Showman", secondaryText: "This Is Me" },
      ],
    },
    productionDesign: {
      value: 1,
      name: "Production Design",
      nominees: [
        { text: "Beauty and the Beast" },
        { text: "Blade Runner 2049" },
        { text: "Darkest Hour" },
        { text: "Dunkirk" },
        { text: "The Shape of Water" },
      ],
    },
    shortFilmAnimated: {
      value: 1,
      name: "Short Film (Animated)",
      nominees: [
        { text: "Dear Basketball" },
        { text: "Garden Party" },
        { text: "Lou" },
        { text: "Negative Space" },
        { text: "Revolting Rhymes" },
      ],
    },
    shortFilmLiveAction: {
      value: 1,
      name: "Short Film (Live Action)",
      nominees: [
        { text: "DeKalb Elementary" },
        { text: "The Eleven O'Clock" },
        { text: "My Nephew Emmett" },
        { text: "The Silent Child" },
        { text: "Watu Wote/All of Us" },
      ],
    },
    soundEditing: {
      value: 1,
      name: "Sound Editing",
      nominees: [
        { text: "Baby Driver" },
        { text: "Blade Runner 2049" },
        { text: "Dunkirk" },
        { text: "The Shape of Water" },
        { text: "Star Wars: The Last Jedi" },
      ],
    },
    soundMixing: {
      value: 1,
      name: "Sound Mixing",
      nominees: [
        { text: "Baby Driver" },
        { text: "Blade Runner 2049" },
        { text: "Dunkirk" },
        { text: "The Shape of Water" },
        { text: "Star Wars: The Last Jedi" },
      ],
    },
    visualEffects: {
      value: 1,
      name: "Visual Effects",
      nominees: [
        { text: "Blade Runner 2049" },
        { text: "Guardians of the Galaxy Vol. 2" },
        { text: "Kong: Skull Island" },
        { text: "Star Wars: The Last Jedi" },
        { text: "War for the Planet of the Apes" },
      ],
    },
    writingAdaptedScreenplay: {
      value: 2,
      name: "Writing (Adapted Screenplay)",
      nominees: [
        { text: "Call Me by Your Name", secondaryText: "James Ivory" },
        {
          text: "The Disaster Artist",
          secondaryText: "Scott Neustadter & Michael H. Weber",
        },
        {
          text: "Logan",
          secondaryText: "Scott Frank & James Mangold and Michael Green",
        },
        { text: "Molly's Game", secondaryText: "Aaron Sorkin" },
        { text: "Mudbound", secondaryText: "Virgil Williams and Dee Rees" },
      ],
    },
    writingOriginalScreenplay: {
      value: 2,
      name: "Writing (Original Screenplay)",
      nominees: [
        {
          text: "The Big Sick",
          secondaryText: "Emily V. Gordon & Kumail Nanjiani",
        },
        { text: "Get Out", secondaryText: "Jordan Peele" },
        {
          text: "Lady Bird",
          secondaryText: "Greta Gerwig",
        },
        {
          text: "The Shape of Water",
          secondaryText: "Guillermo del Toro & Vanessa Taylor",
        },
        {
          text: "Three Billboards outside Ebbing, Missouri",
          secondaryText: "Martin McDonagh",
        },
      ],
    },
  },
};
