require("dotenv").config();

const { findCustomElement } = require("../utils/helpers");

const selectors = {
  lnkHeaderLogout: "lnkHeaderLogout",
  divLoginFormMessage: "divLoginFormMessage"
};

module.exports = class SharedPage {
  async clickLogout() {
    try {
      await findCustomElement(selectors.lnkHeaderLogout).click();
    } catch (e) {
      throw new Error(e);
    }
  }
};
