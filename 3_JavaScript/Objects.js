/*****************************************************************************************
 * JAVASCRIPT OBJECTS - COMPLETE NOTES
 *****************************************************************************************/

/*
===========================================================================================
1. WHAT IS AN OBJECT?
===========================================================================================
An object is a non-primitive data type used to store data in the form of key-value pairs.
Keys (properties) are strings or Symbols, while values can be of any data type including
numbers, strings, arrays, functions, or even other objects. Objects are mutable and are
the foundation of almost everything in JavaScript.
*/

let person = {
    name: "Vivek",
    age: 21
};

console.log(person);


/*
===========================================================================================
2. OBJECT CHARACTERISTICS
===========================================================================================
1. Objects store data as key-value pairs.
2. Objects are mutable.
3. Objects are reference types.
4. Property names are unique.
5. Values can be of any data type.
6. Objects are unordered collections.
*/

let obj = {a:1,b:2};

console.log(typeof obj); // object


/*
===========================================================================================
3. CREATING OBJECTS
===========================================================================================
Objects can be created using object literals, Object constructor, constructor functions,
classes, or Object.create().
*/

// Object Literal (Recommended)
let obj1 = {
    name: "Vivek",
    age: 21
};

// Object Constructor
let obj2 = new Object();
obj2.name = "Rahul";
obj2.age = 20;

// Constructor Function
function Student(name, age){
    this.name = name;
    this.age = age;
}

let s1 = new Student("Aman",22);

// Object.create()
let parent = {
    country:"India"
};

let child = Object.create(parent);
child.name = "Rohan";


/*
===========================================================================================
4. ACCESSING PROPERTIES
===========================================================================================
Properties can be accessed using dot notation or bracket notation. Dot notation is more
common, while bracket notation is useful for dynamic property names.
*/

let user = {
    name:"Vivek",
    age:21
};

console.log(user.name);      // Dot notation
console.log(user["age"]);    // Bracket notation


/*
===========================================================================================
5. ADDING PROPERTIES
===========================================================================================
New properties can be added at any time because objects are mutable.
*/

let car = {};

car.brand = "BMW";
car.color = "Black";

console.log(car);


/*
===========================================================================================
6. MODIFYING PROPERTIES
===========================================================================================
Existing properties can be updated simply by assigning a new value.
*/

let employee = {
    salary:50000
};

employee.salary = 60000;

console.log(employee.salary);


/*
===========================================================================================
7. DELETING PROPERTIES
===========================================================================================
delete removes a property from an object.
*/

let phone = {
    brand:"Apple",
    model:"15 Pro"
};

delete phone.model;

console.log(phone);


/*
===========================================================================================
8. PROPERTY EXISTENCE
===========================================================================================
Use the "in" operator or hasOwnProperty() to check whether a property exists.
*/

let student = {
    name:"Vivek"
};

console.log("name" in student);              // true
console.log(student.hasOwnProperty("name")); // true


/*
===========================================================================================
9. NESTED OBJECTS
===========================================================================================
Objects can contain other objects, allowing hierarchical data structures.
*/

let person1 = {
    name:"Vivek",
    address:{
        city:"Delhi",
        pin:110001
    }
};

console.log(person1.address.city);


/*
===========================================================================================
10. OBJECTS WITH ARRAYS
===========================================================================================
Objects frequently store arrays.
*/

let course = {
    title:"JavaScript",
    topics:["Arrays","Objects","Functions"]
};

console.log(course.topics[1]);


/*
===========================================================================================
11. ARRAYS OF OBJECTS
===========================================================================================
Arrays commonly contain multiple objects.
*/

let users = [
    {id:1,name:"A"},
    {id:2,name:"B"}
];

console.log(users[1].name);


/*
===========================================================================================
12. METHODS INSIDE OBJECTS
===========================================================================================
Functions stored inside objects are called methods.
*/

let calculator = {

    add:function(a,b){
        return a+b;
    }

};

console.log(calculator.add(2,3));


/*
===========================================================================================
13. this KEYWORD
===========================================================================================
Inside an object method, this refers to the object that called the method.
*/

let person2 = {

    name:"Vivek",

    greet:function(){
        console.log(this.name);
    }

};

person2.greet();


/*
===========================================================================================
14. OBJECT.keys()
===========================================================================================
Returns an array containing all property names.
*/

let book = {
    title:"JS",
    price:500
};

console.log(Object.keys(book));
//['title','price']


/*
===========================================================================================
15. OBJECT.values()
===========================================================================================
Returns an array containing all property values.
*/

console.log(Object.values(book));
//['JS',500]


/*
===========================================================================================
16. OBJECT.entries()
===========================================================================================
Returns key-value pairs as nested arrays.
*/

console.log(Object.entries(book));
//[['title','JS'],['price',500]]


/*
===========================================================================================
17. OBJECT.fromEntries()
===========================================================================================
Converts key-value pairs back into an object.
*/

let entries = [
    ["name","Vivek"],
    ["age",21]
];

console.log(Object.fromEntries(entries));


/*
===========================================================================================
18. ASSIGN()
===========================================================================================
Copies properties from one or more objects into another object.
*/

let o1 = {a:1};
let o2 = {b:2};

console.log(Object.assign({},o1,o2));


/*
===========================================================================================
19. SPREAD OPERATOR (...)
===========================================================================================
Creates shallow copies or merges multiple objects.
*/

let objA = {
    x:1
};

let objB = {
    y:2
};

let objC = {...objA,...objB};

console.log(objC);


/*
===========================================================================================
20. OPTIONAL CHAINING (?.)
===========================================================================================
Safely accesses nested properties without throwing an error.
*/

let data = {};

console.log(data.user?.name);
//undefined


/*
===========================================================================================
21. NULLISH COALESCING (??)
===========================================================================================
Returns the right-hand value only when the left-hand value is null or undefined.
*/

let username = null;

console.log(username ?? "Guest");


/*
===========================================================================================
22. DESTRUCTURING OBJECTS
===========================================================================================
Extracts properties into variables.
*/

let employee1 = {

    id:101,
    name:"Vivek"

};

let {id,name} = employee1;

console.log(name);


/*
===========================================================================================
23. RENAMING VARIABLES DURING DESTRUCTURING
===========================================================================================
Properties can be assigned to variables with different names.
*/

let {name:empName} = employee1;

console.log(empName);


/*
===========================================================================================
24. DEFAULT VALUES IN DESTRUCTURING
===========================================================================================
Default values are used if the property doesn't exist.
*/

let {salary=50000} = employee1;

console.log(salary);


/*
===========================================================================================
25. COMPUTED PROPERTY NAMES
===========================================================================================
Property names can be generated dynamically.
*/

let key = "age";

let user1 = {
    [key]:21
};

console.log(user1.age);


/*
===========================================================================================
26. OBJECT FREEZE()
===========================================================================================
Prevents adding, deleting, or modifying properties.
*/

let settings = {
    theme:"dark"
};

Object.freeze(settings);

settings.theme="light";

console.log(settings.theme);
//dark


/*
===========================================================================================
27. OBJECT SEAL()
===========================================================================================
Allows modifying existing properties but prevents adding or deleting properties.
*/

let profile = {
    age:20
};

Object.seal(profile);

profile.age=25;

console.log(profile.age);


/*
===========================================================================================
28. SHALLOW COPY
===========================================================================================
Spread operator and Object.assign() perform shallow copies. Nested objects are still
shared between copies.
*/

let original = {

    address:{
        city:"Delhi"
    }

};

let copy = {...original};

console.log(copy);


/*
===========================================================================================
29. DEEP COPY
===========================================================================================
structuredClone() creates a completely independent copy including nested objects.
*/

let deep = structuredClone(original);

console.log(deep);


/*
===========================================================================================
30. ITERATING OBJECTS - for...in
===========================================================================================
for...in iterates over enumerable property names.
*/

let objLoop = {
    a:1,
    b:2
};

for(let key in objLoop){

    console.log(key,objLoop[key]);

}


/*
===========================================================================================
31. ITERATING OBJECTS - Object.keys()
===========================================================================================
Returns keys which can then be iterated using for...of.
*/

for(let key of Object.keys(objLoop)){

    console.log(key);

}


/*
===========================================================================================
32. ITERATING OBJECTS - Object.values()
===========================================================================================
Returns values for iteration.
*/

for(let value of Object.values(objLoop)){

    console.log(value);

}


/*
===========================================================================================
33. ITERATING OBJECTS - Object.entries()
===========================================================================================
Returns key-value pairs for iteration.
*/

for(let [key,value] of Object.entries(objLoop)){

    console.log(key,value);

}


/*
===========================================================================================
34. COMPARING OBJECTS
===========================================================================================
Objects are compared by reference, not by values.
*/

let objX = {
    a:1
};

let objY = {
    a:1
};

console.log(objX==objY);   //false
console.log(objX===objY);  //false

let objZ = objX;

console.log(objX===objZ); //true


/*
===========================================================================================
35. JSON METHODS
===========================================================================================
Objects can be converted to JSON strings and back.
*/

let json = JSON.stringify(person);

console.log(json);

let parsed = JSON.parse(json);

console.log(parsed);


/*
===========================================================================================
36. PROPERTY SHORTHAND
===========================================================================================
If variable name and property name are the same, JavaScript allows shorthand syntax.
*/

let city = "Delhi";
let country = "India";

let location = {
    city,
    country
};

console.log(location);


/*
===========================================================================================
37. OBJECT LITERAL METHOD SHORTHAND
===========================================================================================
Methods can be written without the function keyword.
*/

let math = {

    add(a,b){
        return a+b;
    }

};

console.log(math.add(5,7));


/*
===========================================================================================
38. GETTERS
===========================================================================================
Getters allow a method to be accessed like a property.
*/

let rectangle = {

    width:10,

    get area(){

        return this.width*2;

    }

};

console.log(rectangle.area);


/*
===========================================================================================
39. SETTERS
===========================================================================================
Setters execute whenever a property is assigned.
*/

let person3 = {

    set age(value){

        this._age=value;

    }

};

person3.age=21;

console.log(person3._age);


/*
===========================================================================================
40. PROTOTYPE CHAIN
===========================================================================================
Every object has an internal prototype from which it inherits properties and methods.
*/

let animal = {

    eat(){
        console.log("Eating");
    }

};

let dog = Object.create(animal);

dog.eat();


/*
===========================================================================================
41. SYMBOL PROPERTIES
===========================================================================================
Symbols create unique property keys that don't conflict with normal string keys.
*/

let idSymbol = Symbol("id");

let user2 = {

    [idSymbol]:101

};

console.log(user2[idSymbol]);


/*
===========================================================================================
42. IMPORTANT INTERVIEW POINTS
===========================================================================================
1. Objects store data as key-value pairs.
2. Objects are mutable.
3. Objects are reference types.
4. typeof {} returns "object".
5. Arrays are also objects.
6. Dot notation is faster and more readable.
7. Bracket notation supports dynamic keys.
8. delete removes properties.
9. Object.keys() returns property names.
10. Object.values() returns property values.
11. Object.entries() returns key-value pairs.
12. Object.fromEntries() converts entries back to objects.
13. Spread (...) performs shallow copying.
14. Object.assign() also performs shallow copying.
15. structuredClone() performs deep copying.
16. this refers to the calling object inside regular methods.
17. for...in iterates object keys.
18. Objects are compared by reference, not by value.
19. JSON.stringify() converts object → JSON string.
20. JSON.parse() converts JSON string → object.
21. Object.freeze() makes an object immutable.
22. Object.seal() prevents adding/deleting properties.
23. Optional chaining (?.) avoids runtime errors.
24. Nullish coalescing (??) handles null/undefined defaults.
25. Getters and setters provide controlled property access.
26. Objects inherit through the prototype chain.
27. Symbol properties create unique keys.
*/