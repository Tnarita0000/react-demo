import firebase from 'firebase'
import { firebaseConfig } from '../firebase.config'

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export {
  firebase,
  firestore
};
