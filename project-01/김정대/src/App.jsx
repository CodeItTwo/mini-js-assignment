import { useState } from "react";

const WORDS = "apple";

function App() {
  const [value, setValue] = useState("");

  const sameCount = overlapCount(WORDS, value);
  const isSame = value === WORDS;

  // 문자열의 문자 빈도 맵
  function freqMap(str) {
    const map = new Map();
    for (const ch of str) {
      map.set(ch, (map.get(ch) || 0) + 1);
    }
    return map;
  }

  // 빈도 겹침 횟수
  function overlapCount(target, input) {
    const t = freqMap(target);
    const i = freqMap(input);

    let sum = 0;
    for (const [ch, tCount] of t) {
      if (i.has(ch)) {
        sum += Math.min(tCount, i.get(ch));
      }
    }
    return sum;
  }

  return (
    <div className="app">
      <p>같은 글자수 : {sameCount}</p>
      <p>입력값과 WORDS 가 동일한가? : {isSame ? "예" : "아니오"}</p>
      <div>{isSame ? "🎉 Collect!" : "일치하지 않았습니다."}</div>
      <p>대상 문자 : {WORDS}</p>
      <p>input Text : {value}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
