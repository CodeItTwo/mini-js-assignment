// 놀이공원 요금 계산기
// 🚨 버그: 0살일 때 요금을 계산할 수 없음

/*
나이(age)에 따라 요금을 계산 하는 함수
 */
function calculatePrice(age, bage) {
  // 문제가 있는 조건문
  if (bage === "독립유공자") {
    return "무료";
  }
  if (typeof age !== "number" || age < 0) {
    return "❌ 나이를 알 수 없어서 요금을 계산할 수 없습니다.";
  } else {
    switch (true) {
      case age <= 3:
        return "무료";
      case age <= 12:
        return "5,000원 (어린이)";
      case age <= 64:
        return "10,000원 (성인)";
      default:
        return "3,000원 (경로우대)";
    }
  }
  // step1 답
  // if (age >= 0) {
  //   if (age <= 3) {
  //     return "무료";
  //   } else if (age <= 12) {
  //     return "5,000원 (어린이)";
  //   } else if (age <= 64) {
  //     return "10,000원 (성인)";
  //   } else {
  //     return "3,000원 (경로우대)";
  //   }
  // } else {
  //   return "❌ 나이를 알 수 없어서 요금을 계산할 수 없습니다.";
  // }
}

/*
  전달받은 나이(age)에 따라 가격을 계산하고, HTML에 결과를 표시하는 역할
 */
function testAge(age, bage) {
  const result = calculatePrice(age, bage);

  let display;
  if (bage === "독립유공자") {
    // 독립유공자 일 경우 age 상관없이 "독립유공자 결과"로 나올 수 있도록 조건 추가.
    display = "독립유공자";
  } else {
    // 독립유공자가 아닐 경우, 나이 호출
    display = `${age}살`;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<h3>${display} 결과:</h3><p>${result}</p>`;
}

// 페이지 로드시 설명 표시
window.onload = function () {
  document.getElementById(
    "result"
  ).innerHTML = `<p>👆 위의 버튼들을 클릭해서 각 나이별 요금을 확인해보세요!</p>
         <p><strong>특히 0살 버튼을 클릭해보세요. 무료여야 하는데...</strong></p>`;
};
