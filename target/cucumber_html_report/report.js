$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registraion functionality scenarios",
  "description": "",
  "id": "registraion-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6731399200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by providing all the details",
  "description": "",
  "id": "registraion-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Velan"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Chin"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "velu@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9945075801"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "indian"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3690291331,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 30378,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1198298,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 20526,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 22578,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 18884,
  "status": "passed"
});
formatter.after({
  "duration": 676986909,
  "status": "passed"
});
});