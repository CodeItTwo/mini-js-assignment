const getSameCharNum = (words, text) => {  // text: 입력받은 문자열
  // Step 1 - 같은 글자 수 표시하기
  let num = 0;  // 일치하는 글자수
  words = new Set(words); // set은 중복을 허용하지 않음

  for(let w of words) {
    for(let t of text) {
      if(w === t) num++;
    }
  }

  return num;
}

export default getSameCharNum;