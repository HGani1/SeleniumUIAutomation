const { When } = require("cucumber");
const And = When;
const MyDetailsPage = require("../pageObjects/myDetails.page");

const myDetailsPage = new MyDetailsPage();

When("I change my password", async function(table) {
  this.oldPassword = table.rowsHash().old;
  this.newPassword = table.rowsHash().new;
  await myDetailsPage.clickMyDetailsPage();
  await myDetailsPage.fillPasswordFormAndClick(
    this.oldPassword,
    this.newPassword
  );
});
