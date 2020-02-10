Feature: Create Member
  create member

  @creatememberpage
  Scenario: Create memmber success
    When I click create link
    And I fill "firstname" as "James"
    And I fill "lastname" as "Bond"
    Then I should be redirected to a members page
