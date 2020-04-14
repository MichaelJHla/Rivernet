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
    
    if (valid && validDate){//If the data points pass thee validity tests
        var dataSubmit = firebase.database().ref("jar" + jar +"/");//Variable that is referenced to upload data to firebase database
        
        //These three lines submit the information regarding the people who interacted with the data
        dataSubmit.child("Collector").set(collector.value);
		dataSubmit.child("Analyst").set(analyst.value);
		dataSubmit.child("Enterer").set(enterer.value);
        
        //These lines submit the data to the database in the proper format
		dataSubmit.child(data + "1").set(value1);
        dataSubmit.child(data + "2").set(value2);
        dataSubmit.child(data + "3").set(value3);
        
        //Allerts the user that the data has been succesfully added
        window.alert("Data within valid parameters and added to check page");
    } else if(!valid) {
        //If the data is invalid nothing happens other than the user is notified that the data didn't go through properly
        window.alert("invalid input");
    } else if (!validDate){
        window.alert("invalid date");
    }
}

window.submit = submit; //Needed for webpack