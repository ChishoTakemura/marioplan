import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDKeQduee1SJnTY4BFN6AkOQCgWqUuXKGk',
  authDomain: 'marioplan-4a815.firebaseapp.com',
  databaseURL: 'https://marioplan-4a815.firebaseio.com',
  projectId: 'marioplan-4a815',
  storageBucket: 'marioplan-4a815.appspot.com',
  messagingSenderId: '519950081500',
  appId: '1:519950081500:web:c05d91f3431c87a38e8319',
  measurementId: 'G-NZK2WWCLPD'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
