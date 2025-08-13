// JavaScript 자료형과 연산자 실습 문제
// 멘티들을 위한 라이브코딩 스타일 연습

console.log("=== JavaScript 자료형과 연산자 실습 ===");

// 1. 자료형 확인하기
console.log("\n1. 자료형 확인하기");
let num = 42;
let str = "Hello";
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "김멘티" };
let func = function() { return "함수"; };
let undef = undefined;
let nullVal = null;

// TODO: typeof 연산자를 사용해서 각 변수의 타입을 출력하세요
console.log("num의 타입:", typeof num);
console.log("str의 타입:", typeof str);
console.log("bool의 타입:", typeof bool);
console.log("arr의 타입:", typeof arr);
console.log("obj의 타입:", typeof obj);
console.log("func의 타입:", typeof func);
console.log("undef의 타입:", typeof undef);
console.log("nullVal의 타입:", typeof nullVal); // 주의: null의 타입은 "object"!

// 2. falsy 값들 확인하기
console.log("\n2. falsy 값들 확인하기");
let falsyValues = [false, 0, "", null, undefined, NaN];

// TODO: 각 falsy 값을 Boolean()으로 변환해보세요
falsyValues.forEach(value => {
    console.log(`${value} -> ${Boolean(value)}`);
});

// 3. || 연산자 (OR) 실습
console.log("\n3. || 연산자 실습");
let name1 = "";
let name2 = null;
let name3 = "김멘티";

// TODO: || 연산자를 사용해서 기본값 설정하기
let defaultName1 = name1 || "기본이름";
let defaultName2 = name2 || "기본이름";
let defaultName3 = name3 || "기본이름";

console.log("name1 ||의 결과:", defaultName1);
console.log("name2 ||의 결과:", defaultName2);
console.log("name3 ||의 결과:", defaultName3);

// 4. ?? 연산자 (Nullish Coalescing) 실습
console.log("\n4. ?? 연산자 실습");
let score1 = 0;
let score2 = null;
let score3 = undefined;
let score4 = 85;

// TODO: ?? 연산자를 사용해서 null/undefined만 기본값으로 바꾸기
let finalScore1 = score1 ?? 100;
let finalScore2 = score2 ?? 100;
let finalScore3 = score3 ?? 100;
let finalScore4 = score4 ?? 100;

console.log("score1 ??의 결과:", finalScore1); // 0 (falsy이지만 null/undefined가 아님)
console.log("score2 ??의 결과:", finalScore2); // 100
console.log("score3 ??의 결과:", finalScore3); // 100
console.log("score4 ??의 결과:", finalScore4); // 85

console.log("\n|| vs ?? 비교:");
console.log("0 || 100 =", 0 || 100);
console.log("0 ?? 100 =", 0 ?? 100);

// 5. 실제 활용 예제
console.log("\n5. 실제 활용 예제");

function processUser(user) {
    // TODO: 각 필드에 적절한 기본값 설정
    let name = user?.name || "익명";
    let age = user?.age ?? 0;
    let isActive = user?.isActive ?? true;
    
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}

// 테스트 케이스들
let users = [
    {},
    { name: "", age: 0, isActive: false },
    { name: "김멘티", age: null, isActive: undefined },
    { name: "박멘티", age: 25, isActive: true }
];

users.forEach((user, index) => {
    console.log(`User ${index + 1}:`, processUser(user));
});

// 6. 심화 문제
console.log("\n6. 심화 문제");

// TODO: 다음 코드의 결과를 예측하고 실행해보세요
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);
console.log("'' == false:", '' == false);
console.log("'' === false:", '' === false);

// 7. 조건부 실행
console.log("\n7. 조건부 실행");
let config = {
    debug: false,
    timeout: 0,
    url: null,
    retries: undefined
};

// TODO: 각각 다른 연산자 사용해보기
config.debug && console.log("디버그 모드입니다");
config.timeout || console.log("타임아웃이 설정되지 않았습니다");
config.url ?? console.log("URL이 설정되지 않았습니다");
config.retries ?? console.log("재시도 횟수가 설정되지 않았습니다");

console.log("\n=== 실습 완료 ===");