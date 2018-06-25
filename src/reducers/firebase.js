import firebase from 'firebase'

const firebaseConfig = {
  apiKey:            "",
  authDomain:        "",
  databaseURL:       "",
  projectId:         "",
  storageBucket:     "",
  messagingSenderId: ""
}

const myFirebase  = firebase.initializeApp(firebaseConfig)
const myFirestore = myFirebase.firestore();
const settings = {timestampsInSnapshots: true};
myFirestore.settings(settings);
export { myFirebase, myFirestore };
