// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

// 불필요한 파라미터 제한 가능
sum(10, 20, 30, 40); // error

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}

// 물음표(?)를 넣어주면 넣어도 되고, 안넣어도됨
log("hi");
log("hi", "hello");
