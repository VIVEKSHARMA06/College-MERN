/*=============================================================================
                            JAVASCRIPT QUICK NOTES
=============================================================================*/

/* 1. JAVASCRIPT BASICS
JavaScript is a single-threaded, synchronous language. It executes one statement
at a time using a single Call Stack. By default, the next line executes only
after the current line finishes. Asynchronous features (timers, API calls, etc.)
are handled using the Event Loop.
*/


/* 2. EXECUTION PHASES
Every JavaScript program runs in two phases:
1. Memory Creation Phase: Memory is allocated for variables and functions (Hoisting occurs).
2. Execution Phase: Code is executed line by line and variables receive their actual values.
*/


/* 3. VARIABLES (var, let, const)

var   : Function scoped, can be redeclared & reassigned, hoisted (initialized as undefined).
let   : Block scoped, cannot be redeclared, can be reassigned, hoisted but in TDZ.
const : Block scoped, cannot be redeclared or reassigned, must be initialized, hoisted but in TDZ.
*/


/* 4. EVENT LOOP
The Event Loop enables asynchronous behavior in JavaScript. Synchronous code runs
first on the Call Stack. After the stack is empty, all Microtasks (Promise.then,
catch, finally, queueMicrotask) execute first, followed by one Callback/Macrotask
(setTimeout, setInterval, DOM events). Priority: Call Stack → Microtask Queue → Callback Queue.
*/


/* 5. HOISTING
Hoisting is JavaScript's behavior of moving declarations to memory before code
execution. 'var' is hoisted and initialized with undefined, 'let' and 'const'
are hoisted but remain in the Temporal Dead Zone (TDZ) until declared, while
function declarations are completely hoisted.
*/


/* 6. SCOPE
Scope defines where a variable can be accessed.
- Global Scope   : Variable declared outside all functions/blocks; accessible everywhere.
- Local Scope    : Variable accessible only within the block or function where it is declared.
- Function Scope : Variables declared with 'var' are accessible throughout the function only.
- Block Scope    : Variables declared with 'let' and 'const' are accessible only inside {}.
- Lexical Scope  : An inner function can access variables from its parent (outer) scope.
*/


/* 7. CLOSURE
A closure is created when an inner function remembers and accesses variables from
its outer function even after the outer function has finished executing. Closures
are commonly used for data privacy, counters, callbacks, and event handlers.
*/


/* =========================== QUICK REVISION ===========================

JavaScript : Single-threaded, Synchronous
Execution  : Memory Phase → Execution Phase
var        : Function Scope | Redeclare ✔ | Reassign ✔
let        : Block Scope    | Redeclare ✘ | Reassign ✔
const      : Block Scope    | Redeclare ✘ | Reassign ✘
Hoisting   : var → undefined | let/const → TDZ | function → fully hoisted
Event Loop : Call Stack → Microtask Queue → Callback Queue
Closure    : Inner function remembers outer variables.

*/