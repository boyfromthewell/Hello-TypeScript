// JS 문자열 선언
// var str="hello";

// TS 문자열 선언
let str: string = "hello";

// TS number 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk", 10]; // error
// 다른 방법
let items: number[] = [1, 2, 3];

// TS 튜플 (배열의 특정 순서의 타입까지 정의)
let address: [string, number] = ["gangnam", "pangyo"]; // x
let address: [string, number] = ["gangnam", 10]; // o

// TS 객체
let obj: object = {};
//let person:object={
//    name:"capt",
//    age:100
//}
// 객체의 타입까지 지정가능
let person: { name: string; age: number } = {
  name: "kwon",
  age: 10,
};

// TS 진위값

let show: boolean = true;
