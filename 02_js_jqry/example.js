// We can use document.querySelector to get the first element that matches a certain criteria.
// It's only argument is a string containing one or more CSS selectors.

var lochNess = document.querySelector(".monsters");

console.log("It's from Scotland - " + lochNess.textContent);

// We can also get all elements of a certain type or class by using document.querySelectorAll.
// This returns a NodeList of all the elements that fit our criteria.

var scary = document.querySelectorAll(".monsters");

console.log("Hide and seek champions: ");

for (var i = 0; i < scary.length; i++) {

    console.log(scary[i].innerHTML);

}
