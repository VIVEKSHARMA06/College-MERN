/*****************************************************************************************
 * JAVASCRIPT STRINGS - COMPLETE NOTES
 *****************************************************************************************/

/*
===========================================================================================
1. WHAT IS A STRING?
===========================================================================================
A string is a sequence of characters used to represent text in JavaScript. Strings can be
created using single quotes (' '), double quotes (" "), or backticks (` `). All three
create a primitive string unless the String constructor (new String()) is used.
*/

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;


/*
===========================================================================================
2. TYPES OF STRINGS
===========================================================================================
There are two types of strings in JavaScript:
1. String Primitive -> Created using quotes or backticks. (Recommended)
2. String Object -> Created using new String(). Rarely used because it creates an object
   instead of a primitive.
*/

let primitive = "Hello";
let objectString = new String("Hello");


/*
===========================================================================================
3. STRING PRIMITIVE
===========================================================================================
A primitive string is the normal way of creating strings. It is lightweight, faster,
immutable, and typeof returns "string". JavaScript automatically wraps it in a temporary
String object whenever a string method is called (Auto Boxing).
*/

let name = "Vivek";

console.log(typeof name);              // string
console.log(name instanceof String);   // false


/*
===========================================================================================
4. STRING OBJECT
===========================================================================================
A String object is created using the String constructor with the new keyword. It behaves
like an object, typeof returns "object", consumes more memory, and is generally avoided
because it may produce unexpected comparison results.
*/

let obj = new String("Vivek");

console.log(typeof obj);               // object
console.log(obj instanceof String);    // true


/*
===========================================================================================
5. DIFFERENCE BETWEEN STRING PRIMITIVE & STRING OBJECT
===========================================================================================
Primitive String:
- Created using quotes/backticks
- typeof -> "string"
- Faster
- Less memory
- Recommended

String Object:
- Created using new String()
- typeof -> "object"
- Slower
- More memory
- Rarely used
*/

let a = "Hello";
let b = new String("Hello");

console.log(a == b);      // true
console.log(a === b);     // false


/*
===========================================================================================
6. SINGLE QUOTES (' ')
===========================================================================================
Used to create normal strings. Functionally identical to double quotes. Often preferred
when the string contains double quotes.
*/

let single = 'He said "Hello"';


/*
===========================================================================================
7. DOUBLE QUOTES (" ")
===========================================================================================
Also used to create normal strings. Functionally identical to single quotes. Convenient
when the string contains single quotes.
*/

let double = "It's raining";


/*
===========================================================================================
8. TEMPLATE LITERALS (` `)
===========================================================================================
Template literals are created using backticks. They support variable interpolation,
JavaScript expressions, and multi-line strings, making them the preferred choice for
dynamic text.
*/

let user = "Vivek";

console.log(`Welcome ${user}`);    // Welcome Vivek


/*
===========================================================================================
9. STRING INTERPOLATION
===========================================================================================
Interpolation means inserting variables or expressions directly inside a string using
${}. This feature is available only in template literals.
*/

let marks = 90;

console.log(`Marks = ${marks}`);   // Marks = 90


/*
===========================================================================================
10. MULTI-LINE STRINGS
===========================================================================================
Backticks allow writing strings across multiple lines without using \n escape sequences.
*/

let text = `Line 1
Line 2
Line 3`;

console.log(text);


/*
===========================================================================================
11. ESCAPE CHARACTERS
===========================================================================================
Escape characters are special sequences beginning with a backslash (\) that allow special
characters like quotes, tabs, new lines, and backslashes to be inserted into strings.
*/

console.log("Hello\nWorld");     // New Line
console.log("Hello\tWorld");     // Tab
console.log("He said \"Hi\"");   // Double Quote
console.log("C:\\Users\\Vivek"); // Backslash


/*
===========================================================================================
12. STRING IMMUTABILITY
===========================================================================================
Strings are immutable, meaning they cannot be modified after creation. Any operation that
appears to modify a string actually creates a new string.
*/

let city = "Delhi";

city[0] = "M";

console.log(city);       // Delhi


/*
===========================================================================================
13. AUTO BOXING
===========================================================================================
Although primitive strings are not objects, JavaScript temporarily converts them into
String objects whenever a method is called. This automatic conversion is called
Auto Boxing.
*/

let language = "javascript";

console.log(language.toUpperCase());   // JAVASCRIPT


/*
===========================================================================================
14. COMMON STRING PROPERTIES & METHODS
===========================================================================================
Strings provide many built-in methods for searching, extracting, replacing, and modifying
text. Since strings are immutable, every method returns a new string without changing the
original one.
*/

// length -> Returns total characters
console.log("Java".length);               // 4

// toUpperCase() -> Converts to uppercase
console.log("java".toUpperCase());        // JAVA

// toLowerCase() -> Converts to lowercase
console.log("JAVA".toLowerCase());        // java

// trim() -> Removes spaces from both ends
console.log("  hello  ".trim());          // hello

// charAt(index) -> Returns character at index
console.log("Java".charAt(2));            // v

// at(index) -> Returns character (supports negative indexing)
console.log("Java".at(-1));               // a

// indexOf(value) -> First occurrence index
console.log("JavaScript".indexOf("Script"));   // 4

// lastIndexOf(value) -> Last occurrence index
console.log("banana".lastIndexOf("a"));        // 5

// includes(value) -> Checks if substring exists
console.log("JavaScript".includes("Java"));    // true

// startsWith(value) -> Checks starting characters
console.log("JavaScript".startsWith("Java"));  // true

// endsWith(value) -> Checks ending characters
console.log("JavaScript".endsWith("Script"));  // true

// slice(start,end) -> Extracts part of string
console.log("JavaScript".slice(0,4));          // Java

// substring(start,end) -> Similar to slice (no negative indexes)
console.log("JavaScript".substring(4,10));     // Script

// replace(old,new) -> Replaces first occurrence
console.log("I love Java".replace("Java","JS"));   // I love JS

// replaceAll(old,new) -> Replaces all occurrences
console.log("cat cat cat".replaceAll("cat","dog")); // dog dog dog

// split(separator) -> Converts string into array
console.log("A,B,C".split(","));              // ['A','B','C']

// concat() -> Joins strings
console.log("Hello".concat(" ","World"));     // Hello World

// repeat(n) -> Repeats string n times
console.log("Hi ".repeat(3));                 // Hi Hi Hi

// padStart(length,char) -> Pads at beginning
console.log("7".padStart(3,"0"));             // 007

// padEnd(length,char) -> Pads at end
console.log("7".padEnd(3,"0"));               // 700


/*
===========================================================================================
15. COMPARISON (== vs ===)
===========================================================================================
== compares only values after type conversion, whereas === compares both value and type.
Since String objects are objects while primitive strings are not, === returns false.
*/

let x = "Java";
let y = new String("Java");

console.log(x == y);      // true
console.log(x === y);     // false


/*
===========================================================================================
16. TYPE CHECKING
===========================================================================================
Primitive strings have type "string", while String objects have type "object".
instanceof String only returns true for String objects.
*/

let p = "Hello";
let q = new String("Hello");

console.log(typeof p);           // string
console.log(typeof q);           // object
console.log(p instanceof String); // false
console.log(q instanceof String); // true


/*
===========================================================================================
17. INTERVIEW POINTS
===========================================================================================
1. Strings are immutable.
2. Prefer primitive strings over new String().
3. typeof "abc" -> "string"
4. typeof new String("abc") -> "object"
5. Backticks support interpolation and multi-line strings.
6. JavaScript automatically performs Auto Boxing for primitive strings.
7. String methods never modify the original string.
8. == performs type conversion while === checks both type and value.
*/