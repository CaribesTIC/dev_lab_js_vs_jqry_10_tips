var lunch = document.querySelector("#lunch");

// In the HTML tab we have our lunch for today.

// Let's say we want to add fries to it.

var addFries = function () {

    // First we have to create our new element and set its content

    var fries = document.createElement("div");
    fries.innerHTML = '<li><h4> Fries </h4></li>';

    // After that's done, we can use appendChild to insert it.
    // This will make our fries appear at the end of the lunch list.

    lunch.appendChild(fries);

};

// Now we want to add cheese both before and after the beef in our burger.

var addCheese = function () {

    var beef = document.querySelector("#Beef"),

            topSlice = document.createElement("li"),
            bottomSlice = document.createElement("li");

    bottomSlice.innerHTML = topSlice.innerHTML = 'Cheese';

    // Inserting the top slice:
    // Take the parent of the beef (that's the sandwich) and use insertBefore on it.
    // The first argument to insertBefore is the new element we're gonna add.
    // The second argument is the node before which the new element is inserted.

    beef.parentNode.insertBefore(topSlice, beef);

    // The bottom slice:
    // We have to use a little trick here!
    // Supply the next nearest element as the second argument to insertBefore,
    // that way we can actually insert after the element we want.

    beef.parentNode.insertBefore(bottomSlice, beef.nextSibling);

};

var removePickles = function () {

    // Finally, we want to get rid of those pickles. Again javascript got us covered!

    var pickles = document.querySelector("#pickles");

    if (pickles) {
        pickles.parentNode.removeChild(pickles);
    }

};

// Delicious!

var btn = document.querySelectorAll("button");

btn[0].addEventListener('click', addFries);

btn[1].addEventListener('click', addCheese);

btn[2].addEventListener('click', removePickles);

