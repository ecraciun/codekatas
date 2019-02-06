Feature: Chop
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: Find a number in a short array
	Given I have a chopper
	When I enter 1 for the search value
	And enter [1, 3, 5] for the array
	Then the result should be 0 on the screen
