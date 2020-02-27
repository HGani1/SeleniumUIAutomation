const { Then } = require("cucumber");
const And = Then;
const MyDetailsPage = require("../pageObjects/myDetails.page");

const myDetailsPage = new MyDetailsPage();

Then("my password is updated successfully", async function(table) {
  const message = table.raw()[0][0];
  await myDetailsPage.assertPasswordSuccessMessage(message);
});
