//var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

function encriptar (){
    let entrada = document.getElementById("inputText").value;
    let elementoSalida = document.getElementById("outputText");
    let salida = "";

    if (entrada.length === 0) {
        console.log();
    } else {
        for (let i=0; i<entrada.length;i++) {
            switch (entrada[i]) {
                case "a":
                    salida += "ai";
                    break;
                case "e":
                    salida += "enter";
                    break;
                case "i":
                    salida += "imes";
                    break;
                case "o":
                    salida += "ober";
                    break;
                case "u":
                    salida += "ufat";
                    break;
                default:
                    salida += entrada[i];
                    break;
            }
        }
        elementoSalida.value = salida; 
    }
}

function desencriptar () {
    let entrada = document.getElementById("inputText").value;
    let elementoSalida = document.getElementById("outputText");
    let salida = entrada;

    if (entrada.length === 0) {
        console.log();
    } else {
        salida = salida.replaceAll("ai","a");
        salida = salida.replaceAll("enter","e");
        salida = salida.replaceAll("imes","i");
        salida = salida.replaceAll("ober","o");
        salida = salida.replaceAll("ufat","u");

        elementoSalida.value = salida;
    }
}

function copy () {
    var copyText = document.getElementById("outputText");
    var copyTextLabel = document.getElementById("copySuccessLabel");

    if (copyText.value === "") {
        console.log("Encripta algo antes de copiar :D!");
    } else {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
    
        navigator.clipboard.writeText(copyText.value);
        copyTextLabel.style.display = "";
        setTimeout(function(){ copyTextLabel.style.display = "none"; }, 1500);
    }

  }