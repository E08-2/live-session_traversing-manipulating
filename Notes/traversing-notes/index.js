// * QUERYING (REVISION) AND TRAVERSING

// * 1. Querying revision - using the "document" object to access the DOM

// When we do something like:

const myVariable = document.querySelector(".testElement");

// We are using a METHOD called querySelector() which belongs to the "document" object
// Using this method, we an select the element on the page we want, and change its styling

// ====================================

// * 2. Traversing the DOM

// Let's look a little more closely at the variable we created above...
// This variable is... an object
// But also...
// * It is an object made using the class "Element"

// The object has ITS OWN versions of the "querySelector" and "querySelectorAll" methods
// However, these methods belong to the object, NOT the "document" object which represents the whole page

// ? What does this have to do with anything? And what do we mean by "traversing"?

// All the above means that we can ALSO select elements by "traversing" through the DOM
// Traversing is the act of selecting an element FROM ANOTHER ELEMENT, instead of the "document" object

// ====================================

// * Examples

// * 2A. Traversing using "querySelector" and "querySelectorAll"
// This lets us be a lot more specific about where in the document we want to search

// Step 1: Select the ul with class "special-food-category"
const specialFoodCategory = document.querySelector(".special-food-category");
// Step 2: Using the variable we just created...
// Run a querySelector ON THAT VARIABLE to find only the list-items inside that one ul
const specialListItems = specialFoodCategory.querySelectorAll(".food-item");

// Log to check
console.log("Did this work?", specialListItems);

// Now we can only style these list items, and ignore the rest of the DOM
specialListItems.forEach(({ style }) => {
    style.fontSize = "2rem";
})

// * Note: we can also chain these methods to create the final variable...
// The below selector is exactly the same as Steps 1 and 2:

const specialListItems2 = document.querySelector(".special-food-category").querySelectorAll(".food-item");

// ================

// * 2B. "Closest"

// With the "closest" method, we get to search UPWARDS in the DOM
// This means, "find the closest element to the element I am searching from, which matches my selection criteria"

const allergies = document.querySelector(".allergies");
const closestSectionToAllergies = allergies.closest("section");

closestSectionToAllergies.style.border = "2px dotted blue";

// ===============

// * 2C. "Matches"

// With the "matches" method, we can try to find elements which MATCH what we are looking for...

const allergiesItems = allergies.querySelectorAll("li");

// Loop through the list items inside the ul with class "allergies"
allergiesItems.forEach(element => {
    // If the current element has the id "milk", style it in one way...
    if (element.matches("#milk")) {
        element.style.fontSize = "2rem";
        element.style.color = "red";
    // Else if the current element has the class "changeme", style it another way...
    } else if (element.matches(".changeme")) {
        element.style.backgroundColor = "blue";
    // Else, style it a third way
    } else {
        element.style.backgroundColor = "yellow";
    }
})

// ==============

// * Bonus: in JS we also have access to combinator selectors

// A. Descendent selector:
// "Find all list items which are descendents of the element with class allergy-warning" 
const allergyWarningDescendents = document.querySelectorAll(".allergy-warning li");

// B. Child selector:
// .allergy-warning > h3

// C. Adjacent sibling:
// .allergy-warning + li

// D. General sibling:
// .allergy-warning ~ li