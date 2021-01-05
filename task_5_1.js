function multiply(a, b) {
    if (typeof(a)!=='number' || typeof(b)!=='number') {
        throw new Error('Incorrect input');
    } else {
        return a * b;
    }
}

function multiplyBy10(a) {
    return multiply.call(null, 10, a);
}