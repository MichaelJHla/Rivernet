import logMessage from './logger';
import '../css/quality.css';
var q = [];
q.push({text: ''});

// Create a template to render your questions
// In this example I use handlebars 
var source   = document.getElementById("myForm").innerHTML;
var template = Handlebars.compile(source);
var context = {questions: q};

function renderTemplate(){
  var html    = template(context);
  document.getElementById('form-placeholder').innerHTML = html;
}

//Render the template with the first question
renderTemplate();

//Add an event so when the user clicks the button you add a new question
document.getElementById("open-button").addEventListener('click', function(){
      // Add the new question
      q.push({text: ""});
      
      //Re-render the template
      renderTemplate();
  });