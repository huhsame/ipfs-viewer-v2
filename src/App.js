import React, { useState, useEffect, useRef } from 'react';
import VideoPart from './components/videoPart';
import CSIPart from './components/CSIPart';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/users')
      .then((response) => response.json())
      .then((data) => {
        // 받아온 데이터를 data 변수에
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>by Huhsame</p>
      </header>
      <div>
        {/* 삼항연산자 */}
        {typeof data.users === 'undefined' ? (
          // fetch가 완료되지 않았을 경우에 대한 처리
          <p>loading...</p>
        ) : (
          data.users.map((u) => <p>{u.name}</p>)
        )}
      </div>
      <VideoPart></VideoPart>
      <CSIPart></CSIPart>
    </div>
  );
}

export default App;
