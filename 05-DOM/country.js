function runList() {
  select = document.getElementById("list");
  option = document.createElement("option");
  text = document.getElementById("txtbox").value;
  string = document.createTextNode(text)
  option.appendChild(string);
  select.appendChild(option);
}
