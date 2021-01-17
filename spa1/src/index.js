import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    window.onpopstate = function (event) {
      console.log(`location: ${document.location}, state: ${event.state}`)
      setPageName(event.state);
    };
  }, []);

  function onClick1() {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    setPageName(pageName)
  }

  function onClick2() {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    setPageName(pageName)
  }

  return (
    <div>
      <button onClick={onClick1}>
        page1
      </button>
      <button onClick={onClick2}>
        page2
      </button>
      { !pageName && <Home /> }
      { pageName === 'page1' && <Page1 /> }
      { pageName === 'page2' && <Page2 />}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) 