var calc = {};

calc.add = function(a, b){
    return a+b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));


//모듈을 호출하여 출력
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));