/*****************************************************************************************
 * JAVASCRIPT FUNCTIONS - COMPLETE NOTES
 *****************************************************************************************/

/*
===========================================================================================
1. WHAT IS A FUNCTION?
===========================================================================================
A function is a reusable block of code that performs a specific task. Functions help
reduce code duplication, improve readability, and make programs modular. A function
executes only when it is called (invoked).
*/

function greet() {
    console.log("Hello");
}

greet();

/*
===========================================================================================
2. FUNCTION DECLARATION (NORMAL FUNCTION)
===========================================================================================
A function declaration is defined using the function keyword followed by a name. Function
declarations are hoisted, meaning they can be called before their definition.
*/

sayHello();

function sayHello() {
    console.log("Hello World");
}

/*
===========================================================================================
3. FUNCTION EXPRESSION
===========================================================================================
A function can be stored inside a variable. Function expressions are NOT hoisted like
function declarations. Only the variable declaration is hoisted.
*/

const add = function (a, b) {
    return a + b;
};

console.log(add(5, 3));

/*
===========================================================================================
4. ANONYMOUS FUNCTION
===========================================================================================
An anonymous function is a function without a name. It is commonly used in callbacks and
function expressions.
*/

const greetUser = function () {
    console.log("Welcome");
};

greetUser();

/*
===========================================================================================
5. NAMED FUNCTION EXPRESSION
===========================================================================================
A named function expression has a name that is accessible only inside the function.
Useful for recursion and debugging.
*/

const factorial = function fact(n) {
    if (n == 1) {
        return 1;
    }

    return n * fact(n - 1);
};

console.log(factorial(5));

/*
===========================================================================================
6. ARROW FUNCTION
===========================================================================================
Arrow functions provide shorter syntax. They do not have their own this, arguments,
super, or new.target. They cannot be used as constructors.
*/

const square = (x) => {
    return x * x;
};

console.log(square(5));

/*
===========================================================================================
7. IMPLICIT RETURN IN ARROW FUNCTION
===========================================================================================
If the function contains only one expression, return and braces can be omitted.
*/

const cube = (x) => x * x * x;

console.log(cube(3));

/*
===========================================================================================
8. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
===========================================================================================
An IIFE executes immediately after it is created. It is mainly used to create a private
scope.
*/

(function () {
    console.log("Executed");
})();

/*
===========================================================================================
9. PARAMETERS AND ARGUMENTS
===========================================================================================
Parameters are variables declared in the function definition. Arguments are the actual
values passed during the function call.
*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));

/*
===========================================================================================
10. DEFAULT PARAMETERS
===========================================================================================
Default parameters assign default values when an argument is not supplied.
*/

function greet(name = "Guest") {
    console.log(name);
}

greet();

/*
===========================================================================================
11. RETURN STATEMENT
===========================================================================================
return sends a value back to the caller and immediately exits the function.
*/

function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);

/*
===========================================================================================
12. FUNCTIONS WITHOUT RETURN
===========================================================================================
If no return statement exists, JavaScript automatically returns undefined.
*/

function test() {
    console.log("Testing");
}

console.log(test());

/*
===========================================================================================
13. REST PARAMETERS (...)
===========================================================================================
Rest parameters collect multiple arguments into an array.
*/

function total(...numbers) {
    console.log(numbers);
}

total(10, 20, 30, 40);

/*
===========================================================================================
14. SPREAD OPERATOR (...)
===========================================================================================
Spread expands iterable elements into individual values.
*/

let nums = [10, 20, 30];

console.log(Math.max(...nums));

/*
===========================================================================================
15. CALLBACK FUNCTION
===========================================================================================
A callback is a function passed as an argument to another function.
*/

function process(callback) {
    callback();
}

process(function () {
    console.log("Callback Executed");
});

/*
===========================================================================================
16. HIGHER ORDER FUNCTION
===========================================================================================
A higher-order function either accepts another function as an argument or returns a
function.
*/

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 20, (x, y) => x + y));

/*
===========================================================================================
17. FUNCTION RETURNING FUNCTION
===========================================================================================
Functions can return other functions.
*/

function outer() {
    return function () {
        console.log("Inner Function");
    };
}

outer()();

/*
===========================================================================================
18. RECURSION
===========================================================================================
A recursive function calls itself until a base condition is reached.
*/

function factorial1(n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial1(n - 1);
}

console.log(factorial1(5));

/*
===========================================================================================
19. FIRST CLASS FUNCTIONS
===========================================================================================
Functions are first-class citizens in JavaScript. They can be assigned to variables,
passed as arguments, returned from functions, and stored inside objects or arrays.
*/

const hello = function () {
    console.log("Hello");
};

hello();

/*
===========================================================================================
20. PURE FUNCTION
===========================================================================================
A pure function always produces the same output for the same input and has no side
effects.
*/

function addTwo(a, b) {
    return a + b;
}

console.log(addTwo(2, 3));

/*
===========================================================================================
21. IMPURE FUNCTION
===========================================================================================
An impure function depends on or modifies external data.
*/

let count = 0;

function increment() {
    count++;
}

increment();

/*
===========================================================================================
22. NESTED FUNCTION
===========================================================================================
Functions can be declared inside other functions.
*/

function outerFunction() {
    function innerFunction() {
        console.log("Inside");
    }

    innerFunction();
}

outerFunction();

/*
===========================================================================================
23. CLOSURE
===========================================================================================
A closure is created when an inner function remembers variables from its outer function
even after the outer function has finished execution.
*/

function counter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}

let c = counter();

console.log(c());
console.log(c());

/*
===========================================================================================
24. LEXICAL SCOPE
===========================================================================================
Functions can access variables from their parent scope. This is called lexical scoping.
*/

let message = "Hello";

function print() {
    console.log(message);
}

print();

/*
===========================================================================================
25. HOISTING
===========================================================================================
Function declarations are completely hoisted, whereas function expressions and arrow
functions are not.
*/

hello1();

function hello1() {
    console.log("Hoisted");
}

/*
===========================================================================================
26. FUNCTION EXPRESSION HOISTING
===========================================================================================
Only the variable is hoisted, not the function assignment.
*/

const hello2 = function () {
    console.log("Not Hoisted");
};

// hello2(); before declaration -> ReferenceError

/*
===========================================================================================
27. ARROW FUNCTION & this
===========================================================================================
Arrow functions inherit this from the surrounding scope.
*/

let obj = {
    name: "Vivek",

    show: () => {
        console.log(this);
    },
};

obj.show();

/*
===========================================================================================
28. NORMAL FUNCTION & this
===========================================================================================
Normal functions use the object that called them as this.
*/

let user = {
    name: "Vivek",

    show: function () {
        console.log(this.name);
    },
};

user.show();

/*
===========================================================================================
29. arguments OBJECT
===========================================================================================
Normal functions have an arguments object containing all passed arguments.
Arrow functions do not.
*/

function demo() {
    console.log(arguments);
}

demo(10, 20, 30);

/*
===========================================================================================
30. GENERATOR FUNCTION
===========================================================================================
Generator functions pause execution using yield and resume later.
*/

function* numbers1() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numbers1();

console.log(gen.next().value);

/*
===========================================================================================
31. ASYNC FUNCTION
===========================================================================================
An async function always returns a Promise and allows the use of await.
*/

async function fetchData() {
    return "Data";
}

fetchData().then(console.log);

/*
===========================================================================================
32. METHOD
===========================================================================================
A function stored inside an object is called a method.
*/

let calculator = {
    add(a, b) {
        return a + b;
    },
};

console.log(calculator.add(4, 5));

/*
===========================================================================================
33. CONSTRUCTOR FUNCTION
===========================================================================================
A constructor function creates objects using the new keyword.
*/

function Person(name) {
    this.name = name;
}

let p = new Person("Vivek");

console.log(p.name);

/*
===========================================================================================
34. SELF INVOKING ARROW FUNCTION
===========================================================================================
Arrow functions can also be immediately invoked.
*/

(() => {
    console.log("Arrow IIFE");
})();

/*
===========================================================================================
35. OPTIONAL CHAINING WITH FUNCTIONS
===========================================================================================
Safely calls a function if it exists.
*/

let obj1 = {};

obj1.sayHello?.();

/*
===========================================================================================
36. FUNCTION LENGTH PROPERTY
===========================================================================================
length returns the number of declared parameters.
*/

function testLength(a, b, c) {}

console.log(testLength.length);

/*
===========================================================================================
37. FUNCTION NAME PROPERTY
===========================================================================================
Returns the function's name.
*/

function display() {}

console.log(display.name);

/*
===========================================================================================
38. call()
===========================================================================================
call() invokes a function immediately while explicitly setting this.
*/

function introduce(city) {
    console.log(this.name, city);
}

let person1 = {
    name: "Vivek",
};

introduce.call(person1, "Delhi");

/*
===========================================================================================
39. apply()
===========================================================================================
apply() works like call(), but arguments are passed as an array.
*/

introduce.apply(person1, ["Delhi"]);

/*
===========================================================================================
40. bind()
===========================================================================================
bind() returns a new function with this permanently bound.
*/

let bound = introduce.bind(person1, "Delhi");

bound();

/*
===========================================================================================
41. FUNCTION AS OBJECT
===========================================================================================
Functions are objects and can have properties.
*/

function greet1() {}

greet1.language = "English";

console.log(greet1.language);

/*
===========================================================================================
42. IMPORTANT INTERVIEW POINTS
===========================================================================================
1. Functions are first-class citizens.
2. Function declarations are hoisted.
3. Function expressions are not fully hoisted.
4. Arrow functions do not have their own this.
5. Arrow functions do not have arguments.
6. Arrow functions cannot be constructors.
7. Rest (...) collects arguments.
8. Spread (...) expands values.
9. Closures remember outer variables.
10. Recursion is a function calling itself.
11. Callback = function passed as argument.
12. Higher-order function = accepts/returns functions.
13. Pure functions have no side effects.
14. Generator functions use yield.
15. Async functions return Promises.
16. call(), apply(), and bind() control this.
17. Constructor functions are called using new.
18. Methods are functions inside objects.
19. Functions can have their own properties.
20. Functions are objects in JavaScript.
*/
