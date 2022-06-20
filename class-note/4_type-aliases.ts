// type 별칭
/* interface Person{
    name:string;
    age:number;
} */
type Person={
    name: string;
    age: number;
} 

let seho: Person = {
    name:"세호",
    age:30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {id:string; title:string; done: boolean};
function getTodo(todo:Todo){

}

// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아닌, 정의한 타입에 대해 나중에
// 쉽게 참고할수 있게 이름을 부여하는것과 같다.

// type 별칭은 확장이 불가능! 
// 가능한한 interface 에서 선언해서 사용 하는것을 추천함