// 변수에는 숫자나 문자열 등 객체뿐만 아니라 함수도 할당 가능
/* 변수에 함수를 할당할 수 있는 특징
            -> 함수를 호출할 떄 다른 함수를 파라미터로 전달하거나 함수 안에서 또 다른 함수를 만들어 반환할 수 있다.*/
//For 비동기 프로그래밍

function add (a, b, callback){
    var result = a + b;
    callback(result);
}

add (10, 10, function (result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과 :%d', result);
});


//함수 안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법

function add(a, b, callback){
    var result = a + b;
    callback(result);

    var history = function () {
        return a + '+' + b + '=' + result;
    }
    return history;
}

//result를 받아 callback의 파라미터로 집어넣은 후 history로ㅂ 출력
var addHistory = add(10, 10, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출');
    console.log('더하기 (10,10)의 결과 %d', result);
});
// addHistoty 객체형 함수의 리턴값 -> add function의 최종 return값 history
console.log('결과 값으로 받은 함수 실행 결과:' + addHistory());



function add1(a, b, callback){
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function(){
        count++;
        return count + ':' + a + '+' + b + '=' + result;
    };
    return history;
}
var add_history = add1 ( 10, 10, function(result){
    console.log('파라미터로 전달된 값이 호출됨');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과 값으로 받은 함수 실행 결과 :' + add_history());
console.log('결과 값으로 받은 함수 실행 결과 :' + add_history());
console.log('결과 값으로 얻은 함수 실행 결과 :' + add_history());