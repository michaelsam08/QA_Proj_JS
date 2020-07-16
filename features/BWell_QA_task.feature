Feature: BWell QA Automation Task

Scenario: My App CMS Login website
    Given I visit My App CMS website
    Then I see the form heading
    Then I see Application Name field
    Then I see Email Address field

# Scenario: Usefr can Sign in with valid credentials
#   Given I visit My App CMS website
#   When I type "CMS Demo Account" as App Name
#   And I type "demo@diyappdesigner.com" as Email Address
#   And I type "demo123" as Password
#   And I click on Sign in button
#   Then I should see my Dashboard


# Scenario: User can sort in ascending order all appointments services by Name
#   Given I am on "http://lgin.myappcms.com/build" page
#   When I click "Sort Acscending" on "Service Name" column
#   Then I shouldl see corrects results list


# Scenario: User can search all Appointments services by name
#   Given I am on "http://lgin.myappcms.com/build" page
#   When I type "colour" in the Search box
#   Then I should see correct results list



    
