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
  return this.driver.wait(until.elementLocated(By.className('form-signin-heading')), 2000).then(formHeading =>

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

// Then(/^I see the CMS DEMO ACCOUNT$/, { timeout: 10000 }, function () {

//   return this.driver.wait(until.elementLocated(By.className('main-title')), 2000).then(mainTitle =>

//     mainTitle.getText().then(mainTitle =>
//       assert.equal(
//         mainTitle,
//         'CMS DEMO ACCOUNT',
//         'Error in heading'
//       )
//     )

//   );
// });
// Then(/^I should see my Dashboard$/, { timeout: 10000 }, function () {
//   return this.driver.get("http://login.myappcms.com/build");
// });

// Given(/^I am on my Dashboard$/, { timeout: 10000 }, function () {
//   return this.driver.get("http://login.myappcms.com/build");
// });

// Then(/^I see the CMS DEMO ACCOUNT$/, { timeout: 10000 }, function () {

//   return this.driver.wait(until.elementLocated(By.className('main-title')), 2000).then(mainTitle =>

//     mainTitle.getText().then(mainTitle =>
//       assert.equal(
//         mainTitle,
//         'CMS DEMO ACCOUNT',
//         'Error in heading'
//       )
//     )

//   );
// });

// When(/^I click Attractions$/, async function () {
//   return this.driver.findElement({ id: "appitemId-00d00fa0-d019-11e8-8605-0003ffbb5e34" }).click();
// });

// When(/^I click Services$/, async function () {
//   return this.driver.findElement({ className: "app-item-list" }).click();
// });




//Scenario: User can search all Appointments services by name
// Then(/^I click Attractions$/, async function () {
//   return this.driver.findElement({ className: "applicationItemBlockContents context-menu-one" }).click();
// });



After(function () {
  return this.driver.close();
});

function CustomWorld(callback) {
  this.driver = new Builder().forBrowser("chrome").build();
}

setWorldConstructor(CustomWorld);
