//These imports are needed for the program to run properly
import logMessage from './logger';
import '../css/quantity.css';
var firebase = require('firebase');
// Log message to console
logMessage('Welcome to Data Check!');

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { validateInput, validateAllQuality, validateDate} from "./util";

//The purpose of this function is to see what jar the user wants to look at
// and then pulls up all that info in text boxes so the data can be evaluated and edited
function viewData(){
    //Get jar number
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    var vDate = date.value;
    
    //If the user does not follow proper date format an error message will be provided to the user
    if(!validateDate(vDate)){
        window.alert("Invalid date format");
        return;
    }
    
    //Used to access the data in the database at a specefic moment
    return firebase.database().ref().once('value').then(function(snapshot) {
        
        //These two lines are designed to convert all the keys of the database into an array
        var allDateSnapshot = snapshot.val(); 
        var allDates = Object.keys(allDateSnapshot);
        
        //This if statement runs if the date is represented in the database
        if (allDates.includes(vDate)){
            var currentJar = snapshot.child(vDate + "/jar" + jar).val();//Used for reading data from a specified jar
        
            //The blocks of text below this are broken into categories for readability
            //Each line assigns the value of the text box to the value associated in the database
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
            
            window.alert("Switched to Jar " + jar); //Tells the user they have switched jars
        } else {
            window.alert("No data found for this date");//Tells the user if there is no data associated with a date
        }
    });
}

//This function is designed to submit all the edits made by the user
function submitEdit() {
    //Get jar number
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    var vDate = date.value;
    if(!validateDate(vDate)){
        window.alert("Invalid date format");
        return;
    }
    
    var dataSubmit = firebase.database().ref(vDate + "/" + "jar" + jar +"/");//Variable that is referenced to upload data to firebase database
    
    //The blocks of text below this are broken into categories for readability
    //Each line uploads the data within each textbox to the database
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
    
    window.alert("Edits applied to data queue"); //Alerts the user that their changed were applied succesfully
}

//This fucntion is going to integrate directly with the database that is used by YERC
//After the data is uploaded the information in the database will be refreshed for the next user
//Currently just the refreshing of the database is implemented
function uploadAll(){
    var vDate = date.value;
    if(!validateDate(vDate)){
        window.alert("Invalid date format");
        return;
    }
    
    var totalJars = 35;
    var i;
    for (i = 1; i <= totalJars; i++){//Iterated through each jar to empty it
        var dataSubmit = firebase.database().ref(vDate + "/" + "jar" + i +"/");//Variable that is referenced to upload data to firebase database
        
        //Fills each possible field with a blank
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
    window.alert("data submit succesful"); //Alerts the user that the submit was succesful
}

//These liens are needed for webpack
window.viewData = viewData;
window.submitEdit = submitEdit;
window.uploadAll = uploadAll;