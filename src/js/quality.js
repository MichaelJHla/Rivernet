//These imports are needed for the program to run properly
import logMessage from './logger';
import '../css/quality.css';
//var firebase = require('firebase/app'); //The old
import {getDatabaseReference} from './firebaseLoad';
// Log message to console
logMessage('Welcome to Quality!');


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
    //This line accesses the data one time rather than listening for many changes
    return getDatabaseReference().ref().once('value').then(function(snapshot) {
        
        //These two lines are designed to convert all the keys of the database into an array
        var allDateSnapshot = snapshot.val(); 
        var allDates = Object.keys(allDateSnapshot);
        
        if (!allDates.includes(vDate)){//If the date trying to be accessed by the user does no exist do the following
            var totalJars = 35;
            var i;
            for (i = 1; i <= totalJars; i++){//Iterated through each jar to create an empty version of it
                //Variable used to reference firebase and to upload empty data for each jar
                var emptySubmit = firebase.database().ref(vDate + "/" + "jar" + i +"/");
                
                //Fills each possible field with a blank
                emptySubmit.child("Collector").set("");
                emptySubmit.child("Analyst").set("");
                emptySubmit.child("Enterer").set("");

                emptySubmit.child("Nitrate1").set("");
                emptySubmit.child("Nitrate2").set("");
                emptySubmit.child("Nitrate3").set("");

                emptySubmit.child("Nitrite1").set("");
                emptySubmit.child("Nitrite2").set("");
                emptySubmit.child("Nitrite3").set("");

                emptySubmit.child("Ortho1").set("");
                emptySubmit.child("Ortho2").set("");
                emptySubmit.child("Ortho3").set("");

                emptySubmit.child("PH1").set("");
                emptySubmit.child("PH2").set("");
                emptySubmit.child("PH3").set("");

                emptySubmit.child("Temp1").set("");
                emptySubmit.child("Temp2").set("");
                emptySubmit.child("Temp3").set("");

                emptySubmit.child("Nitrogen1").set("");
                emptySubmit.child("Nitrogen2").set("");
                emptySubmit.child("Nitrogen3").set("");

                emptySubmit.child("Phosphorous1").set("");
                emptySubmit.child("Phosphorous2").set("");
                emptySubmit.child("Phosphorous3").set("");
            }
        }
        
        //Variable that is referenced to upload user submitted data to firebase database
        var dataSubmit = getDatabaseReference().ref(vDate + "/" + "jar" + jar +"/");
        
        //These three lines submit the information regarding the people who interacted with the data
        dataSubmit.child("Collector").set(collector.value);
		dataSubmit.child("Analyst").set(analyst.value);
		dataSubmit.child("Enterer").set(enterer.value);
        
        //These lines submit the data to the database in the proper format
		dataSubmit.child(data + "1").set(value1);
        dataSubmit.child(data + "2").set(value2);
        dataSubmit.child(data + "3").set(value3);
        
        //Allerts the user that the data has been succesfully added
        window.alert("Data within valid parameters and added to edit page");
    });
}

window.submit = submit; //Needed for webpack
window.checkDate = checkDate;