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
    //Get jar number
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    var dataAccess = firebase.database().ref("jar" + jar +"/");//Variable that is referenced to upload data to firebase database
    dataAccess.on('value', function(data){
        var currentJar = data.val();
        document.getElementById("collector").value = currentJar.Collector;
        document.getElementById("analyst").value = currentJar.Analyst;
        document.getElementById("enterer").value = currentJar.Enterer;
        
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
    window.alert("Switched to jar " + jar);
}

function submitEdit() {
    //Get jar number
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    var dataSubmit = firebase.database().ref("jar" + jar +"/");
    
    dataSubmit.child("Collector").set(collector.value);
    dataSubmit.child("Analyst").set(analyst.value);
    dataSubmit.child("Enterer").set(enterer.value);
    
    dataSubmit.child("Nitrate1").set(nitrate1.value);
    dataSubmit.child("Nitrate2").set(nitrate2.value);
    dataSubmit.child("Nitrate3").set(nitrate3.value);
    
    dataSubmit.child("Nitrite1").set(nitrite1.value);
    dataSubmit.child("Nitrite2").set(nitrite2.value);
    dataSubmit.child("Nitrite3").set(nitrite3.value);
    
    dataSubmit.child("Ortho1").set(ortho1.value);
    dataSubmit.child("Ortho2").set(ortho2.value);
    dataSubmit.child("Ortho3").set(ortho3.value);
    
    dataSubmit.child("PH1").set(ph1.value);
    dataSubmit.child("PH2").set(ph2.value);
    dataSubmit.child("PH3").set(ph3.value);
    
    dataSubmit.child("Temp1").set(temp1.value);
    dataSubmit.child("Temp2").set(temp2.value);
    dataSubmit.child("Temp3").set(temp3.value);
    
    dataSubmit.child("Nitrogen1").set(nitrogen1.value);
    dataSubmit.child("Nitrogen2").set(nitrogen2.value);
    dataSubmit.child("Nitrogen3").set(nitrogen3.value);
    
    dataSubmit.child("Phosphorous1").set(phosphorous1.value);
    dataSubmit.child("Phosphorous2").set(phosphorous2.value);
    dataSubmit.child("Phosphorous3").set(phosphorous3.value);
    
    window.alert("Edits applied to queue");
}

function uploadAll(){
    var totalJars = 35;
    var i;
    for (i = 1; i <= totalJars; i++){
        var dataSubmit = firebase.database().ref("jar" + i +"/");
        
        dataSubmit.child("Collector").set("");
        dataSubmit.child("Analyst").set("");
        dataSubmit.child("Enterer").set("");

        dataSubmit.child("Nitrate1").set("");
        dataSubmit.child("Nitrate2").set("");
        dataSubmit.child("Nitrate3").set("");

        dataSubmit.child("Nitrite1").set("");
        dataSubmit.child("Nitrite2").set("");
        dataSubmit.child("Nitrite3").set("");

        dataSubmit.child("Ortho1").set("");
        dataSubmit.child("Ortho2").set("");
        dataSubmit.child("Ortho3").set("");

        dataSubmit.child("PH1").set("");
        dataSubmit.child("PH2").set("");
        dataSubmit.child("PH3").set("");

        dataSubmit.child("Temp1").set("");
        dataSubmit.child("Temp2").set("");
        dataSubmit.child("Temp3").set("");

        dataSubmit.child("Nitrogen1").set("");
        dataSubmit.child("Nitrogen2").set("");
        dataSubmit.child("Nitrogen3").set("");

        dataSubmit.child("Phosphorous1").set("");
        dataSubmit.child("Phosphorous2").set("");
        dataSubmit.child("Phosphorous3").set("");
    }
    window.alert("data submit succesful");
}

window.viewData = viewData;
window.submitEdit = submitEdit;
window.uploadAll = uploadAll;