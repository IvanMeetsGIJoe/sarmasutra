function addAB (a, b) {
    // alert("inside addAB"); alert (a + b);
    return Number(a) + Number(b);  
}

function subtractAB (a, b) {
    // alert("inside subtractAB");
    return a - b;    
}

function multiplyAB (a, b) {
    // alert("inside multiplyAB");
    return a * b;    
}

function divideAB(a, b) {
    // alert("inside divideAB");
    if (b == 0) {
        throw new Error("B no good. Go ahead, B no good and divide by zero again.");
    }
    return a / b;
}