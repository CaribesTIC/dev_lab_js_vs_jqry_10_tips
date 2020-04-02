var ninjaTurtles = ["Donatello", "Leonardo", "Michelangelo", "Raphael"];

// ForEach automatically iterates through an array.

ninjaTurtles.forEach(function (entry) {
    console.log(entry);
});

// The map method calls a function on every element of an array and creates a new array with the results.

var lovesPizza = ninjaTurtles.map(function (entry) {

    return entry.concat(" loves pizza!");

});

console.log(lovesPizza);
