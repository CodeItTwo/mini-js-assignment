# 3-1주차: JavaScript 자료형과 연산자 실습

## 🎯 학습 목표

JavaScript의 핵심 자료형과 연산자를 실습을 통해 완전히 이해하기

### 핵심 학습 포인트
- ✅ JavaScript 8가지 자료형 마스터
- ✅ `||` vs `??` 연산자 완벽 구분  
- ✅ `null` vs `undefined` 차이점 명확히 알기
- ✅ falsy 값 7가지 구분하고 활용하기
- ✅ 실무에서 자주 쓰는 패턴 익히기

## 🚀 바로 실행하기

### 브라우저로 실행 (추천!)
```bash
open index.html
```
버튼 클릭으로 즉시 결과 확인 가능!

### 터미널로 실행
```bash
node javascript-practice.js
```

## 📚 핵심 개념 정리

### 1️⃣ 자료형 8가지 + typeof 결과
```javascript
typeof 42              // "number"
typeof "Hello"         // "string"
typeof true            // "boolean"
typeof [1, 2, 3]       // "object" ← 배열도 객체!
typeof {name: "김멘티"} // "object"
typeof function(){}    // "function"
typeof undefined       // "undefined"
typeof null            // "object" ← 이게 함정!
```

### 2️⃣ Falsy 값 7가지 (외우기!)
```javascript
Boolean(false)     // false
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
Boolean(0n)        // false (BigInt)
```

### 3️⃣ || vs ?? 완벽 정리
```javascript
// || 연산자: falsy면 뒤로
"" || "기본값"        // "기본값" ← 빈 문자열은 falsy
0 || "기본값"         // "기본값" ← 0은 falsy
false || "기본값"     // "기본값" ← false는 falsy

// ?? 연산자: null/undefined만 뒤로
"" ?? "기본값"        // "" ← 빈 문자열 그대로 유지
0 ?? "기본값"         // 0 ← 숫자 0 그대로 유지  
false ?? "기본값"     // false ← 불린 false 그대로 유지
null ?? "기본값"      // "기본값" ← null만 교체
undefined ?? "기본값" // "기본값" ← undefined만 교체
```

## 💡 실무 활용 패턴

### 패턴 1: 사용자 입력 처리
```javascript
function processUser(user) {
    // 이름: 빈 문자열도 "익명"으로 처리하고 싶음
    const name = user?.name || "익명";
    
    // 나이: 0살도 유효한 값이므로 null/undefined만 기본값
    const age = user?.age ?? 18;
    
    // 활성상태: false도 유효한 값
    const isActive = user?.isActive ?? true;
    
    return { name, age, isActive };
}
```

### 패턴 2: 설정값 검증
```javascript
const config = {
    debug: false,      // 의도적으로 끈 상태
    timeout: 0,        // 의도적으로 타임아웃 없음
    apiUrl: null,      // 아직 설정 안됨
    retries: undefined // 아직 설정 안됨
};

// 각각 적절한 연산자 선택
config.debug && console.log("디버그 모드");           // false면 실행 안됨
config.timeout || console.log("타임아웃 미설정");      // 0이므로 실행됨
config.apiUrl ?? console.log("API URL 미설정");       // null이므로 실행됨
```

## 🔥 실습 미션

### 미션 1: 타입 맞추기
다음 코드의 결과를 예측해보세요!
```javascript
console.log(typeof []);          // ?
console.log(typeof null);        // ?
console.log(null == undefined);  // ?
console.log(null === undefined); // ?
```

### 미션 2: 연산자 마스터
올바른 연산자를 선택하세요!
```javascript
const score = 0;           // 0점도 유효한 점수
const name = "";           // 빈 이름은 "익명"으로
const url = null;          // 아직 설정 안됨
const isVip = false;       // 의도적으로 일반회원

// TODO: 올바른 연산자 선택
const finalScore = score ?? 100;    // 0점 유지하고 싶음
const finalName = name || "익명";    // 빈 이름은 익명으로
const finalUrl = url ?? "/default"; // null만 기본값으로
```

## ⚠️ 자주 하는 실수

```javascript
// ❌ 잘못된 예
if (user.age) {
    // 0살 아기는 조건에 안 걸림!
}

// ✅ 올바른 예  
if (user.age != null) {
    // 0살도 유효한 나이로 처리
}

// ❌ 잘못된 예
const config = settings.timeout || 5000;
// timeout이 0이면 의도와 다르게 5000이 됨

// ✅ 올바른 예
const config = settings.timeout ?? 5000;
// timeout이 0이면 0 유지, null/undefined만 5000
```

## 🎮 실습 파일

- `index.html` - 브라우저에서 interactive하게 실습
- `javascript-practice.js` - 모든 예제 코드와 설명

브라우저에서 개발자 도구(F12)도 열어서 콘솔 결과를 함께 확인해보세요!

---
**🎓 Next Week Preview:** 함수와 스코프, 클로저의 세계로!