import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAMDlSLUYZB6Dvu9mjRMOPrcFitRCHR7dQ",
    authDomain: "expensify-43eed.firebaseapp.com",
    databaseURL: "https://expensify-43eed.firebaseio.com",
    projectId: "expensify-43eed",
    storageBucket: "expensify-43eed.appspot.com",
    messagingSenderId: "817042816852",
    appId: "1:817042816852:web:f9ef4ae4af8e406aa712c1",
    measurementId: "G-DFZS17FVT0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { firebase, database as default };