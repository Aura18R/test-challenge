const { default: expect } = require('expect');

const calculator = require('../calculator');

test('Suma de dos numeros', () =>{
    expect(calculator.sum(4,6)).toBe(10);
});

test('Resta de dos numeros', () =>{
    expect(calculator.substract(4,6)).toBe(-2);
});

test('Multiplicacion de dos numeros', () =>{
    expect(calculator.multiply(4,6)).toBe(24);
});

test('Division de dos numeros', () =>{
    expect(calculator.divide(18,6)).toBe(3);
});

test('Potencia de dos numeros', () =>{
    expect(calculator.power(2,3)).toBe(8);
});


