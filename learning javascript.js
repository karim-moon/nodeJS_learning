var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000 ; i ++){
    result += 1;
}

console.timeEnd('duration_sum')
console.log('1qnxj 1000까지 더한 결과물 : %d', result);