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
    var j = document.getElementById("jarNum");
    var jar = j.options[j.selectedIndex].value;
    
    //Get data point
    var d = document.getElementById("dataPoint");
    var data = d.options[d.selectedIndex].value;
	
    var value1 = item1.value;
    var value2 = item2.value;
    var value3 = item3.value;
    
    var valid = validateAllQuality(value1, value2, value3);
    
    if (valid){
        var dataSubmit = firebase.database().ref("jar" + jar +"/");//Variable that is referenced to upload data to firebase database
        /* dataSubmit.child(data + "Collector").set(collector);
		dataSubmit.child(data + "Analyst").set(analyst);
		dataSubmit.child(data + "Enterer").set(enterer); */
		dataSubmit.child(data + "1").set(value1);
        dataSubmit.child(data + "2").set(value2);
        dataSubmit.child(data + "3").set(value3);

        window.alert("Data within valid parameters and added to check page");
    } else {
        window.alert("invalid input");
    }
}

window.submit = submit;