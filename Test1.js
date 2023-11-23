 function binaryToDecimal(binaryNumber){
       let decimalNumber = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        decimalNumber = (decimalNumber << 1) | parseInt(binaryNumber[i]);
    }
    return decimalNumber;
 }
var addBinary = function(a, b) {


    let m = binaryToDecimal(a);
    let n = binaryToDecimal(b);
    let sum = m + n;
    let result="";
    while(sum>0){
        let rem = sum % 2;
         sum = Math.floor(sum / 2);
        result = rem + result;
    }

    return result || "0";
};
