var sum = 0;
function sumItUp(number) {
  sum += number;
  var header = document.getElementById('sum');
  header.innerHTML = sum;
}
