import React from 'react';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import './App.css';

// import Home from './components/home'
// import About from './components/about'
// import Pricing from './components/pricing'

function App() {
  
  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar/>
        {/* <Routes>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route exact path="/" component={Home}/>
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
