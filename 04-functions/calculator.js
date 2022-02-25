function update(value) {
  // here you get the value in the screen id from html
  // and sum the value sent by the buttons
  document.getElementById("screen").value += value;
}

function result() {
  // eval do an operation with the string sent
  document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function form_reset() {
  // set the value of screen to a blank space
  document.getElementById("screen").value = '';
}

