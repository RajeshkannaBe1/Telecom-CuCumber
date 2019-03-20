$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Telecom Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Reset the Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reset"
    }
  ]
});
formatter.step({
  "name": "Launch the Url and Get into the Add Customer Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Fill the fields inside the Add Customer Page \"\u003cF_Name\u003e\",\"\u003cL_Name\u003e\",\"\u003cEmail\u003e\",\"\u003cAddress\u003e\",\"\u003cMobile_No\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Reset button",
  "keyword": "And "
});
formatter.step({
  "name": "Validate the Empty Fields",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "F_Name",
        "L_Name",
        "Email",
        "Address",
        "Mobile_No"
      ]
    },
    {
      "cells": [
        "Rajesh",
        "Kanna",
        "rajesh",
        "Saidapet",
        "9629736672"
      ]
    },
    {
      "cells": [
        "Jeeva",
        "VaraPrakasam",
        "jeeva",
        "Vilupuram",
        "9511599519"
      ]
    },
    {
      "cells": [
        "Guna",
        "Sekar",
        "guna",
        "Avadi",
        "9632587410"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Reset the Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reset"
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
  "name": "Fill the fields inside the Add Customer Page \"Rajesh\",\"Kanna\",\"rajesh\",\"Saidapet\",\"9629736672\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.fill_the_fields_inside_the_Add_Customer_Page(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Reset button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.click_the_Reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Empty Fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.validate_the_Empty_Fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Reset the Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reset"
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
  "name": "Fill the fields inside the Add Customer Page \"Jeeva\",\"VaraPrakasam\",\"jeeva\",\"Vilupuram\",\"9511599519\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.fill_the_fields_inside_the_Add_Customer_Page(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Reset button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.click_the_Reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Empty Fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.validate_the_Empty_Fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Reset the Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reset"
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
  "name": "Fill the fields inside the Add Customer Page \"Guna\",\"Sekar\",\"guna\",\"Avadi\",\"9632587410\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.fill_the_fields_inside_the_Add_Customer_Page(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Reset button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.click_the_Reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Empty Fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.validate_the_Empty_Fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});