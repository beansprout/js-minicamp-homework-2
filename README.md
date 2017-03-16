# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

	* for loop
	- commonly used looping method in js
	- can be used for looping over letters or
		- a for loop is in this format:
			``` pseudocode
			for (what needs to be true for looping) {
				do this;
			} // loop continues from 'for' until stopping condition is met
			```
			``` javascript
			//example
			var i = 0; // starting iteration counter at 0
			var str = "hello";
			var len = str.length // iteration count stopping

			for (i; i < len; i++ ){
			// var i is what we are looping; loop while i is less than the length of str and stop when that is false (i < len); during each loop increment i by 1 (i++)
			console.log (str.charAt(i)); // in str, print the char at index i
		} //end of looping block

	* && || !
		- these are all conditional modifiers
		- && means AND
		- || means OR
		- ! means NOT

	* Array
	- an array is a special type of object than can hold a list of items usually of same type but can be of an assortment.
	- arrays look like this: arr = [item1, item2, item3];
	- arrays can be nested like this [[item1, item2, item3], [item1, item2]]
	- in Javascript Array is a global object with built in methods and properties

	* git
	- a program used to track changes in a program.  Especially useful when many people are collaborating because you can rewind to a previous commit (change) when somebody breaks the program with bad code.

	* GitHub
	- a popular online repository useful for collaborating and sharing code.  

2. Install git.  https://git-scm.com/downloads


3. Fork and clone this repo.  When you need to commit use the following commands.

	* git status
	* git add --all
	* git status
	* git commit -m "your commit message"
	* git push origin master


4. Make the tests pass!




#### Congratulations on finishing Homework #2!
Apply to our full-time or part-time immersive program to learn cutting edge technologies that are used by top technology companies around the world.

Our part-time and full-time courses are 13 intense weeks of focused study on the most relevant technologies.  

Class sizes are small to ensure that each student gets individual attention from our world class instructors to help them succeed.  We also provide career support both during and after the course to help you succeed.  We are committed to your success.

For more information visit: https://www.lambdaschool.com
