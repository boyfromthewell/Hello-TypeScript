interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
let seho: User = {
    age: 10,
    name: 'soonyong'
}

// 함수에 활용한 인터페이스
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: "캡틴",
} // x (User 인터페이스 형식에 맞지 않는다)
const capt2 = {
    name: "캡틴",
    age: 30
} // o
getUser(capt2);

// 함수의 스펙(구조)에 인터페이스를 활용

interface sumFunction{
    (a:number, b:number): number;
}
let sum : sumFunction;
sum = function(a:number, b:number): number{
    return a + b;
}

// 인덱싱
interface StringArray{
    [index:number]: string;
}

let arr: StringArray=['a','b','c'];
// arr[0] = 10 // x
arr[0] = "hi" // o

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp // RegExp : 정규표현식 생성자
}

var obj:StringRegexDictionary={
    //sth:/abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(element => {
    // element: string으로 자동으로 타입 정의 미리 해줌 (추론)
});

// obj['cssFile']='a' // x

// 인터페이스 확장
interface Person {
    name:string;
    age:number;
}

// 인터페이스 상속 해주기 (extends)
interface Developer extends Person{
    lang:string;
}

let soonyong: Developer = {
    name: "hi",
    age: 30,
    lang: "js"
}