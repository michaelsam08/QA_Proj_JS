var assert = require("assert");
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

const {
  setWorldConstructor,
  Given,
  When,
  Then,
  And,
  Before,
  After,
} = require("cucumber");

Given(/^I visit My App CMS website$/, { timeout: 10000 }, function () {
  return this.driver.get("http://login.myappcms.com");
});

// Then(/^I see Application Name field$/, { timeout: 2000 }, function () {
//   this.driver
//     .findElement(By.id('appName'))
// .then((element) => {
//   element
//     .getAttribute('placeholder')
//     .then((placeholder) => {
//       assert.equal(placeholder, 'login-submit');
//       return placeholder;
//     })
//     .catch((error) => console.log(error));
// })
// .catch((error) => console.log(error));
//});
Then(/^I see the submit button$/, { timeout: 2000 }, function () {
  this.driver
    .findElement(By.className('button'))
});

Then(/^I see the form heading$/, { timeout: 2000 }, function () {
  this.driver
    .findElements(By.className('form-signin-heading'))
});

Then(/^I click Submit$/, { timeout: 10000 }, function () {
  this.driver.findElements(By.className("button")).then((element) => {
    element.click("login-submit");
  });
});

Then(/^I see Email Address field$/, { timeout: 2000 }, function () {
  this.driver
    .findElement(By.id("username"))
    .then((element) => {
      element
        .getAttribute("placeholder")
        .then((placeholder) => {
          assert.equal(placeholder, "Email address");
          return placeholder;
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});

Then(/^I see Password field$/, { timeout: 2000 }, function () {
  this.driver
    .findElement(By.id("password"))
    .getAttribute("placeholder")
    .then((placeholder) => {
      assert.equal(placeholder, "Password");
      return placeholder;
    });
});

When(/^I type "([^"]*)" as App Name$/, { timeout: 10000 }, function (
  applicationName
) {
  this.driver.findElement(By.id("appName")).then((element) => {
    element.setAttribute("value", applicationName);
    return true;
  });
  this.wait = function () {
    return browser.wait(10000);
  };
});
After(function () {
  return this.driver.close();
});

function CustomWorld(callback) {
  this.driver = new Builder().forBrowser("chrome").build();
}

setWorldConstructor(CustomWorld);
