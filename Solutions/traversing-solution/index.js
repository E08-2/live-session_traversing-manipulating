// Q1.

const vulcans = document.querySelectorAll(".vulcans p");
vulcans.forEach(({style}) => {
    style.border = "3px ridge orange";
    style.borderRadius = "5px";
})

// Q2.

const captains = document.querySelector(".captains");
captains.style.border = "1px solid black";

const allCaptains = captains.querySelectorAll("p");
allCaptains.forEach(({ style }) => {
    style.backgroundColor = "yellow";
})

// Q3.

const klingons = document.querySelector(".star-trek-characters > .klingons");
klingons.style.backgroundColor = "blue";

// Q4.

const janeway = document.getElementById("janeway");
janeway.style.fontFamily = "Arial";
janeway.style.fontSize = "1.5rem";
janeway.style.border = "2px dotted red";

// Q5.

const cl = document.querySelector(".spock");
const closestSpock = cl.closest("div");
closestSpock.style.border = "5px solid blue";

// Q6.
const other = document.querySelector(".others");
const others = other.querySelectorAll(".other");

others.forEach((element) => {
    if (element.matches(".seven")) {
        element.style.border = "2px dashed purple"
    } else {
        element.style.color = "green";
        element.style.fontStyle = "italic";
    }
})