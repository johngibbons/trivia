const state = {
  games: {
    1: {
      id: 1,
      name: 'Gibbons Oscar Party',
      entries: [1, 2, 3, 4],
      questionSet: 1,
      admin: 1
    }
  },
  entries: {
    'key1': {
      name: 'John Gibbons Entry',
      game: 1,
      user: 'someUser',
      selections: [{
        bestPicture: 'manchesterByTheSea',
        bestActor: 'caseyAffleck'
      }]
    },
    'key1': {
      name: 'John Gibbons Entry',
      game: 1,
      user: 'someUser',
      selections: [{
        bestPicture: 'manchesterByTheSea',
        bestActor: 'caseyAffleck'
      }]
    }
  },
  users: {
    'key1': {
      name: 'John Gibbons',
      avatar: 'john.jpeg',
      email: 'johngibbons10@gmail.com',
      entries: ['key1', 'key3'],
      games: ['key1', 'key2'],
      username: 'johngibbons'
    },
    'key2': {
      name: 'Brad VanderVliet',
      avatar: 'brad.jpeg',
      email: 'brad@gmail.com',
      entries: ['key2', 'key4'],
      games: ['key3', 'key4'],
      username: 'bradv'
    }
  }
  nomineesSets: {
    'goldenGlobes2017': {
      'bestMotionPictureDrama': {
        id: 'bestMotionPictureDrama',
        category: 'Best Motion Picture - Drama',
        nominees: {
          'moonlight': {
            id: 'moonlight',
            title: 'moonlight'
          },
          'hellOrHighWater': {
            id: 'hellOrHighWater',
            title: 'hellOrHighWater'
          },
          'lion': {
            id: 'lion',
            title: 'lion'
          },
          'manchesterByTheSea': {
            id: 'manchesterByTheSea',
            title: 'manchesterByTheSea'
          },
          'hacksawRidge': {
            id: 'hacksawRidge',
            title: 'hacksawRidge'
          }
        }
      },
      'bestMotionPictureMusicalComedy': {
        id: 'bestMotionPictureMusicalComedy',
        category: 'Best Motion Picture - Musical or Comedy',
        nominees: {
          'laLaLand': {
            id: 'laLaLand',
            title: 'laLaLand'
          },
          '20thCenturyWomen': {
            id: '20thCenturyWomen',
            title: '20thCenturyWomen'
          },
          'deadpool': {
            id: 'deadpool',
            title: 'deadpool'
          },
          'florenceFosterJenkins': {
            id: 'florenceFosterJenkins',
            title: 'florenceFosterJenkins'
          },
          'singStreet': {
            id: 'singStreet',
            title: 'singStreet'
          }
        }
      },
      'bestActressDrama': {
        id: 'bestActressDrama',
        category: 'Best Performance by an Actress in a Motion Picture - Drama',
        nominees: {
          'isabelleHuppert': {
            id: 'isabelleHuppert',
            people: ['isabelleHuppert'],
            title: 'elle'
          },
          'amyAdams': {
            id: 'amyAdams',
            people: ['amyAdams'],
            title: 'arrival'
          },
          'jessicaChastain': {
            id: 'jessicaChastain',
            people: ['jessicaChastain'],
            title: 'missSloane'
          },
          'ruthNegga': {
            id: 'ruthNegga',
            people: ['ruthNegga'],
            title: 'loving'
          },
          'nataliePortman': {
            id: 'nataliePortman',
            people: ['nataliePortman'],
            title: 'jackie'
          }
        }
      },
      'bestActorDrama': {
        id: 'bestActorDrama',
        category: 'Best Performance by an Actor in a Motion Picture - Drama',
        nominees: {
          'caseyAffleck': {
            id: 'caseyAffleck',
            people: ['caseyAffleck'],
            title: 'manchesterByTheSea'
          },
          'joelEdgerton': {
            id: 'joelEdgerton',
            people: ['joelEdgerton'],
            title: 'loving'
          },
          'andrewGarfield': {
            id: 'andrewGarfield',
            people: ['andrewGarfield'],
            title: 'hacksawRidge'
          },
          'viggoMortensen': {
            id: 'viggoMortensen',
            people: ['viggoMortensen'],
            title: 'captainFantastic'
          },
          'denzelWashington': {
            id: 'denzelWashington',
            people: ['denzelWashington'],
            title: 'fences'
          }
        }
      },
      'bestActressMusicalComedy': {
        id: 'bestActressMusicalComedy',
        category: 'Best Performance by an Actress in a Motion Picture - Musical or Comedy',
        nominees: {
          'emmaStone': {
            id: 'emmaStone',
            people: ['emmaStone'],
            title: 'laLaLand'
          },
          'annetteBening': {
            id: 'annetteBening',
            people: ['annetteBening'],
            title: '20thCenturyWomen'
          },
          'lilyCollins': {
            id: 'lilyCollins',
            people: ['lilyCollins'],
            title: 'rulesDontApply'
          },
          'haileeSteinfeld': {
            id: 'haileeSteinfeld',
            people: ['haileeSteinfeld'],
            title: 'theEdgeOfSeventeen'
          },
          'merylStreep': {
            id: 'merylStreep',
            people: ['merylStreep'],
            title: 'florenceFosterJenkins'
          }
        }
      },
      'bestActorMusicalComedy': {
        id: 'bestActorMusicalComedy',
        category: 'Best Performance by an Actor in a Motion Picture - Musical or Comedy',
        nominees: {
          'ryanGosling': {
            id: 'ryanGosling',
            people: ['ryanGosling'],
            title: 'laLaLand'
          },
          'colinFarrell': {
            id: 'colinFarrell',
            people: ['colinFarrell'],
            title: 'theLobster'
          },
          'hughGrant': {
            id: 'hughGrant',
            people: ['hughGrant'],
            title: 'florenceFosterJenkins'
          },
          'jonahHill': {
            id: 'jonahHill',
            people: ['jonahHill'],
            title: 'warDogs'
          },
          'ryanReynolds': {
            id: 'ryanReynolds',
            people: ['ryanReynolds'],
            title: 'deadpool'
          }
        }
      },
      'bestSupportingActress': {
        id: 'bestSupportingActress',
        category: 'Best Performance by an Actress in a Supporting Role in any Motion Picture',
        nominees: {
          'violaDavis': {
            id: 'violaDavis',
            people: ['violaDavis'],
            title: 'fences'
          },
          'naomieHarris': {
            id: 'naomieHarris',
            people: ['naomieHarris'],
            title: 'moonlight'
          },
          'nicoleKidman': {
            id: 'nicoleKidman',
            people: ['nicoleKidman'],
            title: 'lion'
          },
          'octaviaSpencer': {
            id: 'octaviaSpencer',
            people: ['octaviaSpencer'],
            title: 'hiddenFigures'
          },
          'michelleWilliams': {
            id: 'michelleWilliams',
            people: ['michelleWilliams'],
            title: 'manchesterByTheSea'
          }
        }
      },
      'bestSupportingActor': {
        id: 'bestSupportingActor',
        category: 'Best Performance by an Actor in a Supporting Role in any Motion Picture',
        nominees: {
          'aaronTaylorJohnson': {
            id: 'aaronTaylorJohnson',
            people: ['aaronTaylorJohnson'],
            title: 'nocturnalAnimals'
          },
          'mahershalaAli': {
            id: 'mahershalaAli',
            people: ['mahershalaAli'],
            title: 'moonlight'
          },
          'jeffBridges': {
            id: 'jeffBridges',
            people: ['jeffBridges'],
            title: 'hellOrHighWater'
          },
          'simonHelberg': {
            id: 'simonHelberg',
            people: ['simonHelberg'],
            title: 'florenceFosterJenkins'
          },
          'devPatel': {
            id: 'devPatel',
            people: ['devPatel'],
            title: 'lion'
          }
        }
      },
      'bestScreenplay': {
        id: 'bestScreenplay',
        category: 'Best Screenplay - Motion Picture',
        nominees: {
          'damienChazelle': {
            id: 'damienChazelle',
            people: ['damienChazelle'],
            title: 'laLaLand'
          },
          'tomFord': {
            id: 'tomFord',
            people: ['tomFord'],
            title: 'nocturnalAnimals'
          },
          'barryJenkins': {
            id: 'barryJenkins',
            people: ['barryJenkins'],
            title: 'moonlight'
          },
          'kennethLonergan': {
            id: 'kennethLonergan',
            people: ['kennethLonergan'],
            title: 'manchesterByTheSea'
          },
          'taylorSheridan': {
            id: 'taylorSheridan',
            people: ['taylorSheridan'],
            title: 'hellOrHighWater'
          }
        }
      }
      'bestAnimated': {
        id: 'bestAnimated',
        category: 'Best Motion Picture - Animated',
        nominees: {
          'zootopia': {
            id: 'zootopia',
            title: 'zootopia'
          },
          'moana': {
            id: 'moana',
            title: 'moana'
          },
          'myLifeAsAZucchini': {
            id: 'myLifeAsAZucchini',
            title: 'myLifeAsAZucchini'
          },
          'sing': {
            id: 'sing',
            title: 'sing'
          },
          'kuboAndTheTwoStrings': {
            id: 'kuboAndTheTwoStrings',
            title: 'kuboAndTheTwoStrings'
          }
        }
      },
      'bestForeign': {
        id: 'bestForeign',
        category: 'Best Motion Picture - Foreign Language',
        nominees: {
          'elle': {
            id: 'elle',
            title: 'elle'
          },
          'divines': {
            id: 'divines',
            title: 'divines'
          },
          'neruda': {
            id: 'neruda',
            title: 'neruda'
          },
          'theSalesman': {
            id: 'theSalesman',
            title: 'theSalesman'
          },
          'toniErdmann': {
            id: 'toniErdmann',
            title: 'toniErdmann'
          }
        }
      },
      'bestOriginalScore': {
        id: 'bestOriginalScore',
        category: 'Best Original Score - Motion Picture',
        nominees: {
          'justinHurwitz': {
            id: 'justinHurwitz',
            people: ['justinHurwitz'],
            title: 'laLaLand'
          },
          'nicholasBritell': {
            id: 'nicholasBritell',
            people: ['nicholasBritell'],
            title: 'moonlight'
          },
          'johannJohannsson': {
            id: 'johannJohannsson',
            people: ['johannJohannsson'],
            title: 'arrival'
          },
          'dustinOHalloran': {
            id: 'dustinOHalloran',
            people: ['dustinOHalloran', 'Hauschka'],
            title: 'lion'
          },
          'toniErdmann': {
            id: 'hansZimmer',
            people: ['hansZimmer', 'pharrellWilliams, benjaminWallfisch'],
            title: 'hiddenFigures'
          }
        }
      },
      'bestOriginalSong': {
        id: 'bestOriginalSong',
        category: 'Best Original Song - Motion Picture',
        nominees: {
          'cityOfStars': {
            id: 'cityOfStars',
            people: ['cityOfStars', 'justinHurwitz', 'benjPasek', 'justinPaul'],
            title: 'laLaLand'
          },
          'cantStopTheFeeling': {
            id: 'cantStopTheFeeling',
            title: 'trolls'
          },
          'faith': {
            id: 'faith',
            title: 'sing'
          },
          'gold': {
            id: 'gold',
            title: 'gold'
          },
          'howFarIllGo': {
            id: 'howFarIllGo',
            title: 'moana'
          }
        }
      },
      'bestTVSeriesDrama': {
        id: 'bestTVSeriesDrama',
        category: 'Best Television Series - Drama',
        nominees: {
          'theCrown': {
            id: 'theCrown',
            title: 'theCrown'
          },
          'gameOfThrones': {
            id: 'gameOfThrones',
            title: 'gameOfThrones'
          },
          'strangerThings': {
            id: 'strangerThings',
            title: 'strangerThings'
          },
          'thisIsUs': {
            id: 'thisIsUs',
            title: 'thisIsUs'
          },
          'westworld': {
            id: 'westworld',
            title: 'westworld'
          }
        }
      },
      'bestTVSeriesMusicalComedy': {
        id: 'bestTVSeriesMusicalComedy',
        category: 'Best Television Series - Musical or Comedy',
        nominees: {
          'atlanta': {
            id: 'atlanta',
            title: 'atlanta'
          },
          'blackish': {
            id: 'blackish',
            title: 'blackish'
          },
          'mozartInTheJungle': {
            id: 'mozartInTheJungle',
            title: 'mozartInTheJungle'
          },
          'transparent': {
            id: 'transparent',
            title: 'transparent'
          },
          'veep': {
            id: 'veep',
            title: 'veep'
          }
        }
      },
      'bestTVLimitedSeries': {
        id: 'bestTVLimitedSeries',
        category: 'Best Television Limited Series or Motion Picture Made for Television',
        nominees: {
          'thePeopleVOJSimpson': {
            id: 'thePeopleVOJSimpson',
            title: 'thePeopleVOJSimpson'
          },
          'americanCrime': {
            id: 'americanCrime',
            title: 'americanCrime'
          },
          'theDresser': {
            id: 'theDresser',
            title: 'theDresser'
          },
          'theNightManager': {
            id: 'theNightManager',
            title: 'theNightManager'
          },
          'theNightOf': {
            id: 'theNightOf',
            title: 'theNightOf'
          }
        }
      },
      'bestActressLimitedSeries': {
        id: 'bestActressLimitedSeries',
        category: 'Best Performance by an Actress in a Limited Series or a Motion Picture Made for Television',
        nominees: {
          'sarahPaulson': {
            id: 'sarahPaulson',
            title: 'thePeopleVOJSimpson',
            people: ['sarahPaulson']
          },
          'rileyKeough': {
            id: 'rileyKeough',
            title: 'theGirlfriendExperience',
            people: ['rileyKeough']
          },
          'charlotteRampling': {
            id: 'charlotteRampling',
            title: 'londonSpy',
            people: ['charlotteRampling']
          },
          'kerryWashington': {
            id: 'kerryWashington',
            title: 'confirmation',
            people: ['kerryWashington']
          },
          'felicityHuffman': {
            id: 'felicityHuffman',
            title: 'americanCrime',
            people: ['felicityHuffman']
          }
        }
      },
      'bestActorLimitedSeries': {
        id: 'bestActorLimitedSeries',
        category: 'Best Performance by an Actor in a Limited Series or a Motion Picture Made for Television',
        nominees: {
          'tomHiddleston': {
            id: 'tomHiddleston',
            title: 'theNightManager',
            people: ['tomHiddleston']
          },
          'rizAhmed': {
            id: 'rizAhmed',
            title: 'theNightOf',
            people: ['rizAhmed']
          },
          'bryanCranston': {
            id: 'bryanCranston',
            title: 'allTheWay',
            people: ['bryanCranston']
          },
          'johnTurturro': {
            id: 'johnTurturro',
            title: 'theNightOf',
            people: ['johnTurturro']
          },
          'courtneyBVance': {
            id: 'courtneyBVance',
            title: 'thePeopleVOJSimpson',
            people: ['courtneyBVance']
          }
        }
      }
      'bestActressTVDrama': {
        id: 'bestActressTVDrama',
        category: 'Best Performance by an Actress in a Television Series - Drama',
        nominees: {
          'claireFoy': {
            id: 'claireFoy',
            title: 'theCrown',
            people: ['claireFoy']
          },
          'caitrionaBalfe': {
            id: 'caitrionaBalfe',
            title: 'outlander',
            people: ['caitrionaBalfe']
          },
          'keriRussell': {
            id: 'keriRussell',
            title: 'theAmericans',
            people: ['keriRussell']
          },
          'winonaRyder': {
            id: 'winonaRyder',
            title: 'strangerThings',
            people: ['winonaRyder']
          },
          'evanRachelWood': {
            id: 'evanRachelWood',
            title: 'westworld',
            people: ['evanRachelWood']
          }
        }
      },
      'bestActorTVDrama': {
        id: 'bestActorTVDrama',
        category: 'Best Performance by an Actor in a Television Series - Drama',
        nominees: {
          'billyBobThornton': {
            id: 'billyBobThornton',
            title: 'goliath',
            people: ['billyBobThornton']
          },
          'ramiMalek': {
            id: 'ramiMalek',
            title: 'mrRobot',
            people: ['ramiMalek']
          },
          'bobOdenkirk': {
            id: 'bobOdenkirk',
            title: 'betterCallSaul',
            people: ['bobOdenkirk']
          },
          'matthewRhys': {
            id: 'matthewRhys',
            title: 'theAmericans',
            people: ['matthewRhys']
          },
          'lievSchreiber': {
            id: 'lievSchreiber',
            title: 'rayDonovan',
            people: ['lievSchreiber']
          }
        }
      },
      'bestActressTVMusicalComedy': {
        id: 'bestActressTVMusicalComedy',
        category: 'Best Performance by an Actress in a Television Series - Musical or Comedy',
        nominees: {
          'traceeEllisRoss': {
            id: 'traceeEllisRoss',
            title: 'blackish',
            people: ['traceeEllisRoss']
          },
          'rachelBloom': {
            id: 'rachelBloom',
            title: 'crazyExGirlfriend',
            people: ['rachelBloom']
          },
          'juliaLouisDreyfus': {
            id: 'juliaLouisDreyfus',
            title: 'veep',
            people: ['juliaLouisDreyfus']
          },
          'sarahJessicaParker': {
            id: 'sarahJessicaParker',
            title: 'divorce',
            people: ['sarahJessicaParker']
          },
          'issaRae': {
            id: 'issaRae',
            title: 'insecure',
            people: ['issaRae']
          }
        }
      },
      'bestActorTVMusicalComedy': {
        id: 'bestActorTVMusicalComedy',
        category: 'Best Performance by an Actor in a Television Series - Musical or Comedy',
        nominees: {
          'donaldGlover': {
            id: 'donaldGlover',
            title: 'atlanta',
            people: ['donaldGlover']
          },
          'anthonyAnderson': {
            id: 'anthonyAnderson',
            title: 'blackish',
            people: ['anthonyAnderson']
          },
          'gaelGarciaBernal': {
            id: 'gaelGarciaBernal',
            title: 'mozartInTheJungle',
            people: ['gaelGarciaBernal']
          },
          'nickNolte': {
            id: 'nickNolte',
            title: 'graves',
            people: ['nickNolte']
          },
          'jeffreyTambor': {
            id: 'jeffreyTambor',
            title: 'transparent',
            people: ['jeffreyTambor']
          }
        }
      },
      'bestSupportingActressLimitedSeries': {
        id: 'bestSupportingActressLimitedSeries',
        category: 'Best Performance by an Actress in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television',
        nominees: {
          'oliviaColman': {
            id: 'oliviaColman',
            title: 'theNightManager',
            people: ['oliviaColman']
          },
          'lenaHeadey': {
            id: 'lenaHeadey',
            title: 'gameOfThrones',
            people: ['lenaHeadey']
          },
          'chrissyMetz': {
            id: 'chrissyMetz',
            title: 'thisIsUs',
            people: ['chrissyMetz']
          },
          'mandyMoore': {
            id: 'mandyMoore',
            title: 'thisIsUs',
            people: ['mandyMoore']
          },
          'thandieNewton': {
            id: 'thandieNewton',
            title: 'westworld',
            people: ['thandieNewton']
          }
        }
      },
      'bestSupportingActorLimitedSeries': {
        id: 'bestSupportingActorLimitedSeries',
        category: 'Best Performance by an Actor in a Supporting Role in a Series, Limited Series or Motion Picture Made for Television',
        nominees: {
          'hughLaurie': {
            id: 'hughLaurie',
            title: 'theNightManager',
            people: ['hughLaurie']
          },
          'sterlingKBrown': {
            id: 'sterlingKBrown',
            title: 'thePeopleVOJSimpson',
            people: ['sterlingKBrown']
          },
          'johnLithgow': {
            id: 'johnLithgow',
            title: 'theCrown',
            people: ['johnLithgow']
          },
          'christianSlater': {
            id: 'christianSlater',
            title: 'mrRobot',
            people: ['christianSlater']
          },
          'johnTravolta': {
            id: 'johnTravolta',
            title: 'thePeopleVOJSimpson',
            people: ['johnTravolta']
          }
        }
      }
    }
  },
  titles: {
    'manchesterByTheSea': {
      id: 'manchesterByTheSea',
      name: 'Manchester by the Sea',
      image: 'manchester.jpeg'
    },
    'moonlight': {
      id: 'moonlight',
      name: 'Moonlight',
      image: 'moonlight.jpeg'
    },
    'lion': {
      id: 'lion',
      name: 'Lion',
      image: 'lion.jpeg'
    }
  },
  people: {
    'key1': {
      id: 'key1',
      name: 'Casey Affleck',
      image: 'casey.jpeg'
    },
    'key2': {
      id: 'key2',
      name: 'Denzel Washington',
      image: 'denzel.jpeg'
    },
    'key3': {
      id: 'key3',
      name: 'Andrew Garfield',
      image: 'andrew.jpeg'
    }
  }
}

import { get } from 'lodash'

console.log(state.nomineesSets.map(set => set.nominees.map(nominee => nominee.title)))
