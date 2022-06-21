// 숫자형 enum
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes) // 0

// 문자형 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2) // '나이키'

// example

enum Answer {
    Yes='Y',
    No='N'
}
function askQuestion(answer: Answer){
    if (answer===Answer.Yes){
        console.log("정답");
    }
    if (answer===Answer.No){
        console.log("오답");
    }
}

askQuestion(Answer.Yes);
// askQuestion("Yes"); // x

/* askQuestion('예스');
askQuestion('y');
askQuestion('Yes'); */
