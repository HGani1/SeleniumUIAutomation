require("dotenv").config();

const {
  findElement,
  findCustomElement,
  assertElementText
} = require("../utils/helpers");
const { sleep } = require("../utils/helpers");

const selectors = {
  lnkAccountTabAccountInfo: "lnkAccountTabAccountInfo",
  inpOldPassword: "inpOldPassword",
  inpNewPassword: "inpNewPassword",
  inpNewPasswordConfirm: "inpNewPasswordConfirm",
  newPasswordForm: "#new_password_form",
  btnUpdatePassword: "btnUpdatePassword",
  successMessage: ".success-message",
  passwordButtonActive: ".ui-state-active"
};

module.exports = class MyDetailsPage {
  async clickMyDetailsPage() {
    try {
      await findCustomElement(selectors.lnkAccountTabAccountInfo).click();
      await findElement(selectors.newPasswordForm);
    } catch (e) {
      throw new Error(e);
    }
  }

  async fillPasswordFormAndClick(oldPass, newPass) {
    let op, np, npc;

    try {
      op = await findCustomElement(selectors.inpOldPassword);
      np = await findCustomElement(selectors.inpNewPassword);
      npc = await findCustomElement(selectors.inpNewPasswordConfirm);
      await op.sendKeys(oldPass);
      await np.sendKeys(newPass);
      await npc.sendKeys(newPass);
      await findCustomElement(selectors.btnUpdatePassword).click();
    } catch (e) {
      throw new Error(e);
    }

    await sleep(2000);

    try {
      await op.sendKeys(newPass);
      await np.sendKeys(oldPass);
      await npc.sendKeys(oldPass);
      await findCustomElement(selectors.btnUpdatePassword).click();
    } catch (e) {
      throw new Error(e);
    }

    await sleep(2000);
  }

  async assertPasswordSuccessMessage(message) {
    await assertElementText(selectors.successMessage, message);
  }
};
