/******************************************************************************************
 *                                JAVASCRIPT NUMBER NOTES
 *                    (Most Important Things for Projects & Interviews)
 ******************************************************************************************/

/*
===========================================================================================
1. What is Number?
===========================================================================================

- Number is the constructor for numeric values.
- Normal numbers are PRIMITIVES.
- Number objects are rarely used.

Primitive:
*/

const num1 = 25;

console.log(typeof num1); // "number"

/*
Number Object (Avoid in real projects)
*/

const num2 = new Number(25);

console.log(typeof num2); // "object"

console.log(num2 instanceof Number); // true

/*
Always prefer:

const age = 22;

NOT

const age = new Number(22);
*/

/*
===========================================================================================
2. Number Constructor
===========================================================================================

Converts values into numbers.
*/

console.log(Number("100")); // 100
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Number("abc")); // NaN

/*
===========================================================================================
3. Number.isNaN()
===========================================================================================

Checks whether a value is actually NaN.
Very useful when validating user input.
*/

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(100)); // false

/*
Wrong way
*/

console.log(isNaN("Hello")); // true (because JS converts it first)

/*
Preferred
*/

console.log(Number.isNaN("Hello")); // false

/*
===========================================================================================
4. Number.isFinite()
===========================================================================================

Checks whether number is finite.

Useful when accepting calculations from users.
*/

console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false

/*
===========================================================================================
5. Number.isInteger()
===========================================================================================

Checks whether value is an integer.
*/

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

/*
===========================================================================================
6. parseInt()
===========================================================================================

Extracts integer.

Very common in forms.
*/

console.log(parseInt("100")); //100
console.log(parseInt("100px")); //100
console.log(parseInt("12.8")); //12
console.log(parseInt("abc")); //NaN

/*
===========================================================================================
7. parseFloat()
===========================================================================================

Extracts decimal numbers.
*/

console.log(parseFloat("12.56")); //12.56
console.log(parseFloat("12.56px")); //12.56

/*
===========================================================================================
8. toFixed()
===========================================================================================

Rounds and RETURNS STRING.

Very common for money.
*/

const price = 99.4567;

console.log(price.toFixed(2)); // "99.46"

const total = 1550.2;

console.log("₹" + total.toFixed(2));
// ₹1550.20

/*
===========================================================================================
9. toPrecision()
===========================================================================================

Controls total significant digits.
*/

const n = 123.456;

console.log(n.toPrecision(4)); //"123.5"
console.log(n.toPrecision(2)); //"1.2e+2"

/*
===========================================================================================
10. toString()
===========================================================================================

Converts number to string.
*/

const age = 22;

console.log(age.toString());

console.log(typeof age.toString()); //"string"

/*
===========================================================================================
11. Infinity
===========================================================================================

Represents infinitely large numbers.
*/

console.log(10 / 0); // Infinity

console.log(Infinity > 999999999999999); // true

/*
===========================================================================================
12. NaN
===========================================================================================

NaN means "Not a Number".

It is still of type number!
*/

console.log(typeof NaN); //"number"

console.log(0 / 0); //"NaN"

console.log(Number("abc")); //"NaN"

/*
===========================================================================================
13. Floating Point Precision Problem
===========================================================================================

One of the most famous JS interview questions.
*/

console.log(0.1 + 0.2);

// 0.30000000000000004

/*
Reason:

Computers store decimals in binary.

Solutions:

1. toFixed()

2. Math.round()

3. Store money in paise/cents instead of decimal.
*/

/*
===========================================================================================
14. Safe Integers
===========================================================================================

JavaScript can safely represent integers only up to:

2^53 - 1
*/

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

/*
===========================================================================================
15. Important Number Constants
===========================================================================================
*/

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.EPSILON);

/*
===========================================================================================
16. Common Project Examples
===========================================================================================
*/

// User enters age

const input = "21";

const ageValue = Number(input);

if (!Number.isNaN(ageValue)) {
    console.log("Valid age");
}

// Product price

const productPrice = 199.999;

console.log(productPrice.toFixed(2));

// "200.00"

// Validate quantity

const qty = Number("5");

if (Number.isInteger(qty) && qty > 0) {
    console.log("Valid quantity");
}

/*
===========================================================================================
17. Things to Remember
===========================================================================================

✔ Number() converts values.

✔ parseInt() extracts integer.

✔ parseFloat() extracts decimal.

✔ Number.isNaN() is preferred over isNaN().

✔ Number.isFinite() checks Infinity.

✔ Number.isInteger() checks integer.

✔ toFixed() is mostly used for prices.

✔ toString() converts to string.

✔ Avoid new Number().

✔ Floating point precision exists.

✔ Normal numbers are primitives.

✔ Number objects are rarely used.
*/

/*
===========================================================================================
18. Interview Questions
===========================================================================================

Q. typeof NaN?
A. "number"

----------------------------------

Q. Difference between Number() and parseInt()?

Number("12px") -> NaN

parseInt("12px") -> 12

----------------------------------

Q. Why avoid new Number()?

Because it creates an object instead of a primitive.

----------------------------------

Q. Why is 0.1 + 0.2 not exactly 0.3?

Binary floating-point precision.

----------------------------------

Q. Most used methods in projects?

✓ Number()
✓ Number.isNaN()
✓ Number.isInteger()
✓ parseInt()
✓ parseFloat()
✓ toFixed()
✓ toString()
*/
