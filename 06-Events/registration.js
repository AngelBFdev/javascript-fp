function myFunction() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var email = document.getElementById("email").value;


  result = name + "," + phone + "," + country + "," + email;
  alert(result);
  return result;
}

var phone = document.getElementById("phone");
phone.addEventListener("blur", function( event ) {
  if (event.target.length != 10 && isNaN(event.target.value)) {
    alert("Enter a valid number");
  }
}, true);

