// * MANIPULATING THE DOM

// As well as querying and traversing the DOM, we can also manipulate it!
// For example, by creating a new element in JS that we can then insert into the page.
// ... or by giving some extra information to our elements (e.g. give them a new class, or take away a class)
// ... or by deleting an element from the page!

// =============================================

// * Example 1 - Create a new "div" element
const newDiv = document.createElement("div");

// Give the new div some text content
newDiv.textContent = "Live long and prosper!";

// Give the new div a class
newDiv.classList.add("jsDiv");

// ============================================

// Now let's insert the new div into the page...

const body = document.querySelector("body");
body.appendChild(newDiv);

newDiv.style.border = "5px red dotted";

// ===========================================

// * Example 2 - Remove the class from the "original" div

const originalDiv = document.querySelector(".original");

originalDiv.classList.remove("original");  // Delete one class ("original")
originalDiv.removeAttribute("class");   // Delete all classes!
originalDiv.removeAttribute("id");  // Delete id

originalDiv.setAttribute("class", "newClass");  // Give the div a new class ("newClass")

// ==========================================

// * Example 3 - Remove the original div we started with!
body.removeChild(originalDiv);