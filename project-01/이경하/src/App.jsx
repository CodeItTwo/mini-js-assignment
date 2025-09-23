import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [targetValue, setTargetValue] = useState('apple');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onChangeTargetWord = (e) => {
    setTargetValue(e.target.value);
  };

  const wordsArr = targetValue.split('');
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

  function isEqualWords(targetValue, value) {
    if (String(targetValue) === String(value)) {
      return '🎉 Collect!';
    }
    return;
  }

  let equalWords = isEqualWords(targetValue, value);

  return (
    <div className="app">
      <p>같은 글자수 : {charCount}</p>
      <p>입력값과 WORDS 가 동일한가? : {equalWords} </p>
      {/* <p>대상 문자 : {WORDS}</p> */}
      <p>Target WORD : </p>
      <input value={targetValue} onChange={onChangeTargetWord}></input>
      <p>Your Input : </p>
      <input value={value} onChange={onChangeInput} />
    </div>
  );
}

export default App;
