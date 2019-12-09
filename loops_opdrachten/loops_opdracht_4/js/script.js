//javascript code//javascript code

function showLoop() {
    var a;
    var text = "";
  
    for (a = 1; a <= 1000; a++) {
      console.log(a);
      text += "Nummer " + a + "<br>";
    }
    document.getElementById("loop").innerHTML = text;
  }

  