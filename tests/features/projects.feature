@ui-tests @api-tests
Feature: Todoist Projects
Background: Login into Todoist
    Given the user logged into Todoist

@test @delete-project-api
Scenario: Create Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    And the user clicks the Add Project Icon on the Vertical Menu

   # And the user sets "Ariel123" as Project Name on the Add Project popup
   # When the user clicks the Add Button on the Add Project popup

   # Then the user should see the New Project on the Vertical Menu
