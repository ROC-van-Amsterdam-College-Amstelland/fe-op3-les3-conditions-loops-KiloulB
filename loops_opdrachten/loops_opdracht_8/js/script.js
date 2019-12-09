//javascript code

function showLoop() {
    var i;
    var text = "";
    for (i=0;i<=50;i++) {
    var rest = i % 2;
    var lol = i % 25;
   

    if (lol == 0){
        text += i + alert("Het getal 25 is net geen bullseye!");
    }
    else {
        text += i + "<br>";
    }
}
    document.getElementById("loop").innerHTML = text;
  }

  