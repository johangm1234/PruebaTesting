const sub = require("./sub");

test('Resta dos números correctamente', () => {
    expect(sub(5, 3)).toBe(2);
});

test("resta dos números correctamente", () => {
    expect(sub(10, 8)).toBe(2);
});

test('Resta cero correctamente', () => {
    expect(sub(5, 0)).toBe(5);
});
