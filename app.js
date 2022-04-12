// set initial count
let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;

    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Styles
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222222";
    }
    value.textContent = count;
  });
});
