import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyD8uthbNPZGtNrTLFxDp7ptQaB0H9tcHfc",
   authDomain: "goalcoach-b91e8.firebaseapp.com",
   databaseURL: "https://goalcoach-b91e8.firebaseio.com",
   projectId: "goalcoach-b91e8",
   storageBucket: "goalcoach-b91e8.appspot.com",
   messagingSenderId: "447979645243"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');