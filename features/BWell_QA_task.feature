Feature: BWell QA Automation Task

# Scenario: My App CMS Login website
#     Given I visit My App CMS website
#     Then I see the form heading
#     And I see Application Name field
#     And I see Email Address field
#     And I see Password field

Scenario: User can Sign in with valid credentials
   Given I visit My App CMS website
   When I input app name "CMS Demo Account" 
   And I input username "demo@diyappdesigner.com"
   And I input password "demo123" 
   And I click Sign in button
   Then I should see my Dashboard


# Scenario: User can sort in ascending order all appointments services by Name
#   Given I visit My App CMS website
#    When I input app name "CMS Demo Account" 
#    And I input username "demo@diyappdesigner.com"
#    And I input password "demo123" 
#    And I click Sign in button
#    Then I should see my Dashboard
#    When I click Appointments
#    And I click Services
#   And I click 
#   Then I shouldl see corrects results list


# Scenario: User can search all Appointments services by name
#   Given I am on "http://lgin.myappcms.com/build" page
#   When I type "colour" in the Search box
#   Then I should see correct results list



    
