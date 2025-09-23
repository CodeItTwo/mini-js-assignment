import { useState } from 'react';

const WORDS = 'apple';

function App() {
  const [value, setValue] = useState('pepper');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const wordsArr = WORDS.split('');
  const wordsObj = wordsArr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const inputArr = value.split('');
  const inputObj = inputArr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  function isObjEqual(wordsObj, inputObj) {
    let overlap = 0;
    for (const key in wordsObj) {
      if (inputObj[key]) {
        overlap += Math.min(wordsObj[key], inputObj[key]);
      }
    }
    return overlap;
  }

  let charCount = isObjEqual(wordsObj, inputObj);

  function isEqualWords(WORDS, value) {
    if (String(WORDS) === String(value)) {
      return '🎉 Collect!';
    }
    return;
  }

  let equalWords = isEqualWords(WORDS, value);

  return (
    <div className="app">
      <p>같은 글자수 : {charCount}</p>
      <p>입력값과 WORDS 가 동일한가? : {equalWords} </p>
      <p>대상 문자 : {WORDS}</p>
      <p>input Text : </p>
      <input value={value} onChange={onChangeInput} />
    </div>
  );
}

export default App;
