var myText = document.querySelector("#myParagraph"),
    btn = document.querySelectorAll("button");

// We can easily get the text content of a node and all its descendants.

var myContent = myText.textContent;

console.log("textContent:  " + myContent);

// When using textContent to alter the text of an element
// it deletes the old content and replaces it with new.

btn[0].addEventListener('click', function () {
    
    myText.textContent = " Koalas are the best animals ";
    
});

// If we want to grab all the HTML in a node (including the tags) we can use innerHTML.

var myHtml = myText.innerHTML;

console.log("innerHTML:  " + myHtml);

// To change the html simply supply new content.
// Of course we aren't limited to text only this time.

btn[1].addEventListener('click', function () {
    
    myText.innerHTML = "<button> Penguins are the best animals </button>";
    
});

