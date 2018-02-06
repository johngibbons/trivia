import { database } from 'firebase'
import Nominee from '../models/Nominee'
import Category from '../models/Category'
import data from '../awardsShows/2018Oscars'
import { CURRENT_GAME } from '../constants'

export async function save (overwrite = false) {
  const dup = await database()
    .ref('categories')
    .orderByChild('game')
    .equalTo(CURRENT_GAME)
    .once('value')

  const isDuplicate = !!dup.val()

  // don't overwrite existing game
  if (isDuplicate && !overwrite) return

  Object.keys(data.categories).map(key => {
    const categoryKey = database().ref().child('categories').push().key
    const updates = {
      [`/categories/${categoryKey}`]: new Category({
        id: categoryKey,
        value: data.categories[key].value,
        name: data.categories[key].name,
        game: CURRENT_GAME
      }).toJS(),
      [`/games/${CURRENT_GAME}/categories/${categoryKey}`]: true
    }
    database().ref().update(updates)

    data.categories[key].nominees.map(nominee => {
      const nomineeKey = database().ref().child('nominees').push().key
      const updates = {
        [`/nominees/${nomineeKey}`]: new Nominee({
          ...nominee,
          id: nomineeKey,
          category: categoryKey,
          game: CURRENT_GAME
        }).toJS(),
        [`/categories/${categoryKey}/nominees/${nomineeKey}`]: true
      }
      database().ref().update(updates)
    })
  })
}

export async function saveImages () {
  const titlesReq = await database().ref('/titles').once('value')
  const peopleReq = await database().ref('/people').once('value')
  const nomineesReq = await database().ref('/nominees').once('value')

  const titles = titlesReq.val()
  const people = peopleReq.val()
  const nominees = nomineesReq.val()

  const titlesArr = Object.keys(titles).map(key => titles[key])
  const peopleArr = Object.keys(people).map(key => people[key])
  const nomineesArr = Object.keys(nominees).map(key => nominees[key])
  const all = [...titlesArr, ...peopleArr]

  nomineesArr.forEach(nominee => {
    if (nominee.imageUrl) return
    const match = findMatch(all, nominee)
    if (!match) {
      console.log('nominee without match:', nominee.text)
      return
    }
    const isPerson = match.media_type === 'person'
    const image = match && (isPerson ? match.profile_path : match.poster_path)
    if (image) setImage(nominee, image)
  })
}

function findMatch (arr, toFind) {
  return arr.filter(
    item =>
      (item.title || item.name).toLowerCase() === toFind.text.toLowerCase()
  )[0]
}

function setImage (nominee, image) {
  database().ref().update({
    [`/nominees/${nominee.id}/imageUrl`]: `https://image.tmdb.org/t/p/w500${image}`
  })
}
