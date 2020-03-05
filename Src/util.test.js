const { validateInput } = require('./util');

test('Should output not false for validate input', () => {
	
	const bool = validateInput(55);
	expect(bool).toBe(!false);
	
});

test('Should output false for validate input', () => {
	
	const bool = validateInput('no');
	expect(bool).toBe(false);
	
});
