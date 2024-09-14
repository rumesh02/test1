function myFunction() {
    var x = document.getElementById("pswrd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


var input = document.getElementById("pswrd");
var text = document.getElementById("caps");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});