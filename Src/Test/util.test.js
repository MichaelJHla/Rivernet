const { validateInput, validateAllQuality } = require('.././util');


//Unit:

test('Should output true for validate input', () => {
	var bool = true;
	bool = validateInput(55, false);
	expect(bool).toBe(true);
	
});

test('Should output true for validate input on non-empty value', () => {
	var bool = true;
	bool = validateInput(55, true);
	expect(bool).toBe(true);
	
});

test('Should output false for validate input', () => {
	
	const bool = validateInput('no', false);
	expect(bool).toBe(false);
	
});

test('Should output false for validate input on empty value', () => {
	
	const bool = validateInput(, true);
	expect(bool).toBe(false);
	
});




//Integration:

test('Should output true for the entire check.', () => {
	var bool = true;
	bool = validateAllQuality(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5); //All #s
	expect(bool).toBe(true);
	
});

test('Should output false for the entire check.', () => {
	var bool = true;
	bool = validateAllQuality(5, 5, 5, 'm', 5, 5, 5, 5, 5, 5, 5, 5, 5); //All #s
	expect(bool).toBe(false);
	
});

