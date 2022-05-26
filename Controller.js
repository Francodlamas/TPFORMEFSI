 campoObligatorio=()=>{
    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value);

    let aux=true;
        if(elemento1 ==null || elemento1==''|| isNaN(elemento1) || elemento2 ==null || elemento2=='' || isNaN(elemento2) || elemento3 ==null || elemento3=='' || isNaN(elemento3)){
            aux=false;
        }
    if(!aux){
        alert("Falta completar!")
    }
    return aux;
}
 validacionElemento = (elemento, materia) =>{
    if(elemento>=6 && elemento <=10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
}

function promedio() {
    let aux;
    aux=campoObligatorio();
    console.log(aux);
    if(aux==true){
    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value); 
    let promedio=(elemento3+elemento2+elemento1)/3;   
    if(elemento1 > 10 || elemento1 < 1){
        alert('Error al colocar un numero entre 1 y 10');
    }
    else if(elemento2 > 10 || elemento2 < 1){
        alert('Error al colocar un numero entre 1 y 10');
    }
    else if(elemento3 > 10 || elemento3 < 1){
        alert('Error al colocar un numero entre 1 y 10');
    }else{    document.getElementById("Promedio").innerHTML=promedio;}

    if(promedio>=6 && promedio <=10){
     
        document.getElementById("Promedio").style.color="green";
    }else{
        document.getElementById("Promedio").style.color="red";
    }

}
}

function MayorNota() {
    let aux;
    aux=campoObligatorio();
    console.log(aux);
    if(aux==true){
    let elemento1=parseInt(document.getElementById("Matematica").value);
    let elemento2=parseInt(document.getElementById("Lengua").value);
    let elemento3=parseInt(document.getElementById("EFSI").value);

    if(elemento1>elemento2 && elemento1>elemento3){
        document.getElementById("MayorNota").innerHTML="La nota 1 es la mas alta "+elemento1;
        document.getElementById("MayorNota").style.color="blue";
    }
    else if(elemento2>elemento1 && elemento2>elemento3) {
        document.getElementById("MayorNota").innerHTML="La nota 2 es la mas alta "+elemento2;
        document.getElementById("MayorNota").style.color="blue";
    } 
    else if(elemento3>elemento1 && elemento3>elemento2) {
    document.getElementById("MayorNota").innerHTML="La nota 3 es la mas alta "+elemento3;
    document.getElementById("MayorNota").style.color="blue";
   
}
    else if(elemento3==elemento1 && elemento3>elemento2) {
    document.getElementById("MayorNota").innerHTML="La nota 3 es la mas alta "+elemento3+" La nota 1 es la mas alta "+elemento1;
    document.getElementById("MayorNota").style.color="blue";
    }
    else if(elemento2==elemento3 && elemento2>elemento1) {
    document.getElementById("MayorNota").innerHTML="La nota 2 es la mas alta "+elemento2+" La nota 3 es la mas alta "+elemento3;
    document.getElementById("MayorNota").style.color="blue";
    }
    else{
    document.getElementById("MayorNota").innerHTML="La nota 1 es la mas alta "+elemento1+" La nota 2 es la mas alta "+elemento2;
    document.getElementById("MayorNota").style.color="blue";
    }
    }

}
