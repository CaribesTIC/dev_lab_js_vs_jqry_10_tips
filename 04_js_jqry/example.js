var btn = document.querySelectorAll("button"),
    div = document.querySelector("#myDiv");

btn[0].addEventListener("click", function () {

    // Get any attribute easily.
    console.log(div.id);
});


// Element.classList stores all classes of the element in the form of a DOMTokenList.

var classes = div.classList;


btn[1].addEventListener("click", function () {

    console.log(classes);

});

btn[2].addEventListener("click", function () {

    // It supports adding and removing classes.
    classes.add("red");

});

btn[2].addEventListener("dblclick", function () {

    // It supports adding and removing classes.
    classes.remove("red");

});

btn[3].addEventListener("click", function () {

    // You can also toggle a class on and off
    classes.toggle("hidden");

});

