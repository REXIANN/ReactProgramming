// 리액트가 반환할 수 있는 것들
import React from 'react';

export default function App() {
  return <React.Fragment>
    <p>Hello</p>
    <p>World</p>
  </React.Fragment>
}

// 불리언
export default function Counter() {
  const [count, setCount] = useState({ value: 0});
  function onClick() {
    setCount({...count, value: count.value + 1});
  }
  return (
    <div>
      {count.value > 0 && <Title title={`current count: ${count.value}`} />}
    </div>
  )
}
  
// 리액트 포탈
import ReactDOM from 'react-dom';

export default function App() {
  return (
    <>
      <p>hello</p>
      ReactDOM.createPortal(
        <div>
          <p>hello another world</p>
        </div>,
        document.getElementById('anotherRoot')
      )
    </>
  )
}