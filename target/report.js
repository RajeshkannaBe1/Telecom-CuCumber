$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Telecom Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Blank Data Validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Blank"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Url and Get into the Add Customer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.launch_the_Url_and_Get_into_the_Add_Customer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error Message for Blank Page \"please fill all fields\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.error_Message_for_Blank_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});