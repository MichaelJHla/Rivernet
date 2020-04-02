const validateInput = (inputValue, notEmpty) => {
	if (isNaN(inputValue)) { //If the value isn't the correct format
		return false;	//Return false
	}
	if (notEmpty && inputValue.length === 0) {
		return false;
	}

	return true;
}

const validateAllQuality = (value1, value2, value3) => {

	var validInput = true;//Used to represent if all input is valid

	if (
		validateInput(value1, false) &&
		validateInput(value2, false) &&
        validateInput(value3, false)
	) {
		return true; //Then they are all valid; return true
	}
	else { return false; } //One or more is not valid. Return false.
}

export { validateInput, validateAllQuality};