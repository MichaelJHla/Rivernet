import logMessage from './logger';
import '../css/quality.css';
var firebase = require('firebase');
// Log message to console
logMessage('Welcome to Quality!');

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

firebase.initializeApp(firebaseConfig);

import { validateInput, validateAllQuality } from "./util";

function submit() {
    //Get jar number
    var e = document.getElementById("jarNum");
    var strUser1 = e.options[e.selectedIndex].value;
    
    //Get data point
    var j = document.getElementById("dataPoint");
    var strUser2 = j.options[j.selectedIndex].value;
    
    var value1 = item1.value;
    var value2 = item2.value;
    var value3 = item3.value;
    
    var valid = validateAllQuality(value1, value2, value3);
    
    if (valid){
        var dataSubmit = firebase.database().ref("jar" + strUser1 +"/");//Variable that is referenced to upload data to firebase database
        dataSubmit.child(strUser2 + "1").set(value1);
        dataSubmit.child(strUser2 + "2").set(value2);
        dataSubmit.child(strUser2 + "3").set(value3);

        window.alert("Data within valid parameters and added to check page");
    } else {
        window.alert("invalid input");
    }
}

window.submit = submit;