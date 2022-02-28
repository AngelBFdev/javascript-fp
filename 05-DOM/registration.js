function myFunction() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var email = document.getElementById("email").value;
  result = name + "," + phone + "," + country + "," + email;
  alert(result);
  return result;
}
