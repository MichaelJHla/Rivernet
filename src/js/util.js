//This is designed to check each passed input value to see if it is a number
//If it is not a number, false is returned
const validateInput = (inputValue, notEmpty) => {
	if (isNaN(inputValue)) { //If the value isn't the correct format
		return false;	//Return false
	}
	if (notEmpty && inputValue.length === 0) {
		return false;
	}

	return true;
}

//This is designed to validate the datapoints and returns true if they are all valid
const validateAllQuality = (value1, value2, value3) => {
	if (
		validateInput(value1, false) &&
		validateInput(value2, false) &&
        validateInput(value3, false)
	) {
		return true; //Then they are all valid; return true
	}
	else { return false; } //One or more is not valid. Return false.
}

const validateDate = (dateVal) => {
    var validInput = true;
    
    if (dateVal.length != 10){
        return false;
    } else {
        var dateArray = dateVal.split("-");
        if (
            validateInput(dateArray[0], false) &&
            validateInput(dateArray[1], false) &&
            validateInput(dateArray[2], false)
        ) {
            return true;
        } else {
            return false;
        }
    }
}

export { validateInput, validateAllQuality, validateDate}; //Used for webpack to export the methods to be used by other files