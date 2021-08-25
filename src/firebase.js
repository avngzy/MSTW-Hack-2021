import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyChsLaIp0o1yR79pj-vHA9J0Z3x7YKllGw",
    authDomain: "grounds-keeper.firebaseapp.com",
    databaseURL: "https://grounds-keeper-default-rtdb.firebaseio.com",
    projectId: "grounds-keeper",
    storageBucket: "grounds-keeper.appspot.com",
    messagingSenderId: "1046100589712",
    appId: "1:1046100589712:web:c3db69eebeeaf88727ac15"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MSG_SENDER_ID,
    appId: process.env.VUE_APP_ID
  };