import logMessage from './logger';
import '../css/quantity.css';
var firebase = require('firebase');
// Log message to console
logMessage('Welcome to Data Check!');

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { validateInput, validateAllQuality } from "util";

function uploadAll() {
    window.alert("Test upload all");
}

function viewData(){
    window.alert("Test view data");
}

window.viewData = viewData;
window.uploadAll = uploadAll;