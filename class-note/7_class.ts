class Person {
    //최상단에 타입 정의 해줘야함
    private name: string;
    public age: number;
    readonly log: string; // 접근만 가능 (읽기만 가능)
    // 변수의 유효범위까지 설정 가능

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
}