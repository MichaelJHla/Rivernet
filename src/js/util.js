const validateInput = (inputValue, notEmpty) => {
	if (isNaN(inputValue)) { //If the value isn't the correct format
		return false;	//Return false
	}
	if (notEmpty && inputValue.length === 0) {
		return false;
	}

	return true;
}

const validateAllQuality = (nitrate1, nitrate2, nitrate3, nitrite1, nitrite2, nitrite3, ortho1, ortho2, ortho3, ph1, ph2, ph3, temp1, temp2, temp3, nitrogen1, nitrogen2, nitrogen3, phosphorous1, phosphorous2, phosphorous3) => {

	var validInput = true;//Used to represent if all input is valid

	if (
		validateInput(nitrate1, false) &&
		validateInput(nitrate2, false) &&
        validateInput(nitrate3, false) &&
        
		validateInput(nitrite1, false) &&
		validateInput(nitrite2, false) &&
        validateInput(nitrite3, false) &&
        
        validateInput(ortho1, false) &&
		validateInput(ortho2, false) &&
        validateInput(ortho3, false) &&
        
        validateInput(ph1, false) &&
		validateInput(ph2, false) &&
        validateInput(ph3, false) &&
        
        validateInput(temp1, false) &&
		validateInput(temp2, false) &&
        validateInput(temp3, false) &&
        
        validateInput(nitrogen1, false) &&
		validateInput(nitrogen2, false) &&
        validateInput(nitrogen3, false) &&
        
        validateInput(phosphorous1, false) &&
		validateInput(phosphorous2, false) &&
        validateInput(phosphorous3, false) 
	) {
		return true; //Then they are all valid; return true
	}
	else { return false; } //One or more is not valid. Return false.
}

export { validateInput, validateAllQuality};