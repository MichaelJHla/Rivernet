//These imports are needed for the program to run properly
import logMessage from './logger';
import '../css/quality.css';
var firebase = require('firebase');
// Log message to console
logMessage('Welcome to Quality!');

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

firebase.initializeApp(firebaseConfig);//Config firebase

import { validateInput, validateAllQuality, validateDate} from "./util";//Impports needed for used functions

//This funcition is designed to submit the data to the database in the proper format
function submit() {
    //Get jar number that was used in the dropdown
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    //Get data point that is being entered by the user
    var d = document.getElementById("dataPoint");
    var data = d.options[d.selectedIndex].value;
	
    //Assigns the three data fields to variables
    var value1 = item1.value;
    var value2 = item2.value;
    var value3 = item3.value;
    var vDate = date.value;
    
    //This calls a method that is used to check the validity of the data points
    var valid = validateAllQuality(value1, value2, value3);
    var validDate = validateDate(vDate);
    
    if (valid && validDate){//If the data points pass the validity tests
        checkDate(value1, value2, value3, vDate, jar, data);        
    } else if(!valid) {
        //If the data is invalid nothing happens other than the user is notified that the data didn't go through properly
        window.alert("invalid input");
    } else if (!validDate){
        window.alert("invalid date");
    }
}

function checkDate(value1, value2, value3, vDate, jar, data){
    return firebase.database().ref().once('value').then(function(snapshot) {
        var allDateSnapshot = snapshot.val();
        var allDates = Object.keys(allDateSnapshot);
        
        if (!allDates.includes(vDate)){
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
        }
        
        var finalSubmit = firebase.database().ref(vDate + "/" + "jar" + jar +"/");//Variable that is referenced to upload data to firebase database
        
        //These three lines submit the information regarding the people who interacted with the data
        finalSubmit.child("Collector").set(collector.value);
		finalSubmit.child("Analyst").set(analyst.value);
		finalSubmit.child("Enterer").set(enterer.value);
        
        //These lines submit the data to the database in the proper format
		finalSubmit.child(data + "1").set(value1);
        finalSubmit.child(data + "2").set(value2);
        finalSubmit.child(data + "3").set(value3);
        
        //Allerts the user that the data has been succesfully added
        window.alert("Data within valid parameters and added to check page");
    });
}

window.submit = submit; //Needed for webpack
window.checkDate = checkDate;