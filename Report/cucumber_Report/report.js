$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hveer/eclipse-workspace/Cucumber_Project/src/test/java/com/feature/OrangeHRM.feature");
formatter.feature({
  "line": 2,
  "name": "To Add The Employee Details By Using Orange HRM Application",
  "description": "",
  "id": "to-add-the-employee-details-by-using-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Functionality",
  "description": "",
  "id": "to-add-the-employee-details-by-using-orange-hrm-application;login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Must Launch The \"chrome\" Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Must Launch The \"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login\" Url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Must Enter The Username \"Admin\" In User Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Must Enter The Password \"admin123\" In User Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Must Click The Login Button and Its Navigate To Home Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 22
    }
  ],
  "location": "OrangeHrmstep.user_Must_Launch_The_Browser(String)"
});
formatter.result({
  "duration": 4543464800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      "offset": 22
    }
  ],
  "location": "OrangeHrmstep.user_Must_Launch_The_Url(String)"
});
formatter.result({
  "duration": 32710743400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 30
    }
  ],
  "location": "OrangeHrmstep.user_Must_Enter_The_Username_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 696968500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 30
    }
  ],
  "location": "OrangeHrmstep.user_Must_Enter_The_Password_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 118775200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHrmstep.user_Must_Click_The_Login_Button_and_Its_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 85081800,
  "status": "passed"
});
});