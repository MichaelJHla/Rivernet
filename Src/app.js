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
    
    //variable name has a 'v' to signify variable in order to not throw an exception
    //the varaible stores the value from the input field 
    var vSiteID = siteID.value;
    dataSubmit.child("site_ID").set(vSiteID); //Submits the data to the database under the name 'site_ID'
    
    var vCollector = collector.value;
    dataSubmit.child("collector").set(vCollector);
    
    var vAnalyst = analyst.value;
    dataSubmit.child("analyst").set(vAnalyst);
    
    var vEnterer = enterer.value;
    dataSubmit.child("enterer").set(vEnterer);
    
    var vNitrate1 = nitrate1.value;
    dataSubmit.child("nitrate1").set(vNitrate1);
    
    var vNitrate2 = nitrate2.value;
    dataSubmit.child("nitrate2").set(vNitrate2);
    
    var vNitrite1 = nitrite1.value;
    dataSubmit.child("nitrite1").set(vNitrite1);
    
    var vNitrite2= nitrite2.value;
    dataSubmit.child("nitrite2").set(vNitrite2);
    
    var vOrtho1 = ortho1.value;
    dataSubmit.child("orthophosphate1").set(vOrtho1);
    
    var vOrtho2 = ortho2.value;
    dataSubmit.child("orthophosphate2").set(vOrtho2);
    
    var vOrtho3 = ortho3.value;
    dataSubmit.child("orthophosphate3").set(vOrtho3);
    
    var vph = ph.value;
    dataSubmit.child("ph").set(vph);
    
    var vtemp = temp.value;
    dataSubmit.child("temperature").set(vtemp);
    
    var vNitrogen1 = nitrogen1.value;
    dataSubmit.child("nitrogen1").set(vNitrogen1);
    
    var vNitrogen2 = nitrogen2.value;
    dataSubmit.child("nitrogen2").set(vNitrogen2);
    
    var vPhosphorous1 = phosphorous1.value;
    dataSubmit.child("phosphorous1").set(vPhosphorous1);
    
    var vPhosphorous2 = phosphorous2.value;
    dataSubmit.child("phosphorous2").set(vPhosphorous2);
    
    //This is used to tell the user that the data has been uploaded to the database
    window.alert("Data submitted");
}