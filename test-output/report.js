$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("InvalidLogin.feature");
formatter.feature({
  "line": 1,
  "name": "TFS login",
  "description": "",
  "id": "tfs-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login with invalid credential",
  "description": "",
  "id": "tfs-login;login-with-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User open browser and enter URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter invalid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Username and/or password are incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSD.user_open_browser_and_enter_URL()"
});
formatter.result({
  "duration": 14350740984,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.enter_invalid_credentials()"
});
formatter.result({
  "duration": 572228238,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.username_and_or_password_are_incorrect()"
});
formatter.result({
  "duration": 23652,
  "status": "passed"
});
});