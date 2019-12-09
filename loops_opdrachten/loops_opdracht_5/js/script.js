//javascript code

function showLoop() {
    var i;
    var text = "";
    for (i=0;i<=20;i++) {
    var rest = i % 2;
   

    if (rest == 0) {
        console.log(i);
    }

    else {
        text += i + "<br>";
    }
}
    document.getElementById("loop").innerHTML = text;
  }

  