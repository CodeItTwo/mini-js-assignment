// Step 1: Object.assign 구현하기 - myObjectAssign 를 완성 해주세요
function myObjectAssign(target, ...sources) {
    // target이 null이나 undefined인 경우 에러 처리
    // Object.assign은 첫 번째 인자로 null이나 undefined가 오면 TypeError를 던지므로,
    // 이를 그대로 따라 처리해줍니다.
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    
    // target을 객체로 변환
    // Object 타입이 아닐 경우에도 객체로 변환해 할당 가능하도록 처리합니다.
    // 예: 숫자나 문자열도 객체로 감싸서 사용할 수 있게 됩니다.
    const to = Object(target);
    
    // sources 배열의 각 객체를 순회
    // 두 번째 인자부터 전달된 모든 source 객체들을 반복 처리합니다.
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        
        // source가 null이나 undefined가 아닌 경우에만 처리
        // 이 두 값은 복사 대상이 아니므로 건너뜁니다.
        if (source != null) {
            // source 객체의 모든 **열거 가능한** 속성들을 가져옴
            // `for...in`은 열거 가능한 (enumerable) 속성만 반복합니다.
            for (const key in source) {
                // hasOwnProperty로 자신의 속성인지 확인 (상속받은 속성 제외)
                // 상속받은 속성은 복사 대상이 아니므로 제외하고,
                // source 객체 자신이 가진 속성만 복사합니다.
                if (source.hasOwnProperty(key)) {
                    // target 객체에 속성 복사 (얕은 복사)
                    // 값이 객체여도 참조만 복사됩니다 (얕은 복사).
                    to[key] = source[key];
                }
            }
        }
    }

    // 최종적으로 target 객체 반환
    return to;
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
    // 1. falsy 값 체크 (null, undefined, 0, false, "", NaN 등)
    // null이나 undefined는 더 이상 내부 속성이 없으므로 그대로 반환
    if (!obj) {
        return obj;
    }
    
    // 2. 원시 타입 체크 (string, number, boolean, symbol, bigint)
    // 객체가 아닌 값은 복사할 필요 없이 그대로 반환 (원시값은 불변성이 있음)
    if (typeof obj !== 'object') {
        return obj;
    }
    
    // 3. Date 객체 처리
    // Date는 객체지만, 일반 객체와 다르게 getTime()을 통해 복사해야 정확히 동일한 값이 됨
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // 4. 배열인지 체크
    // 배열인 경우 각 요소를 재귀적으로 복사하여 새로운 배열 생성
    if (Array.isArray(obj)) {
        const copiedArray = [];
        for (let i = 0; i < obj.length; i++) {
            // 배열의 각 요소에 대해 깊은 복사 실행
            copiedArray[i] = myDeepCopy(obj[i]);
        }
        return copiedArray;
    }
    
    // 5. 일반 객체 처리
    // 배열도 Date도 아니면서 객체라면 일반 객체로 간주하여 복사 수행
    const copiedObj = {};
    
    // for...in은 객체의 모든 열거 가능한 속성을 순회
    for (const key in obj) {
        // 상속받은 속성은 제외 (자신의 속성만 복사)
        if (obj.hasOwnProperty(key)) {
            // 속성의 값이 객체일 수 있으므로 재귀적으로 깊은 복사
            copiedObj[key] = myDeepCopy(obj[key]);
        }
    }
    
    // 최종적으로 복사된 객체 반환
    return copiedObj;
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
    const original = { name: 'John', info: { age: 25 } };
    
    // 얕은복사 (스프레드 연산자 사용)
    const shallow = { ...original };
    
    // 깊은복사 (위에서 만든 함수 사용)
    const deep = myDeepCopy(original);
    
    // 테스트
    shallow.info.age = 30;
    deep.info.age = 35;
    
    console.log('original.info.age:', original.info.age);// 👈여기에 구현하세요
    // 이렇게 되는 것과 같음:
    // shallow = {
    //   name: 'John',        // 값 복사 (독립적)
    //   info: original.info  // 참조 복사 (공유!)
    // }
    //original.info === shallow.info  // true (같은 객체!)
    //original.info === deep.info     // false (다른 객체)

    
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