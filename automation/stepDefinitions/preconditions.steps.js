const { Given } = require("cucumber");
const And = Given;
const LoginPage = require("../pageObjects/login.page");

const loginPage = new LoginPage();

Given("I am logged in as a change-password user", async function(table) {
  const email = table.rowsHash().email;
  const password = table.rowsHash().password;
  await loginPage.loadPage();
  await loginPage.fillLoginFormAndClick(email, password);
});
