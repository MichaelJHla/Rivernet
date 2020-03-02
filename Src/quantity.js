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
    
    dataSubmit.remove();
    
    //variable name has a 'v' to signify variable in order to not throw an exception
    //the varaible stores the value from the input field 
    var vSiteID = siteID.value;
    dataSubmit.child("site_ID").set(vSiteID); //Submits the data to the database under the name 'site_ID'
    
    var vCollector = collector.value;
    dataSubmit.child("collector").set(vCollector);
    
    var vAnalyst = analyst.value;
    dataSubmit.child("analyst").set(vAnalyst)
    
    var vEnterer = enterer.value;
    dataSubmit.child("enterer").set(vEnterer);
    
    var vDifPressure = difPressure.value;
    dataSubmit.child("differential_pressure").set(vDifPressure);
    
    var vAbsPressure = absPressure.value;
    dataSubmit.child("absolute_pressure").set(vAbsPressure);
    
    var vTemp = temp.value;
    dataSubmit.child("temperature").set(vTemp);
    
    var vWaterLevel = wlevel.value;
    dataSubmit.child("water_level").set(vWaterLevel);
    
    var vBarPressure = barPressure.value;
    dataSubmit.child("barometric_pressure").set(vBarPressure);
    
    //This is used to tell the user that the data has been uploaded to the database
    window.alert("Data submitted");
}