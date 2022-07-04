interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

// developer = person; (skill 속성이 없기떄문에 당연히 error)
// person = developer;

// 함수
var add = function(a: number) {
    //...
}
var sum = function(a: number, b: number) {
    //...
}

sum = add; // 가능
// add = sum (호환 불가능, type 범위가 sum이 더 많기 때문)


// 제네릭
interface Empty<T> {
 //...
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data:T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// 구조적으로 타입이 달라짐 서로 호환 x
/* notempty1 = notempty2;
   notempty2 = notempty1; */