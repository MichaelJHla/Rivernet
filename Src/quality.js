const { validateInput, validateAllQuality } = require('./util'); //using function from util.js

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

function submit(){
    var dataSubmit = firebase.database().ref();//Variable that is referenced to upload data to firebase database
    
    
    
    //The first 4 variables here do not need to be checked for validity
    var vSiteID = siteID.value;
    
    var vCollector = collector.value;
    
    var vAnalyst = analyst.value;
    
    var vEnterer = enterer.value;
    
    //All remaining variables need to be checked to show that they are valid data
    //the naming convention v+'variable name' is used to differentiate between a value
    
	/*
	var vNitrate1 = nitrate1.value;
    validInput = validateInput(nitrate1.value);
    
    var vNitrate2 = nitrate2.value;
    validInput = validateInput(vNitrate2);
    
    var vNitrite3 = nitrite1.value;
    validInput = validateInput(vNitrite1);
    
    var vNitrite4 = nitrite2.value;
    validInput = validateInput(vNitrite2);
    
    var vOrtho1 = ortho1.value;
    validInput = validateInput(vOrtho1);
    
    var vOrtho2 = ortho2.value;
    validInput = validateInput(vOrtho2);
    
    var vOrtho3 = ortho3.value;
    validInput = validateInput(vOrtho3);
    
    var vph = ph.value;
    validInput = validateInput(vph);
    
    var vtemp = temp.value;
    validInput = validateInput(vtemp);
    
    var vNitrogen1 = nitrogen1.value;
    validInput = validateInput(vNitrogen1);
    
    var vNitrogen2 = nitrogen2.value;
    validInput = validateInput(vNitrogen2);
    
    var vPhosphorous1 = phosphorous1.value;
    validInput = validateInput(vPhosphorous1);
    
    var vPhosphorous2 = phosphorous2.value;
    validInput = validateInput(vPhosphorous2);
    */
	
	//Used to represent if all input is valid
	var validInput = validateAllQuality(
	nitrate1.value, 
	nitrate2.value,
	nitrite1.value, 
	nitrite2.value, 
	ortho1.value,
	ortho2.value,
	ortho3.value,
	ph.value,
	temp.value,
	nitrogen1.value,
	nitrogen2.value,
	phosphorous1.value,
	phosphorous2.value
	);
	
    if (validInput){ //If all input has been valid up until this point
        dataSubmit.remove(); //Removes all previous info from the database
        
        //Submits the data to the database under the naming convention:
        // dataSubmit.child(VARIABLE_NAME).set(VARIABLE)
        dataSubmit.child("site_ID").set(vSiteID); //Submits the data to the database under the name 'site_ID'
        dataSubmit.child("collector").set(vCollector);
        dataSubmit.child("analyst").set(vAnalyst);
        dataSubmit.child("enterer").set(vEnterer);
        dataSubmit.child("nitrate1").set(vNitrate1);
        dataSubmit.child("nitrate2").set(vNitrate2);
        dataSubmit.child("nitrite1").set(vNitrite1);
        dataSubmit.child("nitrite2").set(vNitrite2);
        dataSubmit.child("orthophosphate1").set(vOrtho1);
        dataSubmit.child("orthophosphate2").set(vOrtho2);
        dataSubmit.child("orthophosphate3").set(vOrtho3);
        dataSubmit.child("ph").set(vph);
        dataSubmit.child("temperature").set(vtemp);
        dataSubmit.child("nitrogen1").set(vNitrogen1);
        dataSubmit.child("nitrogen2").set(vNitrogen2);
        dataSubmit.child("phosphorous1").set(vPhosphorous1);
        dataSubmit.child("phosphorous2").set(vPhosphorous2);

        //This is used to tell the user that the data has been uploaded to the database
        window.alert("Data submitted");
    } else{ //The user gets notified about invalid input and nothing is submitted
        window.alert("Invalid input");
    }
}