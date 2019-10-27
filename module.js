var calc = {};

calc.add = function(a, b){
    return a+b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));


//모듈을 호출하여 출력
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

//객체를 그대로 할당'
var calc2 = require('./calc2')
console.log('모듈로 분리한 후 -calc2.add 함수 호출 결과 : %d', calc2.add(10,10))

//시스템 환경변수에 접근할 수 있는 외장 모듈 nconf
var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값 : %s',nconf.get('OS'));