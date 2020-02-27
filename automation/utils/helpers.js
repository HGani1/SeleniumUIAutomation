const { until, By } = require("selenium-webdriver");
const { driver } = require("./eyesInit");
const { expect } = require("chai");

const WAIT_TIMEOUT = 10000;

const findElement = locator =>
  driver.wait(until.elementLocated(By.css(locator)), WAIT_TIMEOUT);

const findElements = locator =>
  driver.wait(until.elementsLocated(By.css(locator)), WAIT_TIMEOUT);

const findCustomElement = locator =>
  driver.wait(
    until.elementLocated(By.css("[data-automation='" + locator + "']")),
    WAIT_TIMEOUT
  );

const elementIsNotVisible = locator =>
  driver.wait(
    () => {
      driver.findElements(By.css(locator)).then(elements => {
        if (elements.length <= 0) {
          return true;
        }

        return false;
      });
    },
    WAIT_TIMEOUT,
    "The element was still present when it should have disappeared."
  );

const assertElementText = async (locator, message) => {
  const text = await findElement(locator)
    .getText()
    .catch(e => {
      throw new Error(e);
    });

  expect(text).to.equal(message);
};

const sleep = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const refreshPage = () => driver.navigate().refresh();

module.exports = {
  findElement,
  findElements,
  findCustomElement,
  sleep,
  refreshPage,
  elementIsNotVisible,
  assertElementText
};
