	function encriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var encriptado = texto.replace(/e/igm,"enter");
    var encriptado = encriptado.replace(/i/igm,"imes");
    var encriptado = encriptado.replace(/o/igm,"ober");
    var encriptado = encriptado.replace(/a/igm,"ai");
    var encriptado = encriptado.replace(/u/igm,"ufat");

    document.getElementById("imgmuñeco").style.display = "none";
    document.getElementById("textmuñeco1").style.display ="none";
    document.getElementById("textmuñeco2").innerHTML =encriptado;
    document.getElementById("btncopiar").style.display ="show";
    document.getElementById("btncopiar").style.display ="inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();

    var encriptado = texto.replace(/enter/igm,"e");
    var encriptado = encriptado.replace(/imes/igm,"i");
    var encriptado = encriptado.replace(/ober/igm,"o");
    var encriptado = encriptado.replace(/ai/igm,"a");
    var encriptado = encriptado.replace(/ufat/igm,"u");

    document.getElementById("imgmuñeco").style.display = "none";
    document.getElementById("textmuñeco1").style.display = "none";
    document.getElementById("textmuñeco2").innerHTML = encriptado;
    document.getElementById("btncopiar").style.display = "show";
    document.getElementById("btncopiar").style.display = "inherit";
}

function btncopiar(){
    var texto = document.querySelector("#textmuñeco2");
    texto.select();
    document.execCommand("copy");
    alert ("¡Copiado!")
}