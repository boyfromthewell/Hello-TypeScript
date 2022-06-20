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