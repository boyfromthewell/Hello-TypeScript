interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {
        name: 'Tony', age: 33, skill: "Iron making"
    }
}

var tony = introduce();
//console.log(tony.skill); // 없다고 나옴 (공통된 속성만 접근할수 있기 떄문에)
console.log(tony.name); // name만 접근 가능하다

if ((tony as Developer).skill) {
    // 타입 단언 했기떄문에 skill 보장
    var skill = (tony as Developer).skill;
    console.log(skill);
}
else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}
// 가독성이 안좋고 너무 불편하다 이럴때 쓰는것이 타입 가드

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; // skill이란 값이 있을때
}

if (isDeveloper(tony)) { // Developer이면
    console.log(tony.skill);
}
else { // 아니면
    console.log(tony.age);
}