const puppeteer = require('puppeteer');
const { validateInput, validateAllQuality, validateDate } = require('.././util');

import 'core-js/stable';
import 'regenerator-runtime/runtime'; //Trying htis

//-----------------------------------------------------------------
//Unit:

//Validate Input:
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

test('Should output false for validate input on negative value', () => {

	const bool = validateInput(-5, false);
	expect(bool).toBe(false);

});

test('Should output false for validate input on too high a value', () => {

	const bool = validateInput(100, false);
	expect(bool).toBe(false);

});



//Validate Date:
test('Should output true for validate date', () => {

	const bool = validateDate("09-30-1992");
	expect(bool).toBe(true);

});

test('Should output true for validate date even though crazy date', () => {

	const bool = validateDate("00-00-0000");
	expect(bool).toBe(true);

});


test('Should output false for validate date, no dashes', () => {

	const bool = validateDate("123123123");
	expect(bool).toBe(false);

});

test('Should output false for validate date, no number', () => {

	const bool = validateDate("no-no-none");
	expect(bool).toBe(false);

});

test('Should output false for validate date, no number 2', () => {

	const bool = validateDate("12-no-none");
	expect(bool).toBe(false);

});

test('Should output false for validate date, no number 3', () => {

	const bool = validateDate("12-12-none");
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

test('should navigate to quantity page and submit inputted data', async (done) => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ['--no-sandbox', '--disable-setuid-sandbox','--window-size=1920,1080'] //'--window-size=1920,1080' USE:'--no-sandbox', '--disable-setuid-sandbox', 
	});
	const page = await browser.newPage();

	page.on('dialog', async dialog => {
		console.log(dialog.message());

		expect(dialog.message()).toBe('Data within valid parameters and added to check page');
		await dialog.accept(); //Handle the Dialog popup.

		
	});

	await page.goto(
		'https://yerc-rivernet.firebaseapp.com/' 
	);//file:///C:/dev/AppliedSoftwareEngineering/Rivernet/dist/index.html can be used.
	
	

	await page.click("#qualityButton", { waitUntil: 'domcontentloaded' }); //Nav to quality

	//await page.waitForNavigation();

	await page.waitForSelector('input#collector');

	await page.click('input#collector');
	await page.type('input#collector', 'Anna');

	await page.click('input#analyst');
	await page.type('input#analyst', 'Anna');

	await page.click('input#enterer');
	await page.type('input#enterer', 'Anna');

	await page.click('select#jarNum');
	await page.type('select#jarNum', '3');

	await page.click('select#dataPoint');
	await page.type('select#dataPoint', "PH");

	await page.click('input#item1'); //Input values
	await page.type('input#item1', "1");

	await page.click('input#item2');
	await page.type('input#item2', "2");

	await page.click('input#item3');
	await page.type('input#item3', "3");

	await page.click('#submit'); //Click the sumbit button! 


	const pageTitle = await page.title();
	expect(pageTitle).toBe('Quality - Rivernet'); 
	//The test will only succeed if the popup window is dismissed succesfully. All of the data is entered and the submit button is pushed. 
	
	await browser.close();
	done();
}, 30000);

//Can use this for hints on testing Firebase:
/*beforeAll(async () => {
	await firebase.firestore().enableNetwork();
});

afterAll(async () => {
	await firebase.firestore().disableNetwork();
});
*/