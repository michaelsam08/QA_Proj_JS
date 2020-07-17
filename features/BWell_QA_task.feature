Feature: BWell QA Automation Task

#  Used to learn to target elements on login page
# Scenario: My App CMS Login website
#     Given I visit My App CMS website
#     Then I see the form heading
#     And I see Application Name field
#     And I see Email Address field
#     And I see Password field

Background: User is signed in with valid credentials
   Given I visit My App CMS website
   When I input app name "CMS Demo Account" 
   And I input username "demo@diyappdesigner.com"
   And I input password "demo123" 
   And I click Sign in button
   Then I should see my Dashboard

Scenario: View Social Media Analytics
   When I click Analytics
   And I click Social Media
   Then I should see Social Media detials page

Scenario: User can search Attractions by text box
   When I click Attractions
   And I input text "New T" in the Search box
   Then I should see correct result

Scenario: User can sort in ascending order all appointments services by Name
  When I click Appointments
  And I click Services
  And I click ascending by Service Name
  Then I should see corrects results list







    
