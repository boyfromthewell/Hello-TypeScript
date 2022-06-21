// ES6 클래스

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100); // 위아래 문법은 동일

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var soon = new Person("순용", 30); // 생성 되었습니다

console.log(soon); // Person {name: '순용', age: 30}
