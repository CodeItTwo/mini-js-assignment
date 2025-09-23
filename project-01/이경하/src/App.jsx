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

  let result = isObjEqual(wordsObj, inputObj);

  return (
    <div className="app">
      <p>같은 글자수 : </p>
      <p>입력값과 WORDS 가 동일한가? : </p>
      <p>대상 문자 : {WORDS}</p>
      <p>input Text : </p>
      <input value={value} onChange={onChangeInput} />
      <p>같은 글자 수 : {result} </p>
    </div>
  );
}

export default App;
