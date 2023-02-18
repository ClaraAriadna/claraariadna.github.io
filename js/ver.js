//Definición de variables
let bd = document.getElementById("bd");
let phn = document.getElementById("phn");
let mail = document.getElementById("mail");
let loc = document.getElementById("loc");
let about = document.getElementById("about");

//Función para eliminar el estilo de los enlaces
function linkstyle(x) {
    document.getElementById(x).style.pointerEvents = 'none';
    document.getElementById(x).style.color = 'black';
}

//Textos
bd.onclick = function () {
    bd.innerHTML = "14 de julio de 2003"
    linkstyle("bd");
}

phn.onclick = function () {
    phn.innerHTML = "1539370779"
    linkstyle("phn");
}

mail.onclick = function () {
    mail.innerHTML = "claraariadna.gnz@gmail.com"
    linkstyle("mail");
}

loc.onclick = function () {
    loc.innerHTML = "José Mármol, partido de Almirante Brown"
    linkstyle("loc");
}

about.onclick = function () {
    about.innerHTML = "Me considero una persona excéntrica y autodidacta fundamentalmente de los temas de mi interés."
    linkstyle("about");
}














