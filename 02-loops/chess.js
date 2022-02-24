var string = "";
var cell = 1;
for (var i = 0; i <= 9; i++) {
  for (var x = 0; x <= 9; x++) {
    if (i == 0 || x == 0 || x == 9 || i == 9) {
      string += " * "; // border
    }
    else if (cell % 2 == 0) {
      string += " + "; // white space
    }
    else {
      string += " - "; // black space
    }
    cell++; // calculate which cell color is
  }
  cell--; // in order to get right the colors
  console.log(string);
  string = ""; // clear for new line
}
