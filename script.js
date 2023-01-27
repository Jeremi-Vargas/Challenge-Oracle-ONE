//Las reglas para encriptar son las siguientes:

//La letra "a" es convertida para "ai"
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

function encriptador(Encriptado){
    let Codigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    Encriptado = Encriptado.toLowerCase()
    for (let i=0; i<Codigo.length; i++){
        if(Encriptado.includes(Codigo[i][0])){
            Encriptado=Encriptado.replaceAll(Codigo[i][0], Codigo[i][1])
        }
    }
    return Encriptado
}
function desencriptador(Desencriptado){
    let Codigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    Desencriptado = Desencriptado.toLowerCase()
    for (let i=0; i<Codigo.length; i++){
        if(Desencriptado.includes(Codigo[i][1])){
            Desencriptado=Desencriptado.replaceAll(Codigo[i][1], Codigo[i][0])
        }
    }
    return Desencriptado
}
function botonEncriptar(){
    const textoEncriptado= encriptador(textArea.value)
    mensaje.value= textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}
function botonDesencriptar(){
    const textoEncriptado= desencriptador(textArea.value)
    mensaje.value= textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}
function copiarTexto(){
    mensaje.select();
    document.execCommand('copy');
}