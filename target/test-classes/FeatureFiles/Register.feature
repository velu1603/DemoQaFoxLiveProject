Feature: Registraion functionality scenarios

	@Register @One
	Scenario: Verify whether the user is able to register into the application by providing all the details
		Given I launch the application 
		And I navigate to Account Registration page
		When I provide all the below valid details
			| FirstName | Velan					|
			| LastName  | Chin  				|
			| Email		| velu@gmail.com    	|
			| Telephone	| 9945075801			|
			| Password	| indian				|
		And I select the Privacy Policy
		And I click on Continue Button
		Then I should see that the User account has successfully created 
	
	