let $ = document;

////////////////////////////////
let inputElem = $.querySelector("input");
let spanElems = $.querySelectorAll("span");
let counter = $.querySelector(".counter");

inputElem.addEventListener("focus", function () {
  spanElems.forEach(function (spanTag) {
    spanTag.style.color = "#58cff1";
  });
});

inputElem.addEventListener("blur", function () {
  spanElems.forEach(function (spanTag) {
    spanTag.style.color = "rgba(0, 0, 0, 70%)";
  });
});

inputElem.addEventListener("keyup", function () {
    counter.innerHTML = inputElem.maxLength - inputElem.value.length
});