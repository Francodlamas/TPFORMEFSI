var formularioPrincipal = document.getElementById("formulario");

var formularioPrincipal = document.getElementById("formulario");


function obtenerValores() {

    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value);
    document.getElementById("1").innerHTML=elemento1;
    document.getElementById("2").innerHTML=elemento2;
    document.getElementById("3").innerHTML=elemento3;

};
function promedio() {
    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value);
    let promedio=(elemento3+elemento2+elemento1)/3

    document.getElementById("Prom").innerHTML=promedio;
}
function MayorNota() {
    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value);

    if(elemento1>elemento2 && elemento1>elemento3){
        document.getElementById("1").innerHTML=elemento1;
    }
    else if(elemento2>elemento1 && elemento2>elemento3) {
        document.getElementById("2").innerHTML=elemento2;
    } 
    else if(elemento3>elemento1 && elemento3>elemento2) {
    document.getElementById("3").innerHTML=elemento3;
    }
    else if(elemento3==elemento1 && elemento3>elemento2) {
    document.getElementById("3").innerHTML=elemento3;
    document.getElementById("1").innerHTML=elemento1;
    }
    else if(elemento2==elemento3 && elemento2>elemento1) {
    document.getElementById("2").innerHTML=elemento2;
    document.getElementById("3").innerHTML=elemento3;
    }
    else{
    document.getElementById("1").innerHTML="La nota 1 es la mas alta "+elemento1;
    document.getElementById("2").innerHTML="La nota 2 es la mas alta "+elemento2;
    }
    
    console.log(elemento1, elemento2, elemento3);
   

}
