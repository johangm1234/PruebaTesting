function capitalizarCadena(texto) {
    if (texto === "") return "";
    return texto.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}

module.exports = capitalizarCadena;
