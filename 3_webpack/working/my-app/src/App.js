import React from 'react';
import './index.scss';
import logo from './logo-og.png';

function App() {
  let a = null??22;
  return (
  <div>
    <p className="test">dsff{a}</p>
    <img src={logo} />
  </div>
  );
}

export default App;
