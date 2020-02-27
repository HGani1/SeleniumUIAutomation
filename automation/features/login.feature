Feature: Logging into the Vivastreet website
    As a registered user
    I want a login page
    So that I can log into my accountType

    @scn1
    Scenario: I can login and reset password via My Account
        Given I am logged in as a change-password user
            | email    | changePassword@vsautomation.33mail.com |
            | password | gPjhDCZ#eyd@                           |
        When I change my password
            | old | gPjhDCZ#eyd@ |
            | new | IgQd072H7VNX |
        Then my password is updated successfully
            | Your changes have been saved |

