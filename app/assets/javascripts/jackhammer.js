var counter = 0;
var colors = ["red", "#333", "orange", "yellow", "purple"]
function jackhammer(box) {
  box.style["background-color"] = colors[counter]
  counter++;
  if (counter === 5) {
    alert("You win!");
  }
}
