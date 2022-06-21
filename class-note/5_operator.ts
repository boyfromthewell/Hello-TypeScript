// Union 타입

/* function logMessage(value: any){
    console.log(value);
} */

//logMessage("hello");

// logMessage(100);

var sehoo: string | number | boolean;
// 다른 타입도 추가하고 싶다면 ? => | 연산자 
 function logMessage(value: string | number){
    if (typeof value==='number'){ // 자동으로 추론 해줘서 api나 함수 호출가능
        value.toString()
    }
    else if (typeof value==='string'){
        value.length
    }
    throw new TypeError('value must ble string or number');
}
logMessage('hello')
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    someone.name // 공통된 속성에만 제공함
    //someone.age // x
    //someone.skill // x
}

askSomeone({name: 'dev', skill: 'web'}); // Developer의 인터페이스
askSomeone({name:"캡틴", age:100}) // Person의 인터페이스

// 인터섹션 타입

var sehooooo: string | number | boolean;
var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.age 
    someone.skill
}

// askSomeone2({name:"디벨로퍼", skill: "웹 개발"}) // x (Developer과 Person의 타입이 다 있는 객체를 넘겨야함)
askSomeone2({name:"디벨로퍼", skill: "웹 개발", age: 30}) // o