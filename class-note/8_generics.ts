// 원래 js문법
/* function logText(text) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText("하이"); // 문자열 하이
logText(true) // 진위값 true */

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
// 호출하는 시점에 타입을 넘겨줄수 있는것 - 제네릭
logText<string>('hi');


// 함수 중복 선언으로 인해 유지보수 측면으로 좋지 않다
function logText1(text:string){
    console.log(text);
    //text.split("").reverse().join("")
    return text;
}
function logNumber(num:number){
    console.log(num);
    return num;
}
const num = logNumber(10);

// 유니온 타입을 이용한 선언 방식의 문제점
function unionLogText(text: string | number){
    console.log(text);
    // 문제 1
    // text. 으로 빌트인 api 사용할 경우 string, number와 겹치는 api만 나옴
    return text;
}
const a = unionLogText("a")
// 문제 2
// a.split('') // x
// string | number 타입에서 split이 제공 되지 않는다 타입을 정확히 알아야만 사용가능

// 제네릭의 장점과 타입 추론에서의 이점
function genericlogText<T>(text: T): T{
    console.log(text);
    return text;
}
const str = genericlogText<string>('abc')
str.split("");

const login = genericlogText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
/* interface Dropdown { 
    value:string;
    selected:boolean;
}
const obj: Dropdown={value:10, selected:false} // x */

 interface Dropdown<T>{
    value:T;
    selected:boolean;
}

const obj:Dropdown<string> = {value:"abc", selected: false}

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] { // 제네릭이 배열이 될것이다 (힌트주기)
    console.log(text.length);

    text.forEach((text)=>{
        console.log(text);
    })
    return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
// logTextLength2(10); // x
logTextLength2({ length:10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name:string;
    price:number;
    stock:number;

    // 이해 안가서 예시 하나더
    blablabla:boolean;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
/* getShoppingItemOption(10);
getShoppingItemOption<string>("a"); */
getShoppingItemOption("name");
getShoppingItemOption("price")

getShoppingItemOption("blablabla") // value값은 상관이 없는듯

// 여기서 약간 이해가 안갔음
// extends keyof를 포함한 제네릭이 이전과 같이 타입 명시를 위해서쓰인게 아니라 
// 단순히 T를 타입으로 가지는 변수에 들어갈 값을 제한하는거임  
// T 타입의 변수는 ShoppingItem의 키값만 값으로 받을 수 있다는 얘기. 
// 키는 원래 string이기 때문에 그래서 'name', 'price', 'stock'만 들어갈 수 있었던것