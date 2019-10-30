var path = require('path');

//디렉토리 이름 합치기
var directories = ['users', 'mike', 'docs'];
var docsDirectory = directories.join(path.sep)
console.log('문서 디렉토리 : %s', docsDirectory);

//디렉토리 이름과 파일 이름 합치기
var curPath =path.join('/Users/mike', 'notepad.exe')
console.log('파일경로 : %s', curPath);

//패스에서 디렉토리, 파일이름, 확장자 구별하기
var fileName = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(fileName);
var basename = path.basename(fileName);
var extname = path.extname(fileName);

console.log('디렉토리 : %s , 파일이름 : %s , 확장자 : %s', dirname, basename, extname)

