// Step 1: Object.assign 구현하기 - myObjectAssign 를 완성 해주세요
function myObjectAssign(target, ...sources) {
    for (const source of sources) { // for .. of 를 사용해 실제 객체를 꺼내옴 (소스들에서 꺼내온 실제 객체를 소스에 가져옴)
        for (const key in source) {  // 꺼낸 객체의 key 들을 돌아봄
                target[key] = source [key]; // target에 key 복사 
            }
        }
    return target;
}

function testStep1() {
    try {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        
        const result = myObjectAssign({}, obj1, obj2, obj3);
        
        if (JSON.stringify(result) === JSON.stringify({ a: 1, b: 2, c: 3 })) {
            document.getElementById('result1').textContent = '✅ 성공! myObjectAssign이 올바르게 작동합니다.';
        } else {
            document.getElementById('result1').textContent = '❌ 실패! 다시 시도해보세요.';
        }
    } catch (error) {
        document.getElementById('result1').textContent = '❌ 에러: ' + error.message;
    }
}

// Step 2: 깊은복사 구현하기 - 예제 객체(original)를 복사해주세요
function myDeepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {  // null 이나 원시타입은 그대로 반환
        return obj;
    }
    const deepCopy = Array.isArray(obj) ? [] : {}; // obj가 배열이면 새로운 배열 생성, 객체면 객체 생성

    for (const key in obj) {  // obj 객체 안에 있는 모든 키를 꺼내옴
        if (obj.hasOwnProperty(key)) {
            deepCopy[key] = myDeepCopy(obj[key]); // obj[key] 값을 깊은 복사하여 deepCopy 라는 새 객체에 저장
        }
    }
    return deepCopy; // 복사한 새 객체를 반환
}


function testStep2() {
    try {
        const original = {
            name: 'test',
            numbers: [1, 2, 3],
            nested: { value: 'deep' }
        };
        
        const copied = myDeepCopy(original);
        copied.numbers.push(4);
        copied.nested.value = 'changed';
        
        if (original.numbers.length === 3 && original.nested.value === 'deep') {
            document.getElementById('result2').textContent = '✅ 성공! 깊은복사가 올바르게 작동합니다.';
        } else {
            document.getElementById('result2').textContent = '❌ 실패! 원본이 변경되었습니다. 다시 시도해보세요.';
        }
    } catch (error) {
        document.getElementById('result2').textContent = '❌ 에러: ' + error.message;
    }
}

// Step 3: 비교하기
function compareCopyMethods() {
    // 👈여기에 구현하세요
    // const shallow = ?
    // const deep = ?
}

function testStep3() {
    try {
        const original = { name: 'John', info: { age: 25 } };
        
        //  구현해야 할 부분
        const shallow = { ...original };  // 힌트로 제공
        const deep = myDeepCopy(original);
        
        shallow.info.age = 30;
        deep.info.age = 35;
        
        const result = `원본 age: ${original.info.age}
        얕은복사 후 원본이 ${original.info.age === 30 ? '변경됨' : '보존됨'}
        깊은복사는 원본을 ${original.info.age === 25 ? '보존함' : '변경함'}`;
        
        document.getElementById('result3').textContent = result;
    } catch (error) {
        document.getElementById('result3').textContent = '❌ 에러: ' + error.message;
    }
}