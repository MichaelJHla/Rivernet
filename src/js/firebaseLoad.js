import * as app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//All of the firebase information needed to interact with the database
var firebaseConfig = {
    apiKey: "AIzaSyCK_wBNL7Fhpj7ZC0cDlZ3EhnTvbbYiE24",
    authDomain: "yerc-rivernet.firebaseapp.com",
    databaseURL: "https://yerc-rivernet.firebaseio.com",
    projectId: "yerc-rivernet",
    storageBucket: "yerc-rivernet.appspot.com",
    messagingSenderId: "634881168606",
    appId: "1:634881168606:web:14164f57364baa842d9e4f",
    measurementId: "G-FH7MS1FE95"
};

// Initialize our project application
app.initializeApp(firebaseConfig); //This is the only instance of the app. We used Singleton here. 

// Database reference, not yet loaded
var db = null;
var authe = null;

// Get cached db reference or create it
const getDatabaseReference = () => {
    if (db === null) {
        db = app.database();
    }
    return db;
}

//Returns the auth() of our app. If not created, create it.
const getAuth = () => {
    if (authe === null) {
        authe = app.auth();
    }
    return authe;

}

export {getDatabaseReference, getAuth};