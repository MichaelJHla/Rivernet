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

function viewData(){
    window.alert("Test view data");
    //Get jar number
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    var dataAccess = firebase.database().ref("jar" + jar +"/");//Variable that is referenced to upload data to firebase database
    dataAccess.on('value', function(data){
        var currentJar = data.val();
        document.getElementById("nitrate1").value = currentJar.Nitrate1;
        document.getElementById("nitrate2").value = currentJar.Nitrate2;
        document.getElementById("nitrate3").value = currentJar.Nitrate3;
        
        document.getElementById("nitrite1").value = currentJar.Nitrite1;
        document.getElementById("nitrite2").value = currentJar.Nitrite2;
        document.getElementById("nitrite3").value = currentJar.Nitrite3;
        
        document.getElementById("ortho1").value = currentJar.Ortho1;
        document.getElementById("ortho2").value = currentJar.Ortho2;
        document.getElementById("ortho3").value = currentJar.Ortho3;
        
        document.getElementById("ph1").value = currentJar.PH1;
        document.getElementById("ph2").value = currentJar.PH2;
        document.getElementById("ph3").value = currentJar.PH3;
        
        document.getElementById("temp1").value = currentJar.Temp1;
        document.getElementById("temp2").value = currentJar.Temp2;
        document.getElementById("temp3").value = currentJar.Temp3;
        
        document.getElementById("nitrogen1").value = currentJar.Nitrogen1;
        document.getElementById("nitrogen2").value = currentJar.Nitrogen2;
        document.getElementById("nitrogen3").value = currentJar.Nitrogen3;
        
        document.getElementById("phosphorous1").value = currentJar.Phosphorous1;
        document.getElementById("phosphorous2").value = currentJar.Phosphorous2;
        document.getElementById("phosphorous3").value = currentJar.Phosphorous3;
    });
}

function uploadAll() {
    window.alert("Test upload all");
}

window.viewData = viewData;
window.uploadAll = uploadAll;