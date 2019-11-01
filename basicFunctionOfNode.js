//url 모듈
//주소 문자열을 구별하기 위한 모듈
//문자열을 url객체로 만들거나 url 객체에서 일반 문자열로 반환
var url = require('url');//메소드 호출

//주소 문자열을 URL객체로 만들기
var curlURL = url.parse('https://m.search.naver.comm/search.naver?query=steve+jobs&where=m&sm=mtp+hty');

//url주소를 문자열로 만들기
var curStr = url.format(curlURL);

console.log('주소 문자열 : %s', curStr);
console.log(typeof curStr); //string
console.dir(curlURL);


//querystring 모듈
//쿼리속성의 요청 파라미터 분석 (분리)
var querySting = require('querystring');
var param = querySting.parse(curlURL.query); //parse 요청 파라미터 문자열을 파싱하여 객체로 할당

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querySting.stringify(param))//stringufy 객체 안에 들어 있는 요청 파라미터를 다시 문자열로 변환
console.log(param)//Raw parsed obj

var moon_jong = url.parse('https://github.com/moon-jong?tab=repositories');
var gitHub = querySting.parse(moon_jong.query);

console.log(gitHub)

//이벤트
//노드 = 이벤트 기반읭 비동기 처리방식 프레임 워크  - 비동기 방식으로 처리하기 위해 서로 이벤트를 전달
//이벤트를 보내고 받을 수 있도록 EventEmitter를 사용
