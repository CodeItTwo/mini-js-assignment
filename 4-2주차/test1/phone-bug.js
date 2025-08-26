// 핸드폰 번호 검증기
// 🚨 버그: 특정 번호들이 제대로 검증되지 않음

/*
핸드폰 번호가 올바른 형식인지 검증하는 함수
*/
function validatePhone(phoneNumber) {
    const 조건문 = false
    // 🚨 버그를 해결하고 알맞은 조건문을 기입하세요
    
    // 1. 하이픈이 포함된 형식인지 확인
    const phoneNumberArray = [...phoneNumber]; // phoneNumber 요소 하나하나를 배열로 변환
    const checkHyphen = phoneNumberArray.filter(el => el === '-') // 요소 중 '-'만 따로 배열로
    if (checkHyphen.length !== 2) { // '-' 배열의 길이가 2가 아님 => '-'가 두개가 아님
        return "❌ 올바른 길이가 아닙니다.";
    }
    
    // 2. 하이픈 위치 확인 (4번째, 9번째 자리)
    const lengthThirteenOrTwelve = phoneNumberArray.length === 13 ? [3, 8] : [3, 7]; // 번호 길이가 13이면 4번째 9번째, 나머지(길이가 12)는 3번째 8번째 인덱스 배열로
    const checkHyphenPosition = lengthThirteenOrTwelve.every( index => phoneNumberArray[index] === '-') // 인덱스 모두에 하이픈이 있는지 확인
    if (!checkHyphenPosition) { // 하나라도 하이픈이 없으면 리턴
        return "❌ 하이픈 위치가 잘못되었습니다.";
        }
    
    /*1,2(하이픈 관련) 로 나누기 전 하드코딩
    if (phoneNumber.length === 13) {
        if (phoneNumber[3] !== '-' || phoneNumber[8] !== '-') {
            return "❌ 하이픈 위치가 잘못되었습니다.";
        } 
    }   else if (phoneNumber.length === 12) {
        if (phoneNumber[3] !== '-' || phoneNumber[7] !== '-') {
            return "❌ 하이픈 위치가 잘못되었습니다.";
            }
        }*/
    
    
    // 앞자리 번호 추출
    // 🚨 버그: 모든 유효한 앞자리를 체크하지 못함
    const validPrefixes = ['010', '011', '016', '017', '018', '019']; // 유효한 앞자리 번호 선언
    const numbersPrefix = phoneNumber.split('-')[0]; // .split('-'): phoneNumber 중 '-'을 제거 -> -를 기준으로 나뉘어 나머지 숫자들 배열로 -> [0]: 그 중 첫번째 요소(즉 앞자리 번호)
    if (!validPrefixes.includes(numbersPrefix)) { // phoneNumber 추출된 앞자리 번호가 validPrefixes에 있는지 확인
        return "❌ 지원하지 않는 통신사 번호입니다.";
    }
    
    // 중간 번호 (4자리)
    // 🚨 버그: 숫자인지 제대로 확인하지 못함
    const nonHyphen = phoneNumber.replace(/-/g, ""); // phoneNumber중 하이픈 제거
    const numberOnly = /^[0-9]+$/ // phoneNumber중 숫자만 있는지 체크하기 위한 선언(정규식)
    if (!numberOnly.test(nonHyphen)) { // 정규식이 일치하는지 확인하는 메서드 test 사용
        return "❌ 번호가 올바르지 않습니다.";
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