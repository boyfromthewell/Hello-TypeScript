// 타입추론 기본 1
var a = 'abc';

function getB(b = 10) {
    // 모든 동작 하나하나가 타입추론 이루어짐
    var c = 'hi';
    return b + c; // 문자열로 취급
}
// 타입추론 기본 2
/* interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: "hi",
    title: "bye"
} */

// 타입추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    description: 'abc',
    title: 'abc',
    value: 'string',
    tag: 'tag'
}

// best common type
var arr = [1,2,true, true, 'a'];