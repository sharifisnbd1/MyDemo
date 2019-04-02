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
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSD.user_open_browser_and_enter_URL()"
});
formatter.result({
  "duration": 7595393866,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.enter_invalid_credentials()"
});
formatter.result({
  "duration": 6941830164,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.username_and_or_password_are_incorrect()"
});
formatter.result({
  "duration": 24580,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.close_the_browser()"
});
formatter.result({
  "duration": 2279457207,
  "status": "passed"
});
});