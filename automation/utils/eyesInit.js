"use strict";

require("dotenv").config("");
require("chromedriver");

const {
  Eyes,
  ClassicRunner,
  ConsoleLogHandler
} = require("@applitools/eyes-selenium");
const { Builder, Capabilities, By } = require("selenium-webdriver");
const { Before, After, setDefaultTimeout } = require("cucumber");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const runner = new ClassicRunner();
const eyes = new Eyes(runner);

Before(() => {
  setDefaultTimeout(60 * 1000);
  driver
    .manage()
    .window()
    .maximize();

  eyes.setLogHandler(new ConsoleLogHandler(false));
  eyes.setApiKey(process.env.APPLITOOLS_KEY);
});

After(async () => {
  await driver.quit().catch(e => {
    throw new Error(e);
  });
});

module.exports = {
  eyes,
  driver
};
