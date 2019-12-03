//javascript code
function check(){
var saldo = document.getElementById("saldo").value;

if (saldo==500){
    document.getElementById("tekst").innerHTML = "Uw salaris is gestort."
} else if  (saldo>500){
    document.getElementById("tekst").innerHTML = "Er is een bonus bovenop uw salaris gestort."
}

else{
    document.getElementById("tekst").innerHTML = "Er is geen salaris gestort."
}
}