/******************************************************************************************
 *                          WINDOW OBJECT IMPORTANT NOTES
 ******************************************************************************************/

/*
===========================================================================================
1. location
===========================================================================================

Represents the current URL of the webpage.

Used to:
✔ Get URL information
✔ Redirect to another page
✔ Reload the page
*/

console.log(location.href); // Full URL
console.log(location.hostname); // Domain
console.log(location.pathname); // Path
console.log(location.protocol); // http: / https:

location.reload(); // Reload page

location.href = "https://google.com"; // Redirect

/*
===========================================================================================
2. history
===========================================================================================

Represents browser history.

Used to move between previously visited pages.
*/

history.back(); // Previous page

history.forward(); // Next page

history.go(-2); // Go back 2 pages

history.go(2); // Go forward 2 pages

console.log(history.length); // Number of pages in history

/*
===========================================================================================
3. innerHeight & innerWidth
===========================================================================================

Returns the height and width of the visible browser viewport.

Does NOT include:
- Address bar
- Browser toolbar
*/

console.log(window.innerHeight);

console.log(window.innerWidth);

/*
Useful for responsive websites.
*/

if (window.innerWidth < 768) {
    console.log("Mobile View");
}

/*
===========================================================================================
4. open()
===========================================================================================

Opens a new browser window/tab.

Returns a reference to the newly opened window.
*/

const win = window.open();

/*
Open specific website
*/

window.open("https://google.com");

/*
Popup window
*/

window.open("https://google.com", "_blank", "width=500,height=400");

/*
===========================================================================================
5. document.write() with window.open()
===========================================================================================

The new window has its own document.

win.document refers to the document of the NEW window.
*/

const popup = window.open();

popup.document.write("<h1>Hello Vivek</h1>");

/*
document.write()       -> Current page

win.document.write()   -> Newly opened window
*/

/*
===========================================================================================
6. close()
===========================================================================================

Closes a window.

Usually works only on windows opened using window.open().
*/

const child = window.open();

child.close();

/*
===========================================================================================
7. resizeBy()
===========================================================================================

Changes window size RELATIVE to current size.

Current:
800 × 600

resizeBy(100,50)

↓

900 × 650
*/

window.resizeBy(100, 50);

/*
===========================================================================================
8. resizeTo()
===========================================================================================

Sets an EXACT window size.

Current:
800 × 600

↓

500 × 300
*/

window.resizeTo(500, 300);

/*
===========================================================================================
9. moveTo()
===========================================================================================

Moves window to an EXACT screen position.

x = distance from left

y = distance from top
*/

window.moveTo(100, 200);

/*
===========================================================================================
10. moveBy()
===========================================================================================

Moves window RELATIVE to current position.

Current:
(300,200)

moveBy(100,50)

↓

(400,250)
*/

window.moveBy(100, 50);

/*
===========================================================================================
11. scrollBy()
===========================================================================================

Scrolls webpage RELATIVE to current scroll position.

Current Scroll:
300px

scrollBy(0,200)

↓

500px
*/

window.scrollBy(0, 200);

/*
===========================================================================================
12. scrollTo()
===========================================================================================

Scrolls webpage to an EXACT position.

No matter where you are,

scrollTo(0,500)

↓

500px
*/

window.scrollTo(0, 500);

/*
===========================================================================================
13. scroll()
===========================================================================================

Same as scrollTo().

Modern syntax supports smooth scrolling.
*/

window.scroll({
    top: 500,

    behavior: "smooth",
});

/*
===========================================================================================
14. print()
===========================================================================================

Opens browser print dialog.

Used for:
✔ Invoice
✔ Bill
✔ Receipt
✔ Report
*/

window.print();

/*
===========================================================================================
15. document
===========================================================================================

document is a property of the window object.

Both are exactly the same.
*/

console.log(window.document);

console.log(document);

console.log(window.document === document); // true

/*
document represents the complete HTML page.

Used for:
✔ Selecting elements
✔ Creating elements
✔ Modifying HTML
✔ Handling events
*/

/*
===========================================================================================
Quick Differences
===========================================================================================

moveTo()     -> Move window to exact position.

moveBy()     -> Move window relative to current position.

------------------------------------------------------

resizeTo()   -> Set exact window size.

resizeBy()   -> Increase/decrease current size.

------------------------------------------------------

scrollTo()   -> Scroll page to exact position.

scrollBy()   -> Scroll page relative to current position.

scroll()     -> Same as scrollTo() (supports smooth scrolling).

------------------------------------------------------

document.write()      -> Current webpage.

win.document.write()  -> Newly opened window.

------------------------------------------------------

document      -> Current webpage object.

window        -> Entire browser window.
*/

/*
===========================================================================================
Important Notes
===========================================================================================

✔ location -> Current URL

✔ history -> Browser history

✔ innerHeight / innerWidth -> Viewport size

✔ open() -> Opens new tab/window

✔ close() -> Closes JS-opened window

✔ resizeBy() -> Relative resize

✔ resizeTo() -> Exact resize

✔ moveBy() -> Relative movement

✔ moveTo() -> Exact movement

✔ scrollBy() -> Relative scrolling

✔ scrollTo() -> Exact scrolling

✔ scroll() -> Modern scrollTo()

✔ print() -> Opens print dialog

✔ document -> HTML page object

✔ Modern browsers usually block moveTo(), moveBy(),
resizeTo() and resizeBy() on normal tabs.
They mainly work on popup windows opened via JavaScript.
*/
