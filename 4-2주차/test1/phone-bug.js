// 핸드폰 번호 검증기
// 🚨 버그: 특정 번호들이 제대로 검증되지 않음

/*
핸드폰 번호가 올바른 형식인지 검증하는 함수
*/
function validatePhone(phoneNumber) {
  const 조건문 = false;
  // 🚨 버그를 해결하고 알맞은 조건문을 기입하세요

  // 1. 하이픈이 포함된 형식인지 확인
  if (phoneNumber.includes("-") === false) {
    return "❌ 올바른 길이가 아닙니다.";
  }

  // 2. 하이픈 위치 확인 (4번째, 9번째 자리)
  if (
    phoneNumber[3] !== "-" ||
    !(phoneNumber[7] === "-" || phoneNumber[8] === "-")
  ) {
    return "❌ 하이픈 위치가 잘못되었습니다.";
  }

  // 앞자리 번호 추출

  // 중간 하이픈, 끝 하이픈 index 추출(slice를 사용하기 위한 목적)
  const middleHyphen = phoneNumber.indexOf("-");
  const lastHyphen = phoneNumber.lastIndexOf("-");

  // 처음 0부터 3자리까지 slice로 값 추출 console.log(firstNumber)로 확인해보면서 사용하였음
  const firstNumber = phoneNumber.slice(0, 3);

  // 🚨 버그: 모든 유효한 앞자리를 체크하지 못함
  if (
    // 통신사 번호 번호 중 하나가 아니라면
    !(
      firstNumber === "010" ||
      firstNumber === "011" ||
      firstNumber === "016" ||
      firstNumber === "017" ||
      firstNumber === "018" ||
      firstNumber === "019"
    )
  ) {
    return "❌ 지원하지 않는 통신사 번호입니다.";
  }

  // 중간 번호 (4자리)
  // 🚨 버그: 숫자인지 제대로 확인하지 못함

  // slice 메소드에서 middleHyphen 다음의 숫자부터 시작해야 하므로 +1 하였음)
  const middleNumber = phoneNumber.slice(middleHyphen + 1, lastHyphen);

  if (
    // 라이브 코딩시, 뒷자리 먼저 보는 것을 추천
    // 추가 : 다양한 형식 지원(010일때 중간 4자리, 010 아닐 때는 중간 3자리로 함. 그 외에는 지원하지 않는 통신사에서 걸러지기 때문에 추가로 고려하지 않았음)
    !(
      (firstNumber === "010" && middleNumber.length === 4) ||
      (firstNumber !== "010" && middleNumber.length === 3)
    )

    // (원래 앞자리 고려 안했을때)
    // !(middleNumber.lenth !== 3 && middleNumber.lenth !== 4)

    // 실패
    // middleNumber < 10000 ( 0000 ~ 0999 처리가 불가능 )
    // 실패
    // isNaN(Number(phoneNumber[4])) ||
    // isNaN(Number(phoneNumber[5])) ||
    // isNaN(Number(phoneNumber[6]))
  ) {
    return "❌ 중간 번호가 올바르지 않습니다.";
  }

  // 뒷자리 번호 (4자리)
  // 🚨 버그: 숫자인지 제대로 확인하지 못함
  const lastNumber = phoneNumber.slice(lastHyphen + 1);

  if (lastNumber.length !== 4) {
    return "❌ 뒷자리 번호가 올바르지 않습니다.";
  }

  return "✅ 올바른 핸드폰 번호입니다!";
}

/*
전달받은 핸드폰 번호를 검증하고 결과를 화면에 표시
*/
function testPhone(phoneNumber) {
  const result = validatePhone(phoneNumber);
  const display = phoneNumber === "" ? "(빈 문자열)" : phoneNumber;

  document.getElementById(
    "result"
  ).innerHTML = `<h3>${display} 검증 결과:</h3><p>${result}</p>`;
}

// 페이지 로드시 설명 표시
window.onload = function () {
  document.getElementById(
    "result"
  ).innerHTML = `<p>👆 위의 버튼들을 클릭해서 각 번호의 검증 결과를 확인해보세요!</p>
         <p><strong>특히 011번과 빈 문자열을 테스트해보세요. 문제가 있을 겁니다...</strong></p>`;
};
