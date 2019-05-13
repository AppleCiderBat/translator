function plzWork() {
    var typeHere = document.getElementById("englishPhrase").value;
    var tada = 0;

    if (typeHere == "Hello" && document.getElementById("spanny").checked ) {
        tada = "Hola";
    } else if (typeHere == "Hello" && document.getElementById("frenchie").checked ) {
        tada = "Bonjour";
    } else if (typeHere == "Hello" && document.getElementById("italia").checked) {
        tada = "Caio";
    } else {
        tada = "Whoops!  Something went wrong!"
    }

    if (typeHere == "How are you" && document.getElementById("spanny").checked ) {
        tada = "¿Cómo estás?";
    } else if (typeHere == "How are you" && document.getElementById("frenchie").checked ) {
        tada = "Comment ça va?";
    } else if (typeHere == "How are you" && document.getElementById("italia").checked) {
        tada = "Come stai?";
    } else {
        tada = "Whoops!  Something went wrong!"
    }

    if (typeHere == "My name is" && document.getElementById("spanny").checked ) {
        tada = "Me llamo...";
    } else if (typeHere == "My name is" && document.getElementById("frenchie").checked ) {
        tada = "Je m'appelle...";
    } else if (typeHere == "My name is" && document.getElementById("italia").checked) {
        tada = "Mi chiamo...";
    } else {
        tada = "Whoops!  Something went wrong!"
    }

    if (typeHere == "Nice to meet you" && document.getElementById("spanny").checked ) {
        tada = "Mucho gusto";
    } else if (typeHere == "Nice to meet you" && document.getElementById("frenchie").checked ) {
        tada = "Enchanté (if speaker is male) / Enchantée (if speaker is female)";
    } else if (typeHere == "Nice to meet you" && document.getElementById("italia").checked) {
        tada = "Molto lieto";
    } else {
        tada = "Whoops!  Something went wrong!"
    }

    if (typeHere == "I need help" && document.getElementById("spanny").checked ) {
        tada = "Necesito ayuda";
    } else if (typeHere == "I need help" && document.getElementById("frenchie").checked ) {
        tada = "J'ai besoin d'aide";
    } else if (typeHere == "I need help" && document.getElementById("italia").checked) {
        tada = "Ho bisogno d'aiuto";
    } else {
        tada = "Whoops!  Something went wrong!"
    }
    
    document.getElementById("result").innerHTML = tada;
}