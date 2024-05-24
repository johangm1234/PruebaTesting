const factorial = require('./factorial')

test('Calcula correctamente el factorial de un número', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
});

test('El factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
});

test('El factorial de un número negativo devuelve NaN', () => {
    expect(factorial(-5)).toBeNaN();
});
