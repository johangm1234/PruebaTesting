const esPrimo = require('./esPrimo')

test('Verifica que un número primo devuelva true', () => {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(13)).toBe(true);
});

test('Verifica que un número no primo devuelva false', () => {
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(9)).toBe(false);
});

test('Asegura que 1 no sea considerado primo', () => {
    expect(esPrimo(1)).toBe(false);
});
