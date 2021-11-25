import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div><span>DOOP!</span></div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {console.log(data)}
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
