import logMessage from './js/logger';
import './css/style.css';
import * as firebase from './js/firebaseLoad';

//Everytime a new user enters the webapp, we log them in anonymously. 
//Only authenticated users can read/write to the database, so you MUST be in the app to read/write. 
firebase.getAuth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code; //This outputs an error code related to why they could not be logged in.
    var errorMessage = error.message;
    // ...
  });
// Log message to console
logMessage('Welcome to Expack!');