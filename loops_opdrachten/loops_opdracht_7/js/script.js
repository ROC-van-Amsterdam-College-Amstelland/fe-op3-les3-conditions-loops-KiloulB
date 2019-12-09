//javascript code

function showLoop() {
    var i;
    var text = "";
    for (i=0;i<=100;i++) {
    var rest = i % 2;
    var lol = i % 5;
   

    if (rest == 0) {
        console.log(i);
    }
    else if (lol == 0){
        text += i + "VET COOL<br>"
    }
    else {
        text += i + "<br>";
    }
}
    document.getElementById("loop").innerHTML = text;
  }

  