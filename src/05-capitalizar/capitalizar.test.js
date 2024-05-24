const capitalizarCadena = require('./capitalizarCadena')

test('Verifica la conversión de una cadena a título', () => {
    expect(capitalizarCadena("hola mundo")).toBe("Hola Mundo");
});

test('Comprueba que una cadena vacía devuelva una cadena vacía', () => {
    expect(capitalizarCadena("")).toBe("");
});

test('Asegura que una cadena ya en título no cambie', () => {
    expect(capitalizarCadena("Hola Mundo")).toBe("Hola Mundo");
});
