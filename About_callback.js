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