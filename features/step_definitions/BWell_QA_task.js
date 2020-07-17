const assert = require("assert");
const { Builder, By, until } = require("selenium-webdriver");
const { setWorldConstructor, Given, Then, When, After } = require("cucumber");
const chromedriver = require("chromedriver");


Given(/^I visit My App CMS website$/, { timeout: 10000 }, function () {
  return this.driver.get("http://login.myappcms.com/");
});

// Locate form-signin-heading element and test text value
//
Then(/^I see the form heading$/, { timeout: 2000 }, function () {

  return this.driver.wait(until.elementLocated(By.className('form-signin-heading')), 2000).then(formHeading =>

    formHeading.getText().then(headingText =>
      assert.equal(
        headingText,
        'Please sign in',
        'Error in heading'
      )
    )

  );
});

// Locate appName element and test placeholder value
//
Then(/^I see Application Name field$/, { timeout: 2000 }, function () {

  return this.driver.wait(until.elementLocated(By.id('appName')), 2000).then(applicationNameField =>

    applicationNameField.getAttribute("placeholder").then(placeholder =>
      assert.equal(
        placeholder,
        'Application name',
        'Error in app name placeholder'
      )
    )

  );
});

// Locate username element and test placeholder value
//
Then(/^I see Email Address field$/, { timeout: 5000 }, function () {

  return this.driver.wait(until.elementLocated(By.id('username')), 5000).then(emailAddressField =>

    emailAddressField.getAttribute("placeholder").then(placeholder =>
      assert.equal(
        placeholder,
        'Email address',
        'Error in email address placeholder'
      )
    )

  );
});
// Locate Password field and test placeholder value
Then(/^I see Password field$/, { timeout: 5000 }, function () {

  return this.driver.wait(until.elementLocated(By.id('password')), 5000).then(passwordField =>

    passwordField.getAttribute("placeholder").then(placeholder =>
      assert.equal(
        placeholder,
        'Password',
        'Error with password'
      )
    )

  );
});

Then(/^I input app name "([^"]*)"$/, { timeout: 5000 }, function (keyword) {
  return this.driver.wait(until.elementLocated(By.id('appName')), 2000).then(applicationNameField =>

    this.driver.findElement({ id: "appName" }).sendKeys(keyword)
  )
});

When(/^I input username "([^"]*)"$/, async function (keyword) {
  return this.driver.findElement({ id: "username" }).sendKeys(keyword);
});

When(/^I input password "([^"]*)"$/, async function (keyword) {
  return this.driver.findElement({ id: "password" }).sendKeys(keyword);
});

When(/^I click Sign in button$/, async function () {
  return this.driver.findElement({ id: "login-submit" }).click();
});


Then(/^I should see my Dashboard$/, { timeout: 10000 }, function () {

  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(applicationNameField =>
    this.driver.get("http://login.myappcms.com/build")
  )
});

Given(/^I am on my Dashboard$/, { timeout: 10000 }, function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(applicationNameField =>
    this.driver.get("http://login.myappcms.com/build")
  )
});



//Scenario: User can search all Appointments services by name
When(/^I click Appointments$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(appointments =>

    this.driver.findElement({ id: "appitemId-00d010a0-d019-11e8-8605-0003ffbb5e34" }).click()
  )
});
When(/^I click Services$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(services =>

    this.driver.findElement({ className: "app-item-list" }).click()
  )
});
When(/^I click ascending by Service Name$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(ascending =>

    this.driver.findElement({ id: "gridcolumn-1111" }).click()
  )
});

When(/^I click Attractions$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(attractions =>

    this.driver.findElement({ id: "appitemId-00d00fa0-d019-11e8-8605-0003ffbb5e34" }).click()
  )
});

When(/^I input text "([^"]*)" in the Search box$/, async function (keyword) {
  return this.driver.wait(until.elementLocated(By.id('gridcolumn-1019-titleEl')), 10000).then(input =>
    this.driver.findElement({ className: "x-form-field x-form-text x-form-empty-field" }).sendKeys(keyword)
  )
});

Then(/^I should see correct result$/, { timeout: 10000 }, function () {
  return this.driver.wait(until.elementLocated(By.className('x-grid-cell-inner ')), 5000).then(result =>
    result.getText().then(result =>
      assert.equal(
        result,
        "New Title",
        "Error in results"
      )
    )
  )
})

When(/^I click Analytics$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('app-item-list')), 10000).then(coupons =>

    this.driver.findElement({ id: "tab-analytics" }).click()
  )
});
When(/^I click Social Media$/, async function () {
  return this.driver.wait(until.elementLocated(By.className('analytics-list-view')), 10000).then(fullscreen =>
    // this.driver.findElement(By.linkText("Show Fullscreen")).click()
    this.driver.findElement({ className: "social" }).click()
  )
});
Then(/^I should see Social Media detials page$/, { timeout: 10000 }, function () {
  return this.driver.wait(until.elementLocated(By.className('title')), 5000).then(result =>
    result.getText().then(result =>
      assert.equal(
        result,
        "Social Media",
        "Error in results"
      )
    )
  )
})
After(function () {
  return this.driver.close();
});

function CustomWorld(callback) {
  this.driver = new Builder().forBrowser("chrome").build();
}

setWorldConstructor(CustomWorld);
