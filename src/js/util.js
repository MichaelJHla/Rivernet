//This is designed to check each passed input value to see if it is a number
//If it is not a number, false is returned
const validateInput = (inputValue, notEmpty, date) => {
    if (isNaN(inputValue)) { //If the value isn't the correct format
        //console.log("Input must be a number.");
		return false;	//Return false
	}
    if (notEmpty && inputValue.length === 0) {
        //console.log("Input cannot be empty.");
		return false;
    }

    if (inputValue < 0) {
        //console.log("Negative input is invalid.");
        return false; //Shouldn't be negative.
    }

    if (inputValue > 70 && !date) {
        return false; //The highest value should be Temperature, and that shouldn't get this high. This value can be changed to fit needs.
    }

	return true;
}

//This is designed to validate the datapoints and returns true if they are all valid
const validateAllQuality = (value1, value2, value3) => {
	if (
		validateInput(value1, false, false) &&
		validateInput(value2, false, false) &&
        validateInput(value3, false, false)
	) {
		return true; //Then they are all valid; return true
	}
	else { return false; } //One or more is not valid. Return false.
}

//This is designed to validate the user entered date to make sure it is a valid date as specified to the user
const validateDate = (dateVal) => {    
    var dateArray = dateVal.split("-");//This splits the date into seperate month, day, and year substrings in an array
    
    //This if statement checks if the array split into the correct amount of items
    if (dateArray.length != 3){
        return false;
    }
    
    //This if statement checks if each component of the date is the correct length
    if (dateArray[0].length != 2 || dateArray[1].length != 2 || dateArray[2].length != 4){
        return false;
    }
    
    //This if statements checks if all the provided date fields are actually numbers (and not negative, etc)
    if (
        validateInput(dateArray[0], false, true) &&
        validateInput(dateArray[1], false, true) &&
        validateInput(dateArray[2], false, true)
    ) {
        return true;
    } else {
        return false;
    }
}

export { validateInput, validateAllQuality, validateDate}; //Used for webpack to export the methods to be used by other files