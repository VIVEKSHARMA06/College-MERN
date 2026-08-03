/******************************************************************************************
 *                         JAVASCRIPT DOM NOTES (PART 1)
 *          Topics: Introduction, DOM Tree, Nodes, window vs document,
 *                  Selecting Elements, HTMLCollection vs NodeList
 ******************************************************************************************/

/*
===========================================================================================
1. WHAT IS DOM?
===========================================================================================

DOM stands for Document Object Model.

It is a programming interface provided by the browser that represents
an HTML document as a TREE OF OBJECTS.

JavaScript uses the DOM to:

✔ Read HTML
✔ Change HTML
✔ Change CSS
✔ Create Elements
✔ Delete Elements
✔ Handle User Interaction

Without the DOM, JavaScript cannot manipulate a webpage.

Remember:

HTML = Structure

DOM = JavaScript representation of that structure.
*/

/*
Example HTML

<body>

    <h1>Hello</h1>

    <p>Welcome</p>

</body>

The browser converts it into
*/

/*
Document

│

└── html

     │

     ├── head

     │      │

     │      └── title

     │

     └── body

             │

             ├── h1

             │      │

             │      └── "Hello"

             │

             └── p

                    │

                    └── "Welcome"

Every box above is called a NODE.
*/

/*
===========================================================================================
2. HOW DOM IS CREATED
===========================================================================================

Step 1

Browser receives HTML.

↓

Step 2

Browser parses HTML.

↓

Step 3

Browser creates DOM Tree.

↓

Step 4

JavaScript accesses DOM.

↓

Step 5

Webpage becomes interactive.
*/

/*
Example

HTML

<h1>Hello</h1>

JavaScript

document.querySelector("h1").textContent = "Welcome";

Result

<h1>Welcome</h1>

The HTML file isn't changed.

Only the DOM changes.
*/

/*
===========================================================================================
3. WHAT IS document ?
===========================================================================================

document is an object representing the ENTIRE webpage.

The browser automatically creates it.

It is a property of the window object.

These are exactly the same:
*/

window.document;

document;

/*
Proof
*/

console.log(window.document === document);

// true

/*
document is the ENTRY POINT to access the DOM.

Almost every DOM operation starts with document.
*/

/*
===========================================================================================
4. window vs document
===========================================================================================

window

↓

Represents entire browser window.

Contains

location

history

alert()

document

setTimeout()

etc.

----------------------------------------------------

document

↓

Represents ONLY the HTML page.

Used to

✔ Select Elements

✔ Modify Elements

✔ Create Elements

✔ Delete Elements
*/

/*
Hierarchy

window

│

├── location

├── history

├── navigator

├── screen

└── document
*/

/*
===========================================================================================
5. WHAT IS A NODE?
===========================================================================================

Everything inside the DOM is called a NODE.

Types of nodes

1. Document Node

2. Element Node

3. Text Node

4. Attribute Node
*/

/*
Example

<div class="box">

Hello

</div>

Nodes are

Document

↓

html

↓

body

↓

div (Element Node)

↓

"Hello" (Text Node)

↓

class="box" (Attribute)
*/

/*
===========================================================================================
6. SELECTING ELEMENTS
===========================================================================================

JavaScript first selects an element,
then performs operations on it.
*/

/*
-------------------------------------------------------------------------------------------
getElementById()
-------------------------------------------------------------------------------------------

Returns ONE element.

Returns null if not found.
*/

/*
HTML

<h1 id="title">Hello</h1>
*/

const heading = document.getElementById("title");

console.log(heading);

/*
-------------------------------------------------------------------------------------------
getElementsByClassName()
-------------------------------------------------------------------------------------------

Returns HTMLCollection.

Can contain multiple elements.
*/

/*
HTML

<p class="text"></p>

<p class="text"></p>
*/

const para = document.getElementsByClassName("text");

console.log(para);

/*
Access element
*/

console.log(para[0]);

/*
-------------------------------------------------------------------------------------------
getElementsByTagName()
-------------------------------------------------------------------------------------------

Returns HTMLCollection.
*/

const divs = document.getElementsByTagName("div");

console.log(divs);

/*
-------------------------------------------------------------------------------------------
querySelector()
-------------------------------------------------------------------------------------------

Returns FIRST matching element.

Uses CSS selectors.
*/

document.querySelector("h1");

document.querySelector(".box");

document.querySelector("#title");

document.querySelector("div p");

/*
Examples

Tag

document.querySelector("button");

Class

document.querySelector(".container");

Id

document.querySelector("#login");

Nested selector

document.querySelector(".card img");
*/

/*
-------------------------------------------------------------------------------------------
querySelectorAll()
-------------------------------------------------------------------------------------------

Returns ALL matching elements.

Return Type

NodeList
*/

const items = document.querySelectorAll(".item");

console.log(items);

/*
Access

*/

console.log(items[0]);

console.log(items.length);

/*
Loop

*/

items.forEach((item) => {
    console.log(item);
});

/*
===========================================================================================
7. HTMLCollection vs NodeList
===========================================================================================

HTMLCollection

↓

Returned by

getElementsByClassName()

getElementsByTagName()

Characteristics

✔ Live Collection

✔ Updates automatically

✔ Doesn't have forEach()

----------------------------------------------------

NodeList

↓

Returned by

querySelectorAll()

Characteristics

✔ Static Collection

✔ Doesn't update automatically

✔ Has forEach()
*/

/*
Example

Initially

<p></p>

<p></p>

HTMLCollection

Length

2

NodeList

Length

2

Now add another paragraph.

HTMLCollection

↓

3

(Node automatically updated)

NodeList

↓

Still 2

(Static)
*/

/*
===========================================================================================
8. Accessing Elements
===========================================================================================

Every selected element is an OBJECT.

Therefore it has

✔ Properties

✔ Methods
*/

const btn = document.querySelector("button");

/*
Read object
*/

console.log(btn);

/*
Read tag name
*/

console.log(btn.tagName);

/*
Read id
*/

console.log(btn.id);

/*
Read class
*/

console.log(btn.className);

/*
Check type
*/

console.log(typeof btn);

// object

/*
===========================================================================================
9. IMPORTANT INTERVIEW POINTS
===========================================================================================

✔ DOM is NOT part of JavaScript.

It is a Web API provided by the browser.

----------------------------------------------------

✔ document is the entry point to access the DOM.

----------------------------------------------------

✔ window contains document.

----------------------------------------------------

✔ querySelector() returns FIRST matching element.

----------------------------------------------------

✔ querySelectorAll() returns NodeList.

----------------------------------------------------

✔ getElementsByClassName() returns HTMLCollection.

----------------------------------------------------

✔ HTMLCollection is LIVE.

----------------------------------------------------

✔ NodeList is STATIC.

----------------------------------------------------

✔ Every HTML element is represented as an OBJECT inside the DOM.

----------------------------------------------------

PART 2

✔ innerHTML

✔ innerText

✔ textContent

✔ Styles

✔ Attributes

✔ classList

✔ DOM Traversal
*/
/******************************************************************************************
 *                         JAVASCRIPT DOM NOTES (PART 2)
 *          Topics: innerHTML, innerText, textContent, Styles,
 *                  Attributes, classList, DOM Traversal
 ******************************************************************************************/

/*
===========================================================================================
10. READING & MODIFYING CONTENT
===========================================================================================

Once an element is selected, we can read or change its content.

There are mainly 3 properties:

✔ innerHTML
✔ innerText
✔ textContent
*/

/*
-------------------------------------------------------------------------------------------
innerHTML
-------------------------------------------------------------------------------------------

Returns or sets the ENTIRE HTML inside an element.

It includes:

✔ Tags
✔ Text
✔ Child Elements
*/

/*
HTML

<div id="box">

    <h2>Hello</h2>

    <p>Welcome</p>

</div>
*/

const box = document.getElementById("box");

console.log(box.innerHTML);

/*
Output

<h2>Hello</h2>
<p>Welcome</p>
*/

/*
Modify HTML
*/

box.innerHTML = "<h1>DOM</h1>";

/*
Result

<div>

<h1>DOM</h1>

</div>
*/

/*
Since it accepts HTML,
new elements can be created.

Example
*/

box.innerHTML = `

<h2>Hello</h2>

<button>Login</button>

`;

/*
-------------------------------------------------------------------------------------------
innerText
-------------------------------------------------------------------------------------------

Returns ONLY visible text.

It ignores hidden text.

Respects CSS.
*/

/*
HTML

<div>

    Hello

    <span style="display:none">

        Secret

    </span>

</div>
*/

console.log(box.innerText);

/*
Output

Hello

Hidden text isn't returned.
*/

/*
Modify visible text
*/

box.innerText = "Welcome";

/*
-------------------------------------------------------------------------------------------
textContent
-------------------------------------------------------------------------------------------

Returns ALL text.

Includes hidden text.

Does NOT understand HTML.
*/

console.log(box.textContent);

/*
Output

Hello

Secret
*/

/*
Difference

innerHTML

↓

HTML + Text

----------------------------------

innerText

↓

Visible Text

----------------------------------

textContent

↓

All Text
*/

/*
Example

HTML

<p id="demo">

Hello

<b>World</b>

</p>
*/

const demo = document.getElementById("demo");

console.log(demo.innerHTML);

/*
Hello <b>World</b>
*/

console.log(demo.innerText);

/*
Hello World
*/

console.log(demo.textContent);

/*
Hello World
*/

/*
Interview

Need HTML?

↓

innerHTML

Need only visible text?

↓

innerText

Need all text?

↓

textContent
*/

/*
===========================================================================================
11. STYLES
===========================================================================================

Every HTML element has a style object.

Syntax

element.style.property = value
*/

const heading = document.querySelector("h1");

heading.style.color = "red";

heading.style.backgroundColor = "yellow";

heading.style.fontSize = "40px";

heading.style.textAlign = "center";

/*
Notice

CSS

background-color

↓

JavaScript

backgroundColor

(Camel Case)
*/

/*
Example

button.style.borderRadius = "10px";

button.style.padding = "20px";
*/

/*
===========================================================================================
12. ATTRIBUTES
===========================================================================================

Attributes are extra information inside HTML tags.

Examples

id

class

src

href

alt

title

value
*/

/*
HTML

<img id="img">

*/

const img = document.getElementById("img");

/*
getAttribute()

Reads attribute.
*/

console.log(img.getAttribute("id"));

/*
setAttribute()

Creates or changes attribute.
*/

img.setAttribute("src", "cat.jpg");

img.setAttribute("alt", "Cute Cat");

/*
removeAttribute()

Deletes attribute.
*/

img.removeAttribute("alt");

/*
Difference

element.src

↓

Property

----------------------------------

getAttribute("src")
    ↓
HTML Attribute
*/

/*
===========================================================================================
13. classList
===========================================================================================

classList is the easiest way to work with classes.
*/

const card = document.querySelector(".card");

/*
Add class
*/

card.classList.add("active");

/*
Remove class
*/

card.classList.remove("active");

/*
Toggle class

If present

↓

Remove

If absent

↓

Add
*/

card.classList.toggle("dark");

/*
Check class
*/

console.log(card.classList.contains("dark"));

/*
Multiple classes
*/

card.classList.add("box", "shadow", "rounded");

/*
Why classList?

Without classList

element.className = ...

replaces ALL classes.

classList modifies classes safely.
*/

/*
===========================================================================================
14. DOM TRAVERSAL
===========================================================================================

Traversal means moving through the DOM Tree.

We can move

Parent

↓

Child

↓

Sibling
*/

/*
HTML

<div class="parent">

    <h1></h1>

    <p></p>

</div>
*/

const parent = document.querySelector(".parent");

/*
Parent
*/

console.log(parent.parentElement);

/*
Children

Returns HTMLCollection.
*/

console.log(parent.children);

/*
First Child
*/

console.log(parent.firstElementChild);

/*
Last Child
*/

console.log(parent.lastElementChild);

/*
Next Sibling
*/

const h1 = document.querySelector("h1");

console.log(h1.nextElementSibling);

/*
Previous Sibling
*/

const para = document.querySelector("p");

console.log(para.previousElementSibling);

/*
Traversal Diagram

parent

│

├── h1

└── p


parent.children

↓

[h1,p]

----------------------------------

h1.nextElementSibling

↓

p

----------------------------------

p.previousElementSibling

↓

h1

----------------------------------

h1.parentElement

↓

parent
*/

/*
===========================================================================================
15. COMMONLY USED PROPERTIES
===========================================================================================

element.id

element.className

element.tagName

element.innerHTML

element.innerText

element.textContent

element.style

element.classList

element.children

element.parentElement
*/

/*
===========================================================================================
16. IMPORTANT INTERVIEW POINTS
===========================================================================================

✔ innerHTML understands HTML.

✔ innerText returns only visible text.

✔ textContent returns all text.

✔ style uses camelCase properties.

✔ getAttribute() reads HTML attributes.

✔ setAttribute() creates/updates attributes.

✔ removeAttribute() deletes attributes.

✔ classList is preferred over className.

✔ children returns HTMLCollection.

✔ parentElement returns immediate parent.

✔ nextElementSibling returns next sibling element.

✔ previousElementSibling returns previous sibling element.

----------------------------------------------------

PART 3

✔ createElement()

✔ append()

✔ appendChild()

✔ prepend()

✔ before()

✔ after()

✔ replaceWith()

✔ remove()

✔ cloneNode()

✔ Forms (value)

✔ Short Intro to Events

✔ DOM Summary
*/

/******************************************************************************************
 *                         JAVASCRIPT DOM NOTES (PART 3)
 *          Topics: Creating Elements, append(), appendChild(),
 *                  prepend(), before(), after(), replaceWith(),
 *                  remove(), cloneNode(), Forms, Events Intro
 ******************************************************************************************/

/*
===========================================================================================
17. CREATING NEW ELEMENTS
===========================================================================================

Until now we modified existing elements.

DOM also allows us to create NEW HTML elements.
*/

/*
createElement()

Creates an element in memory.

It is NOT visible on the webpage until we insert it.
*/

const heading = document.createElement("h1");

console.log(heading);

/*
Output

<h1></h1>

(Currently exists only in memory)
*/

/*
Add text
*/

heading.textContent = "Welcome";

/*
Add class
*/

heading.classList.add("title");

/*
Add id
*/

heading.id = "mainHeading";

/*
Memory

RAM

↓

heading

↓

<h1>Welcome</h1>

Not visible yet.
*/

/*
===========================================================================================
18. append()
===========================================================================================

Adds element as the LAST child.

Can append

✔ Elements

✔ Strings

✔ Multiple items
*/

const container = document.querySelector(".container");

const p = document.createElement("p");

p.textContent = "Hello";

container.append(p);

/*
Result

<div class="container">

    ...

    <p>Hello</p>

</div>
*/

/*
append() also accepts text.
*/

container.append("Welcome");

/*
Multiple values
*/

container.append(p, "Hello", document.createElement("hr"));

/*
===========================================================================================
19. appendChild()
===========================================================================================

Adds ONE node as the LAST child.

Unlike append(),

it ONLY accepts Nodes.
*/

const li = document.createElement("li");

li.textContent = "Apple";

document.querySelector("ul").appendChild(li);

/*
Difference

append()

↓

Accepts text + elements.

----------------------------------

appendChild()

↓

Accepts only one NODE.
*/

/*
===========================================================================================
20. prepend()
===========================================================================================

Adds element as the FIRST child.
*/

const first = document.createElement("h2");

first.textContent = "First Heading";

container.prepend(first);

/*
Before

A

B

C

↓

After

Heading

A

B

C
*/

/*
===========================================================================================
21. before()
===========================================================================================

Inserts element BEFORE another element.
*/

const h1 = document.querySelector("h1");

const hr = document.createElement("hr");

h1.before(hr);

/*
Result

<hr>

<h1>Hello</h1>
*/

/*
===========================================================================================
22. after()
===========================================================================================

Inserts element AFTER another element.
*/

h1.after(document.createElement("hr"));

/*
Result

<h1>Hello</h1>

<hr>
*/

/*
===========================================================================================
23. replaceWith()
===========================================================================================

Replaces an existing element.
*/

const oldHeading = document.querySelector("h1");

const newHeading = document.createElement("h2");

newHeading.textContent = "New Heading";

oldHeading.replaceWith(newHeading);

/*
Before

<h1>Hello</h1>

↓

After

<h2>New Heading</h2>
*/

/*
===========================================================================================
24. remove()
===========================================================================================

Removes an element from the DOM.
*/

const image = document.querySelector("img");

image.remove();

/*
Before

<img>

↓

After

(Element deleted)
*/

/*
===========================================================================================
25. cloneNode()
===========================================================================================

Creates a copy of an element.
*/

const button = document.querySelector("button");

/*
Shallow Copy

Copies only the element.
*/

const copy1 = button.cloneNode();

/*
Deep Copy

Copies element + children.
*/

const copy2 = button.cloneNode(true);

/*
Example

<div>

<h1>Hello</h1>

</div>

cloneNode(true)

↓

<div>

<h1>Hello</h1>

</div>
*/

/*
===========================================================================================
26. FORMS
===========================================================================================

Input fields use the "value" property.

NOT innerHTML or innerText.
*/

const input = document.querySelector("input");

/*
Read value
*/

console.log(input.value);

/*
Change value
*/

input.value = "Vivek";

/*
Textarea
*/

const message = document.querySelector("textarea");

console.log(message.value);

/*
Checkbox
*/

const check = document.querySelector("#agree");

console.log(check.checked);

/*
Select
*/

const country = document.querySelector("select");

console.log(country.value);

/*
===========================================================================================
27. INTRODUCTION TO EVENTS
===========================================================================================

A webpage becomes interactive using EVENTS.

Examples

✔ Click

✔ Double Click

✔ Keyboard

✔ Mouse

✔ Scroll

✔ Submit

✔ Input

When an event occurs,

JavaScript executes a function.

Example

User clicks button

↓

Browser detects click

↓

JavaScript runs function

We'll study Event Listeners separately.
*/

/*
===========================================================================================
28. COMMON DOM METHODS
===========================================================================================

Selecting

document.getElementById()

document.getElementsByClassName()

document.getElementsByTagName()

document.querySelector()

document.querySelectorAll()

----------------------------------

Content

innerHTML

innerText

textContent

----------------------------------

Styles

style

classList

----------------------------------

Attributes

getAttribute()

setAttribute()

removeAttribute()

----------------------------------

Traversal

parentElement

children

firstElementChild

lastElementChild

nextElementSibling

previousElementSibling

----------------------------------

Creation

createElement()

append()

appendChild()

prepend()

before()

after()

replaceWith()

remove()

cloneNode()
*/

/*
===========================================================================================
29. DOM LIFE CYCLE
===========================================================================================

HTML File

↓

Browser Parses HTML

↓

DOM Tree Created

↓

JavaScript Accesses DOM

↓

JavaScript Reads / Modifies DOM

↓

Browser Repaints Webpage
*/

/*
===========================================================================================
30. IMPORTANT INTERVIEW QUESTIONS
===========================================================================================

Q. What is DOM?

DOM is a tree representation of the HTML document where every HTML
element becomes an object that JavaScript can manipulate.

----------------------------------------------------

Q. Is DOM part of JavaScript?

No.

DOM is a Web API provided by the browser.

----------------------------------------------------

Q. Difference between HTML and DOM?

HTML

↓

Markup Language.

DOM

↓

Object representation of HTML.

----------------------------------------------------

Q. Difference between append() and appendChild()?

append()

↓

Accepts text + elements + multiple values.

appendChild()

↓

Accepts only one Node.

----------------------------------------------------

Q. Difference between append() and prepend()?

append()

↓

Last Child

prepend()

↓

First Child

----------------------------------------------------

Q. Difference between before() and after()?

before()

↓

Insert before element.

after()

↓

Insert after element.

----------------------------------------------------

Q. Difference between cloneNode() and createElement()?

createElement()

↓

Creates new element.

cloneNode()

↓

Copies existing element.

----------------------------------------------------

Q. How do you remove an element?

element.remove()

----------------------------------------------------

Q. How do you create an element?

document.createElement()

----------------------------------------------------

Q. Which property is used for input values?

value

NOT

innerHTML

NOT

innerText
*/

/*
===========================================================================================
31. COMPLETE DOM SUMMARY
===========================================================================================

DOM

↓

Tree of Objects

----------------------------------

Entry Point

↓

document

----------------------------------

Selecting

↓

querySelector()

↓

Modify

↓

innerHTML

innerText

textContent

style

classList

attributes

↓

Traversal

↓

parent

children

siblings

↓

Creation

↓

createElement()

↓

Insertion

↓

append()

appendChild()

prepend()

before()

after()

↓

Replacement

↓

replaceWith()

↓

Deletion

↓

remove()

↓

Forms

↓

value

↓

Events

↓

User Interaction

(Studied Separately)
*/
