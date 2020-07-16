const assert = require("assert");
const { Builder, By, until } = require("selenium-webdriver");
const { setWorldConstructor, Given, Then, When, After } = require("cucumber");
const chromedriver = require("chromedriver");



// var assert = require("assert");
// const { Builder, By } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

//const {
//   setWorldConstructor,
//   Given,
//   When,
//   Then,
//   And,
//   Before,
//   After,
// } = require("cucumber");

Given(/^I visit My App CMS website$/, { timeout: 10000 }, function () {
  return this.driver.get("http://login.myappcms.com");
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
        'Apple'
      )
    )

  );
});



When(/^I input app name "([^"]*)"$/, async function (keyword) {
  return this.driver.findElement({ id: "appName" }).sendKeys(keyword);
});

When(/^I input username "([^"]*)"$/, async function (keyword) {
  return this.driver.findElement({ id: "username" }).sendKeys(keyword);
});

When(/^I input password "([^"]*)"$/, async function (keyword) {
  return this.driver.findElement({ id: "password" }).sendKeys(keyword);
});

Then(/^I click Sign in button$/, async function () {
  return this.driver.findElement({ id: "login-submit" }).click();
});

Then(/^I should see my Dashboard n$/, async function () {
  return this.driver.findElement({ id: "wrapper" }).getText();
});

Then(/^I should see "([^"]*)"$/, async function (keyword) {
  await driver.sleep(2000);
  let result = await driver.findElement({ id: "b_results" }).getText();
  return assert.ok(result.includes(keyword));
});



// Then(/^I see Application Name field$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElement(By.id('appName'))
//        .then((element) => {
//          element
//            .getId('appName')
//            .then((appName) => {
//             assert.c
//             assert.equal(appName, 'Application name');
//           return placeholder;
//         })
//         .catch((error) => console.log(error));
//     })
//     .catch((error) => console.log(error));
//     });


// Then(/^I see Application Name field$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElements(By.id('appName'))
//     .then((element) => {
//       element
//         .getAttribute('placeholder')
//         .then((placeholder) => {
//           assert.equal(placeholder, 'Application name');
//           return placeholder;
//         })
//         .catch((error) => console.log(error));
//     })
//     .catch((error) => console.log(error));
// });
// Then(/^I see the submit button$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElement(By.className('button'))
// });

// Then(/^I see the form heading$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElements(By.className('form-signin-heading'))
// });

// Then(/^I click Submit$/, { timeout: 10000 }, function () {
//   this.driver.findElements(By.className("button")).then((element) => {
//     element.click("login-submit");
//   });
// });

// Then(/^I see Email Address field$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElement(By.id("username"))
//     .then((element) => {
//       element
//         .getAttribute("placeholder")
//         .then((placeholder) => {
//           assert.equal(placeholder, "Email address");
//           return placeholder;
//         })
//         .catch((error) => console.log(error));
//     })
//     .catch((error) => console.log(error));
// });

// Then(/^I see Password field$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElement(By.id("password"))
//     .getAttribute("placeholder")
//     .then((placeholder) => {
//       assert.equal(placeholder, "Password");
//       return placeholder;
//     });
// });

// When(/^I type "([^"]*)" as App Name$/, { timeout: 10000 }, function (
//   applicationName
// ) {
//   this.driver.findElement(By.id("appName")).then((element) => {
//     element.setAttribute("value", applicationName);
//     return true;
//   });
//   this.wait = function () {
//     return browser.wait(10000);
//   };
// });
After(function () {
  return this.driver.close();
});

function CustomWorld(callback) {
  this.driver = new Builder().forBrowser("chrome").build();
}

setWorldConstructor(CustomWorld);
