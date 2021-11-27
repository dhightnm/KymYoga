import React, { useEffect, useState } from 'react'
import logo from '../../src/logo.svg';

const Home = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

    return (
        <div>
            <header className="App-header">
            <div><span>Hello, world!</span></div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {console.log(data)}
                {!data ? "Loading..." : data}
            </p>
        </header>
            
        </div>
    )
}

export default Home
