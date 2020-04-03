const { validateInput, validateAllQuality, validateAllQuantity } = require('.././util');

//-----------------------------------------------------------------
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

test('Should output false for validate input on empty value (undefined)', () => {

	const bool = validateInput(undefined, true);
	expect(bool).toBe(false);

});

test('Should output false for validate input on empty value', () => {

	const bool = validateInput("", true);
	expect(bool).toBe(false);

});



//-----------------------------------------------------------------
//Integration:

//Quality:
test('Should output true for the entire quality check.', () => {
	var bool = true;
	bool = validateAllQuality(1, 1, 1); //All #s
	expect(bool).toBe(true);

});

test('Should output false for the entire quality check.', () => {
	var bool = true;
	bool = validateAllQuality(1, 1, "no");
	expect(bool).toBe(false);

});

//------------
//Quantity: (Won't be used now)
/*test('Should output true for the entire quantity check.', () => {
	var bool = true;
	bool = validateAllQuantity(5, 5, 5, 5, 5);

	expect(bool).toBe(true);

});

test('Should output false for the entire quantity check.', () => {
	var bool = true;
	bool = validateAllQuantity(5, 'm', 5, 5, 5);

	expect(bool).toBe(false);

});*/

//------------




