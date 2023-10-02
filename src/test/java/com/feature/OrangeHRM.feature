
Feature: To Add The Employee Details By Using Orange HRM Application
@Login
Scenario: Login Functionality
Given User Must Launch The "chrome" Browser
When User Must Launch The "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" Url
And User Must Enter The Username "Admin" In User Name Field
And User Must Enter The Password "admin123" In User Name Field
Then User Must Click The Login Button and Its Navigate To Home Page

Scenario: To Add Employee Details
Given User Must Click A admin Button 


