<a href="javascript: (() => {   alert('Hello, World!'); })();">
  Hello, World!
</a>

javascript: (() => {
  const allElements = document.querySelectorAll('*');

  for (let element of allElements) {
    element.style.fontFamily = 'Comic Sans MS';
  }
})();
