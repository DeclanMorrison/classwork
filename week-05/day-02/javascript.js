function isPrime(i){
    var _isPrime = true;
    n = 1;
    while (n < i){
        if(!(i % n)){
            _isPrime = false;
        };
        n++;
    };

    alert(_isPrime);
};

// if i is divisible by anything other than 1 or itself, it is not prime 
// check this by dividing i by n, which is all numbers less than or equal to itself.
// if at any point 

function isPrime(3){
    var _isPrime = true;
    n = 1;
    while (1 < 3){
        if(!(3 % 1)){
            _isPrime = false;
        };
        1++;
    };

    alert(_isPrime);
};
