var btn = document.querySelectorAll("button"),
    list = document.querySelector("ul");

// We call the addEventListener method on our desired event target(in this case a button).
// This will start a listener that will wait until a click is generated on the element.

btn[0].addEventListener("click", function () {

    // When this button is clicked we want to enable zooming of our list.

    // To do this we add an event listener to our list itself,
    // so when the cursor hovers it, the enlarge function gets called.

    list.addEventListener("mouseover", enlarge);
});

// To disable the zooming we can simply use removeEventListener.

btn[1].addEventListener("click", function () {

    // Removing event listeners doesn't work on anonymous functions, so always use a named one.

    list.removeEventListener("mouseover", enlarge);
});

// Let's create our enlarge function.

var enlarge = function () {

    // Add class zoomed to the unordered list.

    list.classList.add("zoomed");

    // When the cursor leaves the list return to normal size by removing the class.

    list.addEventListener("mouseout", function () {

        list.classList.remove("zoomed")

    });

};

// Now we want to be able to color the names by clicking them.

// When a 'click' is registered on one of the list entries it should change its color to green.
// Thanks to event delegation we can actually add an event listener to the whole parent object.
// This way we don't have to add separate event listeners to each <li>.

list.addEventListener("click", function (e) {

    // Make the coloring happen only to the clicked element by taking the target of the event.

    e.target.classList.add('green');

});

list.addEventListener("dblclick", function (e) {

    // Make the coloring happen only to the clicked element by taking the target of the event.

    e.target.classList.remove("green");

});

