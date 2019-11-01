function Person(name, age){
    this.name = name;
    this.age =age;
}
Person.prototype.walk = function(speed) {
    console.log(speed + 'km의 속도로 걸어간다');
};

var person1 = new Person('황인준', 28);
var person2 = new Person('이용현', 25);

console.log(person1.name + '객체의 person.walk(10)을 출력');
person1.walk(10);

//protoytpe 객체를 추가하지 않아도 함수 객체를 만들 때 함수 안에 prototype이나 constructor와 같은 객체들이 자동으로 생성