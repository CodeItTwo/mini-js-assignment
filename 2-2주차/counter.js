document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded 라는 이벤트를 사용하면 DOM 트리가 완전 구축된 뒤 실행함으로 BODY까지 다 로드 된후에 실행이됨
let clickCount = 0;

const button = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');
const messageDiv = document.getElementById('message');

button.addEventListener('click', function() {
    clickCount++;
    countDisplay.textContent = clickCount;
        
    if (clickCount === 1) {
        messageDiv.innerHTML = '<p style="color: green;">첫 번째 클릭!</p>';
    } else if (clickCount === 5) {
        messageDiv.innerHTML = '<p style="color: blue;">5번 클릭 달성!</p>';
    } else if (clickCount >= 10) {
        messageDiv.innerHTML = '<p style="color: red;">10번 이상 클릭했습니다!</p>';
    }
});

// 페이지 로드 시 초기 메시지 표시
messageDiv.innerHTML = '<p style="color: gray;">버튼을 클릭해보세요!</p>';
})