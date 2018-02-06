import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { startFirebase } from './firebaseSetup'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { CURRENT_GAME } from './constants'
import { save, saveImages } from './helpers/game-helper'
injectTapEventPlugin()
startFirebase()
save()
saveImages()
export const ui = new firebaseui.auth.AuthUI(firebase.auth())

ReactDOM.render(<App />, document.getElementById('root'))
