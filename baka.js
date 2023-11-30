var valorA = prompt("formule o valorde a:");
var valorB = prompt("formule o valorde b:");
var valorC = prompt("formule o valorde c:");
var con1;
var con2;

var delta = (valorB*valorB)-4*valorA*valorC;
document.write("valor de Delta =>" + delta + "<br></br>");

if(delta<0){
    document.write("não seja negativo fdp.<br><br/>");
}

else{
    document.write("seja positivo fdp.<br><br/>");
    con1 = (-valorB+Math.spt(delta)) / (2*valorA);
    con2 = (-valorB-Math.spt(delta)) / (2*valorA);

    document.write("x1 = "+ con1 + "<br/>");
    document.write("x2 = "+ con2 + "<br/>");
}