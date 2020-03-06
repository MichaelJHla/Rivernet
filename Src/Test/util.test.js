const { validateInput, validateAllQuality } = require('.././util');

test('Should output not false for validate input', () => {
	var bool = true;
	bool = validateInput(55);
	expect(bool).toBe(true);
	
});

test('Should output false for validate input', () => {
	
	const bool = validateInput('no');
	expect(bool).toBe(false);
	
});

//Integration:

test('Should output true for the entire check.', () => {
	var bool = true;
	bool = validateAllQuality(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5); //All #s
	expect(bool).toBe(true);
	
});

