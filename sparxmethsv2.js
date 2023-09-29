let currentClass = "BackgroundColor";



if (currentClass !== "") { // check if currentClass is not an empty string
  let elements = document.querySelectorAll(`.${currentClass}`); // select all elements on the page that have the class specified by currentClass variable
  if (elements.length > 0) { // check if there is at least one element with the class
    elements[0].style.backgroundColor = "#0097fd"; // set the backgroundColor style property of the first element to #0097fd
  }
}
