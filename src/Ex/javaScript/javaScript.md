JavaScript Basics by Subbu – Reactify Hub
Introduction
JavaScript is a scripting language.
A scripting language is a lightweight programming language.

JavaScript code can be inserted into HTML pages.

It can be executed by all modern web browsers.

The <script> Tag
To insert JavaScript into an HTML page, use the <script> tag.

HTML

<script type="text/javascript">
   // JavaScript code here
</script>
✅ We can place this JavaScript code in both head and body sections.

Output in JavaScript
document.write()

This statement writes text directly into the body of a web page.

Example:

HTML

<html>
<head>
<script type="text/javascript">
 document.write("Hello... Welcome to JavaScript Class from Reactify Hub");
</script>
</head>
<body>
</body>
</html>
innerHTML

We can place text inside an HTML tag using innerHTML.

Example:

HTML

<html>
<head></head>
<body>
<h1 id="special"></h1>
<script type="text/javascript">
document.getElementById("special").innerHTML = "Welcome to JS Class from Reactify Hub";
</script>
</body>
</html>
Here, the script finds the tag with id="special" and updates its content.

window.alert()

Displays an alert box with a message.

Example:

HTML

<html>
<head></head>
<body>
<script type="text/javascript">
window.alert("Welcome to JS from Reactify Hub");
</script>
</body>
</html>
Comments in JavaScript
Improve program readability

Skip execution of code

Single-line Comment:

JavaScript

// This is a comment

//document.write("Hello");
Multi-line Comment:

JavaScript

/*
This is a multi-line comment
It won’t be executed
*/
Variables in JavaScript
Variables are containers for data values.
Declared using var, let, or const.

JavaScript

var a = 2;               // Number
var b = "Reactify Hub";  // String
var c = true;            // Boolean
var d = new Array();     // Array
JavaScript is a dynamic typed language
(Datatype is decided at runtime).

Data Types
Number

String

Boolean

Object

Array

Undefined

Null

Examples:

JavaScript

var length = 16;                           // Number
var lastName = "Johnson";                  // String
var x = {firstName:"John", lastName:"Doe"};  // Object
var c = true;                              // Boolean
var d = new Array(1,2,3);                  // Array
Popup Boxes in JavaScript
Alert Box

Displays a message and waits for OK.

JavaScript

window.alert("Welcome to JS alert box from Reactify Hub");
Confirm Box

Asks the user for confirmation (OK / Cancel).

JavaScript

window.confirm("Are you sure to delete this file?");
Prompt Box

Takes input from the user.

JavaScript

var name = window.prompt("Please enter your name");
document.write("Hello " + name + ", Welcome to Reactify Hub channel");
Operators in JavaScript
Arithmetic Operators
Operator Description
+ Addition
- Subtraction
* Multiplication
** Exponentiation
/ Division
% Modulus
++ Increment
-- Decrement

Example:

JavaScript

var a = 10, b = 5;
document.write("a+b = " + (a+b));
Assignment Operators

= Assign
+= Add and assign
-= Subtract and assign
*= Multiply and assign
/= Divide and assign

Example:

JavaScript

a += b; // same as a = a + b
Comparison Operators
Operator Description
== Equal to
=== Equal value and type
!= Not equal
!== Not equal value or type
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
? Ternary operator

Logical Operators
Operator Description Example
&& AND (x < 10 && y > 1)
|| OR (x == 5 || y==5)
! NOT !(x==y)

Bitwise Operators

Work on 32-bit numbers.

Operator Name Example Result
& AND 5 & 1 1
| OR 5 | 1 5
~ NOT ~5 -6
^ XOR 5 ^ 1 4
<< Left Shift 5 << 1 10
>> Right Shift 5 >> 1 2
>>> Zero-fill Right Shift 5 >>> 1 2

Conditional (Ternary) Operator

Assigns a value based on condition:

JavaScript

var age = 20;
var result = (age >= 18) ? "Adult" : "Minor";
FUNCTIONS IN JAVA SCRIPT
A function is a group or collection of reusable code which can be called from anywhere in our program.
Advantages of functions :

Saves lot of time in writing same code for multiple times

We can execute set of lines (function) based on event / action performed.
How to declare a function :
We can declare a function by using a keyword function as follows.

JavaScript

function functionname (optional parameters) {
  function code
}
We can call the function as below.

JavaScript

functionname (parameter values if any)
Example :

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
window.alert("Hello from Reactify Hub");
}
f();
</script>
</head>
<body>
</body>
</html>
In the above example function is called immediately after declaration. But by using events we can call java script functions whenever we want.
Example:

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
window.alert("Button Clicked....Hello from Reactify Hub");
}
</script>
</head>
<body>
  <input type="button" value="Click me" onclick="f()">

</body>
</html>
In the above example function f () will be executed whenever we click on the button. We made it possible with the help of javascript event onclick.

ARRAYS IN JAVA SCRIPT
Arrays are used to store multiple values in a single variable
or
Array is a datatype which can store collection of homogeneous type values.
Syntax

JavaScript

var arrayname = new Array(values separated by comma);
Example

JavaScript

var values = new Array(10,20,30);
We can access the elements of an array by using index which starts from 0. So, in above example 10 is at index 0, 20 is at index 1, 30 is at index 2. If we try to access the value at index which does not exists then it simply returns "undefined".
if we want to print the value at index 0 then we can write the statement as follows.

JavaScript

document.write(a[0]);
Example

HTML

<html>
<head>
  <script type="text/javascript">
  var values = new Array(10,20,30,40,50);
  document.write("element at index 2 is:"+values[2]+"<br/>");
  document.write("element at index 10 is:"+values[10]);
  </script>
</head>
<body>
</body>
</html>
CONDITIONAL OR CONTROL STATEMENTS IN JAVA SCRIPT
We generally use control statements to implement various functions in our programs.
We have

if condition:
if is a selection statement which allows us to execute one block of statements based on the condition returns true.
syntax:

JavaScript

if(condition)
{
  //statements
}
Above block of statements will be executed if condition becomes true.
Under if, we have if-else statement too where one block of statements among two will be executed based on the condition result (true or false).
syntax:

JavaScript

if(condition)
{
  //statements
}
else
{
  //else statements
}
In the above code if condition satisfies then first block of statements will be executed. If condition becomes false then else block will be executed.
Under if, we have if-else-if statements also where we can check more than one condition and based on the conditions result corresponding block of statements will be selected for execution.
syntax:

JavaScript

if(condition1)
{
  //statements
}
else if(condition2)
{
  //statements
}
else
{
    //else statements
}
In the above syntax, if first condition is true then corresponding block will be executed, other wise it evaluates the other conditions too and select the block for execution based on the condition. If all the conditions are becoming false then last else block will be executed.
Example:

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
var a=10;
var b=18;
if(a<=10)
{
  document.write("a value is less than or equal to 10<br/>");
}
  if(b<=10)
{
  document.write("b value is less than or equal to 10<br/>");
}
else if(b<15)
{
  document.write("b value is less than 15<br/>");
}
else
{
  document.write("b value is greater than or equal to 15<br/>");
}
}
f();
</script>
</head>
<body>
</body>
</html>
switch
switch case will also work same as if. It is also used to select and execute a block of statements based on a condition.
syntax:

JavaScript

  switch(expression)
  {
  case ____: statements;
  break;
  case ____: statements;
  break;
  case ____: statements;
  break;
  default: statements;
  break;
  }
In above syntax the case that matches with expression value is selected for execution. if no case is matched with the expression then default case will be selected for execution.
Example

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var a=17;
  
  switch(a){
  case 0: document.write("a is 0");break;
  case 5:document.write("a is 5");break;
  case 10:document.write("a is 10");break;
  default:document.write("a is not matched with any case");
  }
}
f();
</script>
</head>
<body>
</body>
</html>
while
By using while condition we can execute block of statements more than one time.
syntax :

JavaScript

while(condition)
{
statements;
}
above block of statements will be repeatedly executed and whenever the condition specified is failed then it stops the execution
Example:

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var a=0;

  while(a<10){
  document.write("a is : "+a+"<br/>");
  a++;
  }
}
f();
</script>
</head>
<body>
</body>
</html>
for
for loop also used to execute block of statements more than one time repeatedly based on a condition.
syntax:

JavaScript

  for(initialization;condition;iteration)
  {
  }
Example :

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var a=0;

  for(a=0;a<10;a++){
  document.write("a is : "+a+"<br/>");
  }
}
f();
</script>
</head>
<body>
</body>
</html>
In above example, observe that unlike while where iteration statements will be written inside block, for loop allows us to write initialization, condition, iteration statements at a time.
DATE IN JAVA SCRIPT
We can use Date in java script by using following constructors.
new Date()
This is used to create date object with current date and time.
new Date(milliseconds)
This is used to create date object with our required date and time. But we need to specify the date and time in milliseconds. it adds the milliseconds that you provided to 1970 jan 01st 00:00:00 and create a date object with the result.
new Date(datestring)
We can create date object by providing date string.
new Date(year,month,date[,hour,minute,second,millisecond])
We can create date object by providing values as per above constructor.
Once a date object is created, we can retrieve independent values like date, day etc., by using methods getDate(), getDay().
Example:

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var d1 = new Date();
  document.writeln("d1:"+d1+"<br/>");
  document.writeln("d1 date:"+d1.getDate()+"<br/>");
  document.writeln("d1 day:"+d1.getDay()+"<br/>");
  document.writeln("d1 year:"+d1.getFullYear()+"<br/>");
  document.writeln("d1 Hours:"+d1.getHours()+"<br/>");
  document.writeln("d1 minutes:"+d1.getMinutes()+"<br/>");
  document.writeln("d1 seconds:"+d1.getSeconds()+"<br/>");
}
f();
</script>
</head>
<body>
</body>
</html>
This example explains about first constructor and various methods available to retrieve independent values from the date object.
Example2

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var d1 = new Date(450000000);
  document.writeln("d1:"+d1+"<br/>");

  var d2 = new Date('january 27 2013');
  document.writeln("d2:"+d2+"<br/>");

  var d3 = new Date(2020,10,28);
  document.writeln("d3:"+d3+"<br/>");

}
f();
</script>
</head>
<body>
</body>
</html>
This example explains about remaining three objects in date object.
OBJECTS IN JAVA SCRIPT
Collection of properties is said to be an object.
We can create object as follows

JavaScript

var person = {name: 'Santosh', age: 35, channel: 'Reactify Hub',}
We can create properties and their values by mentioning them in curly braces as key – value pairs.
Again we can access the properties of objects as follows
person.age or person['age'] will returns 35. (the value of the property age )
once an object is defined, we can insert any number of properties into the object as follows

JavaScript

person['city']='Visakhapatnam';
person['getdetails'] = function(){
  //function code
}
here in above property instead of value a function is given so whenever the property getdetails is called the associated function will be executed.
Example

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  //creating object
  var person = {name:'Santosh',
  age:35,
  channel:'Reactify Hub',
  getmydetails: function(){
  return "my name is :"+this.name;
  }
};
  //accessing properties
  document.write('age is'+person.age+'<br/>');
  document.write(person.getmydetails());
}
f();
</script>
</head>
<body>
</body>
</html>
EVENTS IN JAVA SCRIPT
We can decide when a java script function to be executed. For example we can execute a java script function whenever an event is triggered like when user perform mouse click, button click etc., these are called as events.
To implement this we have events concept where we can call function by using event.
Example

HTML

<body onload=" f()">
In above example function f() will be executed whenever the web page is loaded (this is called onload event).
We have the following events in java script

onchange: changing the options of choice, list, checkbox, radio button

onclick: clicking any button

ondblclick: double clicking a button

onmouseover: placed mouse pointer on an element

onmouseout: moved mouse pointer our from an element

onkeydown: pressed key down on keyboard

onkeyup: key released in keyboard

onkeypress: key typed in keyboard

onload: whenever web page is loaded

onfocus: whenever an input element gets focus

onblur: whenever an input element lost focus
Example1

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  document.write('Welcome to Reactify Hub');
}
</script>
</head>
<body>
  <button onclick="f()">Click me</button> <br/><br/>
<input type="checkbox" value="subscribe" onchange="f()">Subscribe<br/><br/>
<button onmouseover="f()">mouse over me</button><br/><br/>
<button onmouseout="f()">mouse out from me</button><br/><br/>
Enter Your Name <input type="text" onfocus="f()">
</body>
</html>
For example above program calls the same function on generating different events. for example if we click on a button " Click me " then the function will be executed as follows(onclick event).

whenever we clicked on checkbox also the event will be generated (onchange), similarly the following events are also will call the function : whenever we placed mouse pointer on "mouse over me" button , moved mouse pointer out from button “mouse out from me”, whenever we clicked on text box so that it gets focus(onfocus) .
ERRORS IN JAVA SCRIPT
Errors are statements which stops the program’s execution.
we can use the following keywords to clear errors in java script

try: this will identify the exceptions

catch: this will handle the exceptions

throw: to manually create and throw user defined exceptions

finally: contains must executable statements. Statements in finally block will be executed always irrespective of existence of error
Example

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  document.write('Before Error Line');
  window.alerting("Hello Welcome");
  document.write('After Error Line');
}
  f();
</script>
</head>
<body>

</body>
</html>
For example in the above program intentionally we mentioned alerting instead of alert which generates the error.
Because a line in this program contains error we never get the program executed even though two lines are perfect in the program
So to overcome this problem and to make the perfect lines executable, we need to use try-catch blocks as follows.
Example

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  document.write('Before Error Line<br/>');
  try{
  window.alerting("Hello Welcome");
  }
  catch(err){
  alert('error is:'+err.message);
  }
  finally{
  document.write('After Error Line in finally');
  }
}
f();
</script>
</head>
<body>

</body>
</html>
Now we are able to execute the perfect lines by handling the program using try-catch blocks. here try block identified the error occurred and forwarded to the catch block and then catch block executes it’s handler code available in it and then remaining lines will get executed.
Also observe that the statement in finally block always will be executed irrespective of whether the program contains error or not.
User Defined Exception :
We can generate and throw errors as per our conditions or requirements in our program by using user defined exceptions.
Here we entered 10 as input which raises the error so we did not get the output as the error is not yet handled by the try catch blocks
Now let us try to solve this by using try – catch blocks

HTML

<html>
<head>
<script type="text/javascript">
function f()
{
  var input = window.prompt("enter a number below 10");
  var num = parseInt(input);
  
  if(num<10)
  document.write("Correct input");
try{
  if(num>=10)
throw new Error("Wrong input");
  }
  catch(err){
  alert(err.message);
  }
}
f();
</script>
</head>
<body>
</body>
</html>