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