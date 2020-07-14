var result;

for (var i=1; i<=100; i++) {
    result=i;
    if ((i%5==0) && (i%3==0)) {
        result='fizzbuzz';
    } else if (i%5==00) {
        result='fizz';
    } else if (i%3==0) {
        result='buzz';
    }
    console.log(result);
}
