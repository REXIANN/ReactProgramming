import logo from './logo.svg';
import './App.css';


function App() {
  function onClick() { 
    import('./data.json').then(({default: data}) => {
      console.log({ data })
    })
  }
  const myUrl = process.env.REACT_APP_API_URL
  console.log(myUrl)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there! {myUrl}
        </p>
        <button onClick={onClick}>데이터 보여주세요</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
