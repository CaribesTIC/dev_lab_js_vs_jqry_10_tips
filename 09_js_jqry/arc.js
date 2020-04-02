var btn = document.querySelectorAll("button"),
        circle = document.querySelector("#circle");

// First, we have to add a class of animated to our object, so the library can recognize it.

circle.classList.add('animated');


// We iterate over all of our buttons and add event listeners to each one.

for (var i = 0; i < btn.length; i++) {

    // Define an anonymous function here, to make it possible to use the i variable.

    (function (i) {

        btn[i].addEventListener('click', function () {

            // To start an animation you just have to add a specific class to the object.
            // In our case we stored the classes' names in the data-animation attribute of each button.

            var animation = btn[i].getAttribute('data-animation');

            circle.classList.add(animation);

            // To make it work more then once we have to remove the class after the animation is complete.

            window.setTimeout(function () {

                circle.classList.remove(animation);

            }, 1000);

        });

    }(i));

}

