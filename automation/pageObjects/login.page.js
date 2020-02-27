require("dotenv").config();

const { driver } = require("../utils/eyesInit");
const { findElement, findCustomElement } = require("../utils/helpers");

const selectors = {
  body: "body",
  inpLoginEmail: "inpLoginEmail",
  inpLoginPassword: "inpLoginPassword",
  inpLoginSubmit: "inpLoginSubmit",
  lnkAccountTabAccountInfo: "lnkAccountTabAccountInfo"
};

module.exports = class LoginPage {
  async loadPage() {
    try {
      await driver.get(process.env.STAGE_ENV);
      await findElement(selectors.body);
      await driver.manage().addCookie({ name: "automation-test", value: "1" });
      await driver.get(process.env.STAGE_ENV);
      await findElement(selectors.body);
      await findCustomElement(selectors.inpLoginEmail);
    } catch (e) {
      throw new Error(e);
    }
  }

  async fillLoginFormAndClick(email, password) {
    try {
      await findCustomElement(selectors.inpLoginEmail).sendKeys(email);
      await findCustomElement(selectors.inpLoginPassword).sendKeys(password);
      await findCustomElement(selectors.inpLoginSubmit).click();
      await findCustomElement(selectors.lnkAccountTabAccountInfo);
    } catch (e) {
      throw new Error(e);
    }
  }
};
