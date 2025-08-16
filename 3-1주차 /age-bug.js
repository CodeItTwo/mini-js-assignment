// 놀이공원 요금 계산기
// 🚨 버그: 0살일 때 요금을 계산할 수 없음


//나이(age)에 따라 요금을 계산 하는 함수

/*
function calculatePrice(age) {
    // 문제가 있는 조건문
    if (age != null) {
        if (age <= 3) {
            return "무료";
        } else if (age <= 12) {
            return "5,000원 (어린이)";
        } else if (age <= 64) {
            return "10,000원 (성인)";
        } else {
            return "3,000원 (경로우대)";
        }
    } else {
        return "❌ 나이를 알 수 없어서 요금을 계산할 수 없습니다.";
    }
}
*/

//switch문으로 변경
function calculatePrice(age, badge) {
	if (badge === "독립유공자") {
        return "무료";
    }

    switch (true ?? age != null) {
	    case (age <= 3 && age !== null):
		    return "무료";
		    break;
	    case (age <= 12 && age !== null):
            return "5,000원 (어린이)";
            break;
        case (age <= 64 && age !== null):
            return "10,000원 (성인)";
            break;
        case (age > 64 && age !== null):
            return "3,000원 (경로우대)";
            break;
        default:
            return "❌ 나이를 알 수 없어서 요금을 계산할 수 없습니다.";
        }
    
}

/*
  전달받은 나이(age)에 따라 가격을 계산하고, HTML에 결과를 표시하는 역할
   + badge가 있는 조건 추가 
 */
function testAge(age, badge) {
    const result = calculatePrice(age, badge);
    const display = badge
        ? badge
        : (age === null ? 'null' : `${age}살`);

    // document → 브라우저가 HTML 문서를 객체로 표현한 것(DOM의 최상위 진입점)
    // getElementById('result') → HTML에서 id="result"인 요소를 찾아 반환
    // innerHTML → 해당 요소 안의 HTML 내용을 읽거나(가져오기) 변경(설정)하는 속성
    document.getElementById('result').innerHTML =
        `<h3>${display} 결과:</h3><p>${result}</p>`;
}

// 페이지 로드시 설명 표시
window.onload = function() {
    document.getElementById('result').innerHTML = 
        `<p>👆 위의 버튼들을 클릭해서 각 나이별 요금을 확인해보세요!</p>
         <p><strong>특히 0살 버튼을 클릭해보세요. 무료여야 하는데...</strong></p>`;
};
