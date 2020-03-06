

	const validateInput =(inputValue) => {
		if (isNaN(inputValue)){ //If the value isn't the correct format
        return false;	//Return false
		}
		return true;
	}
	
	
	exports.validateAllQuality = (n1, n2, n3, n4, orth1, orth2, orth3, ph, temp, nitr1, nitr2, phos1, phos2 ) => {
		
		var validInput = true;//Used to represent if all input is valid
		
		if(validateInput(n1) &
		validateInput(n2) &
		validateInput(n3) & 
		validateInput(n4) & 
		validateInput(orth1) & 
		validateInput(orth2) & 
		validateInput(orth3) & 
		validateInput(ph) &
		validateInput(temp) & 
		validateInput(nitr1) &
		validateInput(nitr2) & 
		validateInput(phos1) & 
		validateInput(phos2) 
		)
		{
			return true; //Then they are all valid.
		}
		else {return false;} //One or more is not valid.
		
    
		/*
		//var vNitrate2 = nitrate2.value;
		validInput = validateInput(n2);
    
		//var vNitrite3 = nitrite1.value;
		validInput = validateInput(n3);
    
		//var vNitrite4 = nitrite2.value;
		validInput = validateInput(n4);
    
		//var vOrtho1 = ortho1.value;
		validInput = validateInput(orth1);
    
		//var vOrtho2 = ortho2.value;
		validInput = validateInput(orth2);
    
		//var vOrtho3 = ortho3.value;
		validInput = validateInput(orth3);
    
		//var vph = ph.value;
		validInput = validateInput(ph);
    
		//var vtemp = temp.value;
		validInput = validateInput(temp);
    
		//var vNitrogen1 = nitrogen1.value;
		validInput = validateInput(nitr1);
    
		//var vNitrogen2 = nitrogen2.value;
		validInput = validateInput(nitr2);
    
		//var vPhosphorous1 = phosphorous1.value;
		validInput = validateInput(phos1);
    
		//var vPhosphorous2 = phosphorous2.value;
		validInput = validateInput(phos2);
			
		return validInput; //Either True if all valid, false or undefined if one failed.
		*/
	}
	
	exports.validateInput = validateInput;
	//exports.validateAllQuality = validateAllQuality;
	
	