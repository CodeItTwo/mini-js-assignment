// 핸드폰 번호 검증기
// 🚨 버그: 특정 번호들이 제대로 검증되지 않음

/*
핸드폰 번호가 올바른 형식인지 검증하는 함수
*/
function validatePhone(phoneNumber) {
    if(!phoneNumber || phoneNumber.trim() === '') {
        return "❌ 핸드폰 번호를 입력해주세요.";
    }

    const validPrefixes = ['010', '011', '016', '017', '018', '019'];
    const phoneParts = phoneNumber.replace(/\s/g, "").split("-");  // ✅ phoneParts = [[010], [1234], [7284]]
                                                                    // ✅ /\s: 공백문자, g: 문자열 내 모든 공백문자를 찾음, "": 찾은 공백을 ""로 치환
    function ifOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }


    //const 조건문 = false
    // 🚨 버그를 해결하고 알맞은 조건문을 기입하세요
    
    // 1. 하이픈이 포함된 형식인지 확인
    if (phoneParts.length !== 3) {  // ✅ phoneParts는 phoneNumber를 하이픈 기준으로 나눈 문자열의 배열로, 항상 길이가 3이 되어야함
        return "❌ 올바른 길이가 아닙니다.";
    }
    
    // 2. 하이픈 위치 확인 (4번째, 9번째 자리) ✅ + 8번째 자리에도 있을 수 있음(중간번호가 3자리일 때)
    if (phoneParts[0].length !== 3 || !(phoneParts[1].length === 3 || phoneParts[1].length === 4) || phoneParts[2].length !== 4) {
        return "❌ 하이픈 위치가 잘못되었습니다.";
    }

    // 🚨 버그: 모든 유효한 앞자리를 체크하지 못함
    if (!validPrefixes.includes(phoneParts[0])) {   //✅ 위에서 정의한 ValidPrefixes 활용
        return "❌ 지원하지 않는 통신사 번호입니다.";
    }

    
    // 중간 번호 (4자리)
    // 🚨 버그: 숫자인지 제대로 확인하지 못함
    if (!ifOnlyNumbers(phoneParts[1])) {    // ✅ 위에서 정의한 ifOnlyNumbers 함수 활용
        return "❌ 중간 번호가 올바르지 않습니다.";
    }
    
    // 뒷자리 번호 (4자리)
    // 🚨 버그: 숫자인지 제대로 확인하지 못함
    if (!ifOnlyNumbers(phoneParts[2])) {    // ✅ 위에서 정의한 ifOnlyNumbers 함수 활용
        return "❌ 뒷자리 번호가 올바르지 않습니다.";
    }

    return "✅ 올바른 핸드폰 번호입니다!";
}

/*
전달받은 핸드폰 번호를 검증하고 결과를 화면에 표시
*/
function testPhone(phoneNumber) {
    const result = validatePhone(phoneNumber);
    const display = phoneNumber === '' ? '(빈 문자열)' : phoneNumber;
    
    document.getElementById('result').innerHTML = 
        `<h3>${display} 검증 결과:</h3><p>${result}</p>`;
}

// 페이지 로드시 설명 표시
window.onload = function() {
    document.getElementById('result').innerHTML = 
        `<p>👆 위의 버튼들을 클릭해서 각 번호의 검증 결과를 확인해보세요!</p>
         <p><strong>특히 011번과 빈 문자열을 테스트해보세요. 문제가 있을 겁니다...</strong></p>`;
};