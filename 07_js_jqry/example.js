var snakes = document.querySelector('#snakes'),
    birds = document.querySelector('#birds');

snakes.addEventListener('click', function (e) {

    // To access the parent of a certain element in the DOM tree, we use the parentNode method.

    var parent = e.target.parentNode;

    console.log("Parent: " + parent.id);


    // For the opposite, calling the .children method gets all child elements of the selected object.

    console.log("Children: ");
    var children = e.target.children;

    // This returns a HTMLCollection (a type of array), so we have to iterate to access every child's content.

    for (var i = 0; i < children.length; i++) {

        console.log(children[i].textContent);

    }
});


birds.addEventListener('click', function (e) {

    // Getting the nearest sibling to our element is self-explanatory.

    var previous = e.target.previousElementSibling;

    if (previous) {
        console.log("Previous sibling: " + previous.textContent);

    }

    var next = e.target.nextElementSibling;

    if (next) {
        console.log("Next sibling: " + next.textContent);

    }

    // However, to acquire all the siblings of a node is a bit more complex.
    // We have to take all of its parent's children and then exclude the original element.
    // This is done by using filter and calling a function that checks every child one by one.

    console.log("All siblings: ");

    Array.prototype.filter.call(e.target.parentNode.children, function (child) {
        if (child !== e.target) {
            console.log(child.textContent);
        }
    });

});
