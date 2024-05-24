const sub = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Los argumentos deben ser enteros";
    }
    
    return Math.abs(num1 - num2);
};

module.exports = sub;
