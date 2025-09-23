import {useState} from 'react';
import getSameCharNum from "./getSameCharNum";

const WORDS = "apple";

function App() {
  const [inputText, setInputText] = useState('');
  const [sameNum, setSameNum] = useState(0);

  const handleChange = (e) => {
    // 변경되는 text 실시간 반영
    const value = e.target.value;
    setInputText(value);

    // 숫자 변경 사항 반영
    const num = getSameCharNum(WORDS, value);
    setSameNum(num);
  }

  return (
    <div className="app">
      <p>같은 글자수 : </p>
      <p>입력값과 WORDS 가 동일한가? : </p>
      <p>대상 문자 : {WORDS}</p>
      <p>input Text : {inputText}</p>
      <input
        value = {inputText}
        onChange = {handleChange}
      />
      <p>{sameNum}</p>
    </div>
  )
}

export default App