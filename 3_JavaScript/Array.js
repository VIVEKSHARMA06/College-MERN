/*****************************************************************************************
 * JAVASCRIPT ARRAYS - COMPLETE NOTES
 *****************************************************************************************/

/*
===========================================================================================
1. WHAT IS AN ARRAY?
===========================================================================================
An array is a special object used to store multiple values in a single variable. Arrays
can store elements of any data type including numbers, strings, booleans, objects,
functions, and even other arrays. Arrays in JavaScript are dynamic, meaning their size
can grow or shrink during runtime.
*/

let arr = [10, 20, 30];
console.log(arr); // [10,20,30]


/*
===========================================================================================
2. ARRAY DECLARATION & INITIALIZATION
===========================================================================================
Arrays can be declared in multiple ways. The array literal ([]) is the most common and
recommended approach. Arrays can also be created using the Array constructor.
*/

// Empty Array
let a = [];

// Array Literal (Recommended)
let numbers = [1, 2, 3];

// Mixed Data Types
let mixed = [10, "Hello", true, null, {name:"Vivek"}];

// Nested Array
let matrix = [[1,2],[3,4]];

// Using Array Constructor
let arr1 = new Array();
let arr2 = new Array(5);          // Creates empty array of length 5
let arr3 = new Array(1,2,3,4);    // [1,2,3,4]


/*
===========================================================================================
3. ARRAY CHARACTERISTICS
===========================================================================================
1. Arrays are objects.
2. Arrays are mutable.
3. Indexing starts from 0.
4. Arrays can contain different data types.
5. Arrays are dynamically sized.
*/

let fruits = ["Apple", "Banana", "Mango"];

console.log(typeof fruits);      // object
console.log(Array.isArray(fruits)); // true


/*
===========================================================================================
4. ACCESSING ARRAY ELEMENTS
===========================================================================================
Elements are accessed using their index. Negative indexing is supported only with at().
*/

let nums = [10,20,30,40];

console.log(nums[0]);      //10
console.log(nums[2]);      //30
console.log(nums.at(-1));  //40


/*
===========================================================================================
5. MODIFYING ARRAY ELEMENTS
===========================================================================================
Arrays are mutable, so elements can be changed using their index.
*/

let marks = [80,85,90];

marks[1] = 95;

console.log(marks); // [80,95,90]


/*
===========================================================================================
6. ARRAY PROPERTIES
===========================================================================================
length returns the total number of elements present in the array.
*/

let colors = ["Red","Blue","Green"];

console.log(colors.length); //3


/*
===========================================================================================
7. ADDING ELEMENTS
===========================================================================================
Elements can be added at the beginning, end, or any specific position.
*/

// push() -> Adds at end
let arrPush = [1,2];
arrPush.push(3);
console.log(arrPush); //[1,2,3]

// unshift() -> Adds at beginning
let arrUnshift = [2,3];
arrUnshift.unshift(1);
console.log(arrUnshift); //[1,2,3]

// splice() -> Insert anywhere
let arrInsert = [1,3,4];
arrInsert.splice(1,0,2);
console.log(arrInsert); //[1,2,3,4]


/*
===========================================================================================
8. REMOVING ELEMENTS
===========================================================================================
Elements can be removed from beginning, end, or any position.
*/

// pop() -> Removes last element
let arrPop = [1,2,3];
arrPop.pop();
console.log(arrPop); //[1,2]

// shift() -> Removes first element
let arrShift = [1,2,3];
arrShift.shift();
console.log(arrShift); //[2,3]

// splice() -> Remove anywhere
let arrRemove = [1,2,3,4];
arrRemove.splice(1,2);
console.log(arrRemove); //[1,4]


/*
===========================================================================================
9. CONCATENATING ARRAYS
===========================================================================================
concat() joins two or more arrays and returns a new array without modifying originals.
*/

let x = [1,2];
let y = [3,4];

console.log(x.concat(y)); //[1,2,3,4]


/*
===========================================================================================
10. COPYING ARRAYS
===========================================================================================
Spread operator and slice() create shallow copies of arrays.
*/

let original = [1,2,3];

let copy1 = [...original];
let copy2 = original.slice();

console.log(copy1);


/*
===========================================================================================
11. SLICE()
===========================================================================================
slice(start,end) returns a new array without modifying the original array.
End index is excluded.
*/

let sliceArr = [10,20,30,40,50];

console.log(sliceArr.slice(1,4)); //[20,30,40]


/*
===========================================================================================
12. SPLICE()
===========================================================================================
splice(start,deleteCount,items...) modifies the original array. It can insert, delete,
or replace elements.
*/

let spliceArr = [1,2,4];

spliceArr.splice(2,0,3);

console.log(spliceArr); //[1,2,3,4]


/*
===========================================================================================
13. INDEX SEARCH METHODS
===========================================================================================
Used to find elements inside an array.
*/

// indexOf()
console.log([10,20,30].indexOf(20)); //1

// lastIndexOf()
console.log([1,2,1].lastIndexOf(1)); //2

// includes()
console.log([10,20,30].includes(30)); //true

// find()
console.log([5,10,15].find(x=>x>8)); //10

// findIndex()
console.log([5,10,15].findIndex(x=>x>8)); //1


/*
===========================================================================================
14. SORTING ARRAYS
===========================================================================================
sort() sorts elements alphabetically by default. Numeric sorting requires a comparator.
*/

// Alphabetical
let names = ["C","A","B"];
names.sort();

console.log(names); //[A,B,C]

// Numeric
let numSort = [50,2,100];

numSort.sort((a,b)=>a-b);

console.log(numSort); //[2,50,100]


/*
===========================================================================================
15. REVERSING ARRAY
===========================================================================================
reverse() reverses the original array.
*/

let rev = [1,2,3];

rev.reverse();

console.log(rev); //[3,2,1]


/*
===========================================================================================
16. JOIN()
===========================================================================================
join(separator) converts an array into a string.
*/

console.log(["A","B","C"].join("-")); //A-B-C


/*
===========================================================================================
17. FILL()
===========================================================================================
fill(value,start,end) fills array elements with a specified value.
*/

let fillArr = [1,2,3,4];

fillArr.fill(0,1,3);

console.log(fillArr); //[1,0,0,4]


/*
===========================================================================================
18. ARRAY.FROM()
===========================================================================================
Creates an array from iterable objects or strings.
*/

console.log(Array.from("Hello"));
//['H','e','l','l','o']


/*
===========================================================================================
19. ARRAY.OF()
===========================================================================================
Creates an array from arguments.
*/

console.log(Array.of(1,2,3));
//[1,2,3]


/*
===========================================================================================
20. MAP()
===========================================================================================
map() creates a new array by applying a function to every element.
*/

let mapArr = [1,2,3];

console.log(mapArr.map(x=>x*2));
//[2,4,6]


/*
===========================================================================================
21. FILTER()
===========================================================================================
filter() returns a new array containing only elements that satisfy a condition.
*/

let filterArr = [1,2,3,4,5];

console.log(filterArr.filter(x=>x%2==0));
//[2,4]


/*
===========================================================================================
22. REDUCE()
===========================================================================================
reduce() reduces all elements into a single value.
*/

let reduceArr = [1,2,3,4];

console.log(reduceArr.reduce((sum,x)=>sum+x,0));
//10


/*
===========================================================================================
23. FOREACH()
===========================================================================================
forEach() executes a callback for each element. It does not return a new array.
*/

[10,20,30].forEach(x=>console.log(x));


/*
===========================================================================================
24. SOME()
===========================================================================================
Returns true if at least one element satisfies the condition.
*/

console.log([1,3,5].some(x=>x%2==0));
//false


/*
===========================================================================================
25. EVERY()
===========================================================================================
Returns true only if all elements satisfy the condition.
*/

console.log([2,4,6].every(x=>x%2==0));
//true


/*
===========================================================================================
26. FLAT()
===========================================================================================
Flattens nested arrays by the specified depth.
*/

console.log([1,[2,[3]]].flat(2));
//[1,2,3]


/*
===========================================================================================
27. FLATMAP()
===========================================================================================
Applies map() followed by flat(1).
*/

console.log([1,2,3].flatMap(x=>[x,x*2]));
//[1,2,2,4,3,6]


/*
===========================================================================================
28. ITERATING ARRAYS - for LOOP
===========================================================================================
Most commonly used when index access is required.
*/

let arrFor = [10,20,30];

for(let i=0;i<arrFor.length;i++){
    console.log(arrFor[i]);
}


/*
===========================================================================================
29. ITERATING ARRAYS - while LOOP
===========================================================================================
Useful when the number of iterations isn't fixed beforehand.
*/

let arrWhile = [10,20,30];
let i=0;

while(i<arrWhile.length){
    console.log(arrWhile[i]);
    i++;
}


/*
===========================================================================================
30. ITERATING ARRAYS - do...while LOOP
===========================================================================================
Executes the loop body at least once before checking the condition.
*/

let arrDo = [10,20,30];
let j=0;

do{
    console.log(arrDo[j]);
    j++;
}
while(j<arrDo.length);


/*
===========================================================================================
31. ITERATING ARRAYS - for...of LOOP
===========================================================================================
Returns array values directly. Recommended for simple iteration.
*/

let arrOf = [10,20,30];

for(let value of arrOf){
    console.log(value);
}


/*
===========================================================================================
32. ITERATING ARRAYS - for...in LOOP
===========================================================================================
Returns indexes (property names). Avoid for normal array iteration because it is intended
for object properties.
*/

let arrIn = [10,20,30];

for(let index in arrIn){
    console.log(index);      //0 1 2
}


/*
===========================================================================================
33. ITERATING ARRAYS - forEach()
===========================================================================================
Provides value, index, and original array.
*/

[10,20,30].forEach((value,index,array)=>{
    console.log(value,index);
});


/*
===========================================================================================
34. DESTRUCTURING ARRAYS
===========================================================================================
Destructuring extracts elements into variables.
*/

let nums1 = [10,20,30];

let [first,second,third] = nums1;

console.log(first); //10


/*
===========================================================================================
35. SPREAD OPERATOR (...)
===========================================================================================
Spread expands array elements into individual values.
*/

let arrA = [1,2];
let arrB = [...arrA,3,4];

console.log(arrB); //[1,2,3,4]


/*
===========================================================================================
36. REST OPERATOR (...)
===========================================================================================
Rest collects remaining elements into a new array.
*/

let [one,two,...rest] = [1,2,3,4,5];

console.log(rest); //[3,4,5]


/*
===========================================================================================
37. MULTI-DIMENSIONAL ARRAYS
===========================================================================================
Arrays can contain other arrays, forming matrices or nested structures.
*/

let matrix1 = [
    [1,2],
    [3,4]
];

console.log(matrix1[1][0]); //3


/*
===========================================================================================
38. SHALLOW COPY VS DEEP COPY
===========================================================================================
Spread operator, slice(), concat(), and Array.from() create shallow copies. Nested objects
are still shared. Deep copying requires structuredClone() or custom techniques.
*/

let originalObj = [{a:1}];

let shallow = [...originalObj];

console.log(shallow);


/*
===========================================================================================
39. IMPORTANT INTERVIEW POINTS
===========================================================================================
1. Arrays are objects.
2. Arrays are mutable.
3. Index starts from 0.
4. typeof [] -> "object"
5. Array.isArray() checks if a value is an array.
6. push()/pop() operate at the end.
7. shift()/unshift() operate at the beginning.
8. slice() does NOT modify the original array.
9. splice() modifies the original array.
10. map(), filter(), reduce() return new arrays/values.
11. for...of returns values.
12. for...in returns indexes.
13. forEach() cannot be broken using break or continue.
14. sort() performs alphabetical sorting by default.
15. Spread (...) copies or expands arrays.
16. Rest (...) collects remaining elements.
17. Arrays are passed by reference.
18. Array.from() converts iterables into arrays.
19. Array.of() creates arrays from arguments.
20. flat() removes nesting from arrays.
*/