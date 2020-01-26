Feature: Login
  login with username and password

  @loginpage
  Scenario: No input username and password
    When I click on the login button
    Then I should be seen message "username is required." and "password is required."

  @loginpage
  Scenario: No input username
    When I fill username as "" and password as "password"
    When I click on the login button
    Then I should be seen message "username is required." and ""

  @loginpage
  Scenario: No input password
    When I fill username as "admin" and password as ""
    When I click on the login button
    Then I should be seen message "" and "password is required."

  @loginpage
  Scenario: Login passed
    When I fill username as "admin" and password as "password"
    And I click on the login button
    Then I should be redirected to a dashboard page

  @loginpage
  Scenario: Login failed (wrong username)
    When I fill username as "user" and password as "password"
    And I click on the login button
    Then I should be seen message as "Login failed"

  @loginpage
  Scenario: Login failed (wrong password)
    When I fill username as "admin" and password as "hello"
    And I click on the login button
    Then I should be seen message as "Login failed"
