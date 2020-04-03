const puppeteer = require('puppeteer');
const { validateInput, validateAllQuality, validateAllQuantity } = require('.././util');

import 'core-js/stable';
import 'regenerator-runtime/runtime'; //Trying htis

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


//-----------------------------------------------------------------
//E2E (UI testing):

test('should create an element with text and correct class', async (done) => {
	const browser = await puppeteer.launch({
		headless: true,
		//slowMo: 80,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	const page = await browser.newPage();
	await page.goto(
		'https://yerc-rivernet.firebaseapp.com/' //file:///C:/dev/AppliedSoftwareEngineering/Rivernet/dist/index.html can be used.
	);
	/*await page.click('input#name');
	await page.type('input#name', 'Anna');
	await page.click('input#age');
	await page.type('input#age', '28');
	await page.click('#btnAddUser');
	const finalText = await page.$eval('.user-item', el => el.textContent);*/
	const pageTitle = await page.title();
	expect(pageTitle).toBe('Rivernet');
	
	await browser.close();
	done();
}, 5000);

//Can use this for hints on testing Firebase:
/*beforeAll(async () => {
	await firebase.firestore().enableNetwork();
});

afterAll(async () => {
	await firebase.firestore().disableNetwork();
});
*/