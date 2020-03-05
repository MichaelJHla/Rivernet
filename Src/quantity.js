const { validateInput } = require{'./util'};

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
    
    var validInput = true;//Used to represent if all input is valid
    
    //The first 4 variables here do not need to be checked for validity
    var vSiteID = siteID.value;
    
    var vCollector = collector.value;
    
    var vAnalyst = analyst.value;
    
    var vEnterer = enterer.value;
    
    //All remaining variables need to be checked to show that they are valid data
    //the naming convention v+'variable name' is used to differentiate between a value
    var vDifPressure = difPressure.value;
	validInput = validateInput(vDifPressure);
    
    var vAbsPressure = absPressure.value;
    validInput = validateInput(vAbsPressure);
    
    var vTemp = temp.value;
    validInput = validateInput(vTemp);
    
    var vWaterLevel = wlevel.value;
    if (isNaN(vWaterLevel)){
        validInput = false;
    }
    
    var vBarPressure = barPressure.value;
    if (isNaN(vBarPressure)){
        validInput = false;
    }
    
    if (validInput){ //If all input has been valid up until this point
        dataSubmit.remove(); //Removes all previous info from the database
        
        //Submits the data to the database under the naming convention:
        // dataSubmit.child(VARIABLE_NAME).set(VARIABLE)
        dataSubmit.child("site_ID").set(vSiteID);
        dataSubmit.child("collector").set(vCollector);
        dataSubmit.child("analyst").set(vAnalyst);
        dataSubmit.child("enterer").set(vEnterer);
        dataSubmit.child("differential_pressure").set(vDifPressure);
        dataSubmit.child("absolute_pressure").set(vAbsPressure);
        dataSubmit.child("temperature").set(vTemp);
        dataSubmit.child("water_level").set(vWaterLevel);
        dataSubmit.child("barometric_pressure").set(vBarPressure);

        //This is used to tell the user that the data has been uploaded to the database succesfully
        window.alert("Data submitted");
    } else{ //The user gets notified about invalid input and nothing is submitted
        window.alert("Invalid input");
    }
    
}