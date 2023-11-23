var addBinary = function(a, b) {
    let m = BigInt('0b' + a);
    let n = BigInt('0b' + b);
    let sum = m + n;

    return sum.toString(2);
};
