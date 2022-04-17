var numerator =3;
var denominator = 27;

$.writeln(longDivide(numerator, denominator));

function longDivide(n, d) {
    // get first value
    var temp = Math.floor(n/d);
    var subtractor, tempResult;
    
    // adding first value to output string
    var resultString;
    if(temp < 1) {
        resultString= temp;
        } else {
    resultString= temp+".";
    }
    // first term to subtract from the numerator
    subtractor = temp*d;
    var counter = 0;
    
    // loop until subtracted value is 0
    do {
    
    if(n-subtractor == 0) {
        counter = 100000000000;
        }
    tempResult = parseInt((n-subtractor).toString()+"0");
    temp = tempResult/d;
    n = tempResult;
    resultString+=temp;
    subtractor = temp*d;//
    counter++;
    } while(counter < 100);
    
    return resultString;
    }