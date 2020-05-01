const puppeteer = require('puppeteer');
const { validateInput, validateAllQuality, validateDate } = require('.././util');

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// This module contains all of the tests for the ulil.js module, as well as the system (e2e) tests for our webapp. 
// All the functionality of the functions within that module are tested at 100% coverage. 

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

test('Should output false for validate date, too long a date segment', () => {

	const bool = validateDate("333-12-none");
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
//These tests use puppeteer to handle system tests. Puppeteer is a powerful testing tool that offers endless ways of testing your website. We have set up these tests to
//automatically run with Travis, but you can also run them manually with the other jest tests. If you want to test your local changes before changing them, set the page.goto to 
//http://localhost:8080/

//Submit Page:
test('should navigate to quality page and submit inputted data', async (done) => {
	const browser = await puppeteer.launch({
		headless: true, //We want it to be headless, otherwise it won't run in Travis. 
		slowMo: 80, //This is useful for when we are watching the test in non-headless mode.
		args: ['--no-sandbox', '--disable-setuid-sandbox','--window-size=1920,1080'] //'--window-size=1920,1080' USE:'--no-sandbox', '--disable-setuid-sandbox', 
	});
	const page = await browser.newPage(); //This command creates a new broswer page. 

	page.on('dialog', async dialog => {
		//When a dialog popup appears on the screen, like after the submit button is pressed, this takes care of it. 

		expect(dialog.message()).toBe('Data within valid parameters and added to edit page');

		//await dialog.accept(); //Handle the Dialog popup.

		
	});

	await page.goto(
		'https://yerc-rivernet.firebaseapp.com/' 
	);//file:///C:/dev/AppliedSoftwareEngineering/Rivernet/dist/index.html can be used.
	//or https://yerc-rivernet.firebaseapp.com/
	// or for local changes: http://localhost:8080/
	
	

	await page.click("#qualityButton", { waitUntil: 'domcontentloaded' }); //Nav to quality page

	

	await page.waitForSelector('input#collector'); //Make sure to wait for the page to load before doing commands.

	await page.click('input#collector');
	await page.type('input#collector', 'Anna'); //page.type commands the browser to type into specified document fields.

	await page.click('input#analyst');
	await page.type('input#analyst', 'Anna');

	await page.click('input#enterer');
	await page.type('input#enterer', 'Anna');

	await page.click('select#jarNum');
	await page.type('select#jarNum', '3');

	await page.click('select#dataPoint');
	await page.type('select#dataPoint', "PH");

	await page.click('input#date');
	await page.type('input#date', "12-12-1992");

	await page.click('input#item1'); //item1,2,3 are the input fields.
	await page.type('input#item1', "1");

	await page.click('input#item2');
	await page.type('input#item2', "2");

	await page.click('input#item3');
	await page.type('input#item3', "3");

	await page.click('#submit'); //Click the sumbit button! 


	const pageTitle = await page.title(); 
	expect(pageTitle).toBe('Quality - Rivernet');  //This is not the full test (see the dialog popup above), just another check to make sure stuff isn't broken.
	//The test will only succeed if the popup window is dismissed succesfully. All of the data is entered and the submit button is pushed. 
	
	await browser.close();
	done();
}, 30000);

//Edit Page:
test('should navigate to edit page and edit jar 1s data', async (done) => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'] //'--window-size=1920,1080' USE:'--no-sandbox', '--disable-setuid-sandbox', 
	});
	const page = await browser.newPage();

	page.on('dialog', async dialog => {
		

		if (dialog.message() == 'Switched to Jar 3') {
			//await dialog.accept(); //Handle the Dialog popup.
		}
		else if (dialog.message() == 'Switched to Jar 3') {
			
		} 
		else {expect(dialog.message()).toBe('Edits applied to data queue');}

		await dialog.accept(); //Handle the Dialog popup.


	});

	await page.goto(
		'https://yerc-rivernet.firebaseapp.com/'
	);//file:///C:/dev/AppliedSoftwareEngineering/Rivernet/dist/index.html can be used.
	//or https://yerc-rivernet.firebaseapp.com/



	await page.click("#quantityButton", { waitUntil: 'domcontentloaded' }); //Nav to edit

	

	await page.waitForSelector('input#date');
	await page.type('input#date', '12-12-1992');

	await page.click('select#jarNum');
	await page.type('select#jarNum', '3');

	await page.click('button.viewData');

	await page.click('input#ph1'); //Input values
	await page.type('input#ph1', "2");

	await page.click('button.tooltip');

	const finalText = await page.$eval('input#ph1', el => el.textContent);

	const pageTitle = await page.title();
	expect(pageTitle).toBe('Data Editing - Rivernet');
	//The test will only succeed if the popup window is dismissed succesfully, meaning the Edits were all deemed legal and the edit was submitted. 

	await browser.close();
	done();
}, 30000);

