let currentClass = "_MainContent_13pic_40";
let currentClass2 = "_Hello_1ehfm_21";
let currentClass3 = "_MainContent_13pic_40";
let currentClass4 = "_MainContent_13pic_40";
let currentClass5 = "_MainContent_13pic_40";
let currentClass6 = "_MainContent_13pic_40";
let currentClass7 = "_MainContent_13pic_40";
let currentClass8 = "_MainContent_13pic_40";

// colours-interactable          |is icons
alert('INJECTED!');


javascript:document.getElementsByClassName('_Hello_1ehfm_21')[0].getElementsByTagName('a')[0].outerHTML+='color: orange;';


if (currentClass !== "") { // check if currentClass is not an empty string
  let elements = document.querySelectorAll(`.${currentClass}`); // select all elements on the page that have the class specified by currentClass variable
  if (elements.length > 0) { // check if there is at least one element with the class
    elements[0].style.backgroundColor = "#121212"; // set the backgroundColor style property of the first element to #0097fd
  }
}



if (currentClass2 !== "") { // check if currentClass is not an empty string
  let elements = document.querySelectorAll(`.${currentClass2}`); // select all elements on the page that have the class specified by currentClass variable
  if (elements.length > 0) { // check if there is at least one element with the class
    elements[0].style = "#ff7700"; // set the backgroundColor style property of the first element to #0097fd
  }
}


(function () {
    var s = document.createElement('style')
    s.innerText = "body { color: #ff7700 }"
    document.head.appendChild(s)
})();
