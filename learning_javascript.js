var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000 ; i ++){
    result += i;
}

console.log('1에서 1000까지 더한 결과물 : %d', result);

console.log('현재 파일의 이름 : %s', __filename);
console.log('현재 파일의 경로 : %s', __dirname);
console.timeEnd('duration_sum')

//콘솔의 객체 dir() 메소드를 이용하여 객체 안에 들어 있는 속성들을 확인
var Person = {name:'Moonjong shin', age: 20};
console.dir(Person);
console.log(Person);
console.dir('현재 파일의 경로 : %s', __dirname) // console.dir 메소드는 객체 출력


//argv 메소드를 이용하여 파라미터 정보 출력
console.log('argv 속성의 파라미터 수 :' + process.argv.length);
console.dir(process.argv);


//세번째 파라미터 값을 확인  실행 -> cmd node <filename.js> __port 7001
if (process.argv.length > 2 ){
    console.log('세 번쨰 파라미터의 값 :%s', process.argv[2]);
}

process.argv.forEach(function(element,index){
    console.log(index + ':',element);
});


