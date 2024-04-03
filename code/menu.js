function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "container") {
      x.className += " responsive";
    } else {
      x.className = "container";
    }
  }