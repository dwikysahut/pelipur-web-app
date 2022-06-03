// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEUQfh3rmR3VLwkKXN0Q3YIfloTny8se0',
  authDomain: 'pelipur-apps.firebaseapp.com',
  projectId: 'pelipur-apps',
  databaseURL: 'https://pelipur-apps-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: 'pelipur-apps.appspot.com',
  messagingSenderId: '159512772457',
  appId: '1:159512772457:web:ec44ae80981d7bf6b207f8',
  measurementId: 'G-3SZET0LV44',
};

// Initialize Firebase

// const analytics = getAnalytics(app);

export default firebase.initializeApp(firebaseConfig);
